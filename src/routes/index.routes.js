import { Router } from 'express';

import usersRoutes from './users.routes.js';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ users: '/users' });
});

routes.use('/users', usersRoutes);

export default routes;
