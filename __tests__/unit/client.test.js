import { Client } from "../../src/models";
import faker from "faker";
import factory from "../factories";

module.exports = () => {
  describe("Testing CRUD operations on Client model", () => {
    var client;

    it("Should insert Client", async () => {
      client = await factory.create("Client", {});
      expect(client.id).not.toBeNull();
    });

    it("Should update an Client", async () => {
      const email = faker.internet.email();
      await client.update({
        email,
      });

      expect(client.email).toBe(email);
    });

    it("Should retrieve an Client", async () => {
      const id = client.id;
      const _client = await Client.findOne({
        where: {
          id,
        },
      });
      expect(_client).not.toBeNull();
    });

    it("Should delete an Client", async () => {
      const id = client.id;
      await client.destroy();
      const _client = await Client.findOne({
        where: {
          id,
        },
      });
      expect(_client).toBeNull();
    });
  });
};
