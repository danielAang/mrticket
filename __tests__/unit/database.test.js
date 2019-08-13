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

afterAll(async () => {
  await db.sequelize.close();
});
/* userTest(); */
