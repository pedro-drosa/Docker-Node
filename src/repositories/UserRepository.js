import User from '../models/User.model.js';

class UserRepository {
  findAllUsers() {
    return User.find();
  }

  createUser({ name, email, password }) {
    return User.create({ name, email, password });
  }

  removeUser(id) {
    return User.deleteOne({ id });
  }
}

export default UserRepository;
