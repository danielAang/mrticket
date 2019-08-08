import faker from 'faker';
import supertest from 'supertest';
import app from '../../src/app';
import db, { User } from '../../src/models';

beforeAll(async () => {
  await db.sequelize.sync({ force: true, logging: false });
});

describe("Test /users endpoint operations", () => {
  
  it("Should save an user and return a User with an id", async () => {
    const user = {
      username: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.findName(),
      birth_date: faker.date.past()
    };
    const response = await supertest(app).post('/users').send(user).set('Accept', 'application/json');
    const _user = response.body;
    expect(_user.id).not.toBeNull();
  });
  
  it("It should return an specific user for a given id", async () => {
    const response = await supertest(app).get('/users/1').set('Accept', 'application/json');
    const _user = response.body;
    expect(_user.id).toBe(1);
  });
  
  it("Should return all users and status code of 200", async () => {
    const response = await supertest(app).get('/users').set('Accept', 'application/json');
    const statusCode = response.statusCode;
    const users = response.body;
    expect(statusCode).toBe(200);
    expect(users.length).toBeGreaterThan(0);
  });

  it("Shoul delete an user for a given id and return status code of 204", async () => {
    const response = await supertest(app).delete('/users/1').set('Accept', 'application/json');
    const user = await User.findByPk(1);
    expect(response.statusCode).toBe(204);
    expect(user).toBeNull();
  });
  
});

afterAll(() => {
  db.sequelize.close();
});