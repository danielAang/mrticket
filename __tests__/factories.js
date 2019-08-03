import faker from "faker";
import { factory } from "factory-girl";
import { User } from "../src/models";

factory.define("User", User, {
  username: faker.internet.email(),
  password: faker.internet.password(),
  name: faker.name.findName(),
  birth_date: faker.date.past(),
});

module.exports = factory;
