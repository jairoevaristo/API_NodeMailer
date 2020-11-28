import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';
import SendMailerServices from '../services/SendMailerServices';

class SendMailerController {
  
  public async recoverPassword(req: Request, res: Response) {
    const { email } = req.body;

    const userRepository = new UserRepository()
    const sendMailerService = new SendMailerServices(userRepository);

    const user = await sendMailerService.execute(email);
    return res.json(user);
  }

};

export default new SendMailerController();