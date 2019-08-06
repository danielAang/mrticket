import eventTest from "./event.test";
import userTest from "./user.test";
import clientTest from "./client.test";
import db from "../../src/models";

beforeAll(async () => {
  await db.sequelize.sync({ force: true, logging: false });
});

eventTest();

userTest();

clientTest();

afterAll(() => {
  console.log("closing connection");
  db.sequelize.close();
});
/* userTest(); */
