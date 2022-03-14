import { Router } from 'express';
import usersRoutes from './users.routes.js';
import authRoutes from './auth.routes.js';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ users: '/users', auth: '/auth' });
});

routes.use('/users', usersRoutes);
routes.use('/auth', authRoutes);

export default routes;
