import eventTest from "./event";
import userTest from "./user";
import clientTest from "./client";
import db from "../../src/models";

beforeAll(async () => {
  await db.sequelize.sync({ force: true, logging: false });
});

eventTest();

userTest();

clientTest();

afterAll(() => {
  db.sequelize.close();
});
/* userTest(); */
