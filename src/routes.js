import { Router } from "express";
import UserController from './controllers/UserController';

const routes = new Router();

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.index);
routes.post("/users", UserController.store);
routes.delete("/users/:id", UserController.remove);

export default routes;
