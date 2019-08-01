import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.configServer();
    this.configRoutes();
  }

  configServer() {
    this.server.use(express.json());
  }

  configRoutes() {
    this.server.use(routes);
  }
}

export default new App().server;
