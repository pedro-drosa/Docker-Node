import FindAllUsersService from "../services/FindAllUsersService.js";

export default class UsersController {
  index(req, res) {
    const { id } = req.params;
    return res.json({ message: `show a single user with id: ${id}` });
  }

  async show(req, res) {
    const users = await FindAllUsersService.execute();
    return res.json(users);
  }
}
