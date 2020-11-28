import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';
import SessionServices from '../services/SessionServices';

class SessionController {

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const userRepository = new UserRepository();
    const sessionService = new SessionServices(userRepository);

    const user = await sessionService.execute({ email, password });

    res.json(user);
  }

};

export default new SessionController();