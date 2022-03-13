import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class FindOneUserService {
  static async execute(id) {
    try {
      if (id.length > 24) return { error: 'the given id format is invalid' };
      return await userRepository.findOneUserById(id);
    } catch (error) {
      return { error: 'Error fetching user, check data and try again' };
    }
  }
}

export default FindOneUserService;
