import FindAllUsersService from '../services/FindAllUsersService.js';
import CreateUserService from '../services/CreateUserService.js';
import RemoveUserService from '../services/RemoveUserService.js';

export default class UsersController {
  async index(req, res) {
    const { id } = req.params;
    return res.json({ message: `show a single user with id: ${id}` });
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
