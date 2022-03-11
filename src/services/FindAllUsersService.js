import UserRepository from "../repositories/UserRepository.js";

const userRepository = new UserRepository();

class FindAllUsersService {
  static async execute() {
    return await userRepository.findAllUsers();
  }
}

export default FindAllUsersService;
