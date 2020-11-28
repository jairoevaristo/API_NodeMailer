import { getRepository, Repository, UpdateResult } from 'typeorm';
import UserDTO from '../dtos/UserDTO';

import User from '../models/User';
import IUserRepository from './IUserRepository';

class UserRepository implements IUserRepository{

  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create(User: UserDTO): Promise<User> {
    const user = await this.ormRepository.save(User);
    return user;
  }

  async findOneUserEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ email });
    return user;
  }

  async updatePassword(id: number, password: string): Promise<UpdateResult> {
    const user = await this.ormRepository.update(id, { password });
    return user;
  }

  async findAllUsers(): Promise<User[]> {
    const users = await this.ormRepository.find();
    return users;
  }
};

export default UserRepository;