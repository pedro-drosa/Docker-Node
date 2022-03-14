import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository.js';
import PasswordHash from '../utils/PasswordHash.js';

const userRepository = new UserRepository();

class CreateAuthService {
  static async execute({ name, email, password }) {
    const secretKey = process.env.JWT_SECRET_KEY;
    const expiresIn = process.env.JWT_EXPIRES_IN;

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
        const token = jwt.sign({ id: userExists.id }, secretKey, {
          expiresIn,
        });

        const { _id, name, email, createdAt } = userExists;

        return { _id, name, email, createdAt, token };
      }
    }

    return { error: 'invalid username or password' };
  }
}
export default CreateAuthService;
