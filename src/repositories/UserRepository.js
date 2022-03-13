import User from '../models/User.model.js';

class UserRepository {
  findAllUsers() {
    return User.find();
  }

  findOneUserById(id) {
    return User.findById(id);
  }

  findOneUserByNameOrEmail(name, email) {
    return User.findOne({ $or: [{ name }, { email }] }).exec();
  }

  createUser({ name, email, password }) {
    return User.create({ name, email, password });
  }

  removeUser(id) {
    return User.deleteOne({ id });
  }
}

export default UserRepository;
