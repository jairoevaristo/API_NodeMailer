import { UpdateResult } from 'typeorm';
import UserDTO from '../dtos/UserDTO';
import User from '../models/User';

export default interface IUserRepository {
  create(User: UserDTO): Promise<User>

  findOneUserEmail(email: string): Promise<User | undefined> 

  updatePassword(id: number, password: string): Promise<UpdateResult>

  findAllUsers(): Promise<User[]>

};