export default class UsersController {
  index(req, res) {
    return res.json({ message: "Hello Users" });
  }
}
