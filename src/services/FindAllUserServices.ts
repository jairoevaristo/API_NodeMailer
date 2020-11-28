import User from "../models/User";
import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../repositories/UserRepository";

class FindAllUserServices {
  private userRepository: IUserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(): Promise<User[]> {
    const users = await this.userRepository.findAllUsers();
    return users;
  }
}

export default FindAllUserServices;