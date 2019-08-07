import faker from "faker";
import { factory } from "factory-girl";
import { User, Client, Event, TicketPack } from "../src/models";

factory.define("User", User, {
  username: faker.internet.email(),
  password: faker.internet.password(),
  name: faker.name.findName(),
  birth_date: faker.date.past(),
});

factory.define("Client", Client, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  cpf: "05300270032",
  cnpj: "96179842000121",
  address: faker.address.streetAddress(true),  
});

factory.define("Event", Event, {
  name: faker.company.companyName(),
  date: faker.date.future(),
  address: faker.address.streetAddress()
});

factory.define("TicketPack", TicketPack, {
  number: faker.random.number()
});

module.exports = factory;
