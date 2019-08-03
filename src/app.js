import dotenv from 'dotenv';
import express from "express";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();
    this.configServer();
    this.configRoutes();
  }

  configServer() {
    dotenv.config({
      path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
    });
    this.server.use(express.json());
  }

  configRoutes() {
    this.server.use(routes);
  }
}

export default new App().server;
