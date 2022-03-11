import UserRepository from "../repositories/UserRepository.js";

const userRepository = new UserRepository();

class FindAllUsersService {
  static execute() {
    return userRepository.findAllUsers();
  }
}

export default FindAllUsersService;
