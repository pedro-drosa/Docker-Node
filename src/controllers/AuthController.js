import CreateAuthService from '../services/CreateAuthService.js';

class AuthController {
  async create(req, res) {
    const { email, name, password } = req.body;
    const user = await CreateAuthService.execute({ name, email, password });
    return res.json(user);
  }
}

export default AuthController;
