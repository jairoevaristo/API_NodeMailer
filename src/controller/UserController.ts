import { Request, Response } from 'express';

import UserRepository from '../repositories/UserRepository';
import UserServices from '../services/CreateUserServices';
import FindAllUser from '../services/FindAllUserServices';

class UserController {

 public async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const userServices = new UserServices(userRepository);

    const user = await userServices.execute({ name, email, password });

    return res.json(user);
  }

  public async index(_: Request, res: Response) {
    const userRepository = new UserRepository();
    const findAllUser = new FindAllUser(userRepository);

    const users = await findAllUser.execute();

    return res.json(users);
  }

};

export default new UserController();