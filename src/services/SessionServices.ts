import AppError from "../errors/AppError";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from "../models/User";

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

class SessionServices {

  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.userRepository.findOneUserEmail(email);

    if(!user) {
      throw new AppError('User not found', 404);
    }

    const isCorrectPassword = await compare(password, user.password);
    
    if(!isCorrectPassword) {
      throw new AppError('Invalid password', 401);
    }

    const token = sign({ user: user.id }, process.env.APP_SECRET as string, { 
      expiresIn: '1d',
     });

    return {
      token
    };
  };
};

export default SessionServices;