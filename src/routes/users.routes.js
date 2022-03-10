import { Router } from "express";

import UsersController from "../controllers/UsersController.js";

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.get("/:id", usersController.index);
usersRoutes.get("/", usersController.show);

export default usersRoutes;