import UserRepository from '../repositories/UserRepository.js';

const userRepository = new UserRepository();

class CreateUserService {
  static async execute({ name, email, password }) {
    const userExists = await userRepository.findOneUserByEmail(name, email);

    if (userExists) return { erorr: 'The email provided is already in use' };
    else return userRepository.createUser({ name, email, password });
  }
}

export default CreateUserService;
