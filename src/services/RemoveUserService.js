import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class RemoveUserService {
  static execute(id) {
    return userRepository.removeUser(id);
  }
}

export default RemoveUserService;
