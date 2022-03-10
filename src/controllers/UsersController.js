export default class UsersController {
  index(req, res) {
    const { id } = req.params;
    return res.json({ message: `show a single user with id: ${id}` });
  }

  show(req, res) {
    return res.json({ message: "Show all users" });
  }
}
