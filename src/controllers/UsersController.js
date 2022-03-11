import FindAllUsersService from '../services/FindAllUsersService.js';
import CreateUserService from '../services/CreateUserService.js';
import RemoveUserService from '../services/RemoveUserService.js';
import FindOneUserService from '../services/FindOneUserService.js';

export default class UsersController {
  async index(req, res) {
    try {
      const { id } = req.params;
      const user = await FindOneUserService.execute(id);
      return res.json(user);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }

  async show(req, res) {
    const users = await FindAllUsersService.execute();
    return res.json(users);
  }

  async create(req, res) {
    const { name, email, password } = req.body;
    const user = await CreateUserService.execute({ name, email, password });
    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;
    const result = await RemoveUserService.execute(id);
    return res.json(result);
  }
}
