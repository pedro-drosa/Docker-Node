import UserRepository from '../repositories/UserRepository.js';
import PasswordHash from '../utils/PasswordHash.js';

const userRepository = new UserRepository();

class CreateAuthService {
  static async execute({ name, email, password }) {
    const userExists = await userRepository.findOneUserByNameOrEmail(
      name,
      email
    );

    if (userExists) {
      const passwordIsCorrect = await PasswordHash.compareHash(
        password,
        userExists.password
      );

      if (passwordIsCorrect) {
        return userExists;
      }
    }

    return { error: 'invalid username or password' };
  }
}
export default CreateAuthService;
