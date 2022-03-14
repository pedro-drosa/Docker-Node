import auth from '../middlewares/auth.js';
import { Router } from 'express';

import UsersController from '../controllers/UsersController.js';

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.get('/:id', usersController.index);
usersRoutes.get('/', auth, usersController.show);
usersRoutes.post('/', usersController.create);
usersRoutes.delete('/:id', usersController.delete);

export default usersRoutes;
