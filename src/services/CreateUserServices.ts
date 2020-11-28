import AppError from "../errors/AppError";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

import { hashSync } from 'bcryptjs';

interface Request {
  name: string;
  email: string;
  password: string;
}

class UserServices {

  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute({ name, email, password }: Request ) {
    
    if (await this.userRepository.findOneUserEmail(email)) {
      throw new AppError('User Exits', 400);
    };

    const passwordHash = await hashSync(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash
    });

    return user;
  }

}

export default UserServices;