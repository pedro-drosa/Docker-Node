import UserRepository from "../repositories/UserRepository.js";

const userRepository = new UserRepository();

class CreateUserService {
  static execute({ name, email, password }) {
    return userRepository.createUser({ name, email, password });
  }
}

export default CreateUserService;
