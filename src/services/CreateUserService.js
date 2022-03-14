import UserRepository from '../repositories/UserRepository.js';
import PasswordHash from '../utils/PasswordHash.js';

const userRepository = new UserRepository();

class CreateUserService {
  static async execute({ name, email, password }) {
    const userExists = await userRepository.findOneUserByNameOrEmail(
      name,
      email
    );

    const hash = await PasswordHash.generateHash(password);

    if (userExists) return { erorr: 'The email provided is already in use' };
    else return userRepository.createUser({ name, email, password: hash });
  }
}

export default CreateUserService;
