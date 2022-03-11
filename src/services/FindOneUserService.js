import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindOneUserService {
  static async execute(id) {
    try {
      return await userRepository.findOneUser(id);
    } catch (error) {
      throw new Error('No user found, check data and try again');
    }
  }
}

export default FindOneUserService;
