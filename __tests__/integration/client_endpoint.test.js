import faker from 'faker';
import supertest from 'supertest';
import app from '../../src/app';
import db, { Client } from '../../src/models';

beforeAll(async () => {
  await db.sequelize.sync({ force: true, logging: false });
});

describe("Test /clients endpoint operations", () => {
  
  it("Should save an client and return a Client with an id", async () => {
    const client = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      cpf: "48090178006",
      cnpj: "45669020000198",
      address: faker.address.streetAddress(true),
    };
    const response = await supertest(app).post('/clients').send(client).set('Accept', 'application/json');
    const _user = response.body;
    expect(_user.id).not.toBeNull();
  });
  
  it("It should return an specific client for a given id", async () => {
    const response = await supertest(app).get('/clients/1').set('Accept', 'application/json');
    const _user = response.body;
    expect(_user.id).toBe(1);
  });

  it("Should update a client for a given id", async () => {
    const client = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      cpf: "48090178006",
      cnpj: "45669020000198",
      address: faker.address.streetAddress(true),
    };
    const response = await supertest(app).put('/clients/1').send(client).set('Accept', 'application/json');
    const _client = response.body;
    expect(_client.email).toBe(client.email);
  });
  
  it("Should return all clients and status code of 200", async () => {
    const response = await supertest(app).get('/clients').set('Accept', 'application/json');
    const statusCode = response.statusCode;
    const clients = response.body;
    expect(statusCode).toBe(200);
    expect(clients.length).toBeGreaterThan(0);
  });  

  it("Shoul delete an client for a given id and return status code of 204", async () => {
    const response = await supertest(app).delete('/clients/1').set('Accept', 'application/json');
    const client = await Client.findByPk(1);
    expect(response.statusCode).toBe(204);
    expect(client).toBeNull();
  });

  it("Should return status code of 400 if not provide an id", async () => {
    const response = await supertest(app).delete('/clients/2').set('Accept', 'application/json');
    const client = await Client.findByPk(2);
    expect(response.statusCode).toBe(400);
    expect(client).toBeNull();
  });
  
});

afterAll(async () => {
  await db.sequelize.close();
});