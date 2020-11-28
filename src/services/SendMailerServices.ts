import { hashSync } from 'bcryptjs';
import crypto from 'crypto';

import AppError from "../errors/AppError";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";
import sendMailer from "../config/nodemailer";

class SendMailer {
  private userepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userepository = userRepository;
  }

  public async execute(email: string) {
    const userExit = await this.userepository.findOneUserEmail(email);

    if (!userExit) throw new AppError('User not Found', 404);
    
    const newPassword = crypto.randomBytes(6).toString('hex');
    const newPasswordHash = await hashSync(newPassword, 8);

    await this.userepository.updatePassword(userExit.id, newPasswordHash);

    sendMailer(email, 'Recuperação de Senha', newPassword).catch((err) => {
      throw new AppError(err, 500); 
    });

    return {
      message: 'Send E-mail'
    }

  }

}

export default SendMailer;