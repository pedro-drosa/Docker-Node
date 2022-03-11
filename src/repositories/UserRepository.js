import User from "../models/User.model.js";

class UserRepository {
  async findAllUsers() {
    return await User.find();
  }
}

export default UserRepository;
