import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post('/', authController.create);

export default authRoutes;
