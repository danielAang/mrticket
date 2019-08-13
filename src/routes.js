import { Router } from "express";
import UserController from './controllers/UserController';
import ClientsController from './controllers/ClientsController';

const routes = new Router();

// User routes
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.index);
routes.post("/users", UserController.store);
routes.delete("/users/:id", UserController.remove);

// Clients routes
routes.get("/clients", ClientsController.index);
routes.get("/clients/:id", ClientsController.index);
routes.post("/clients", ClientsController.store);
routes.put("/clients/:id", ClientsController.update);
routes.delete("/clients/:id", ClientsController.remove);

export default routes;
