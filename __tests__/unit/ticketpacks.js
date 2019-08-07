import { TicketPack } from "../../src/models";
import faker from "faker";
import factory from "../factories";

module.exports = () => {

  var ticketPack;

  describe("Testing CRUD operations on User model", () => {

    it("Should insert a TicketPack", async () => {
      ticketPack = await factory.create("TicketPack", {});
      expect(ticketPack.id).not.toBeNull();
    });

    it("Should update a TicketPack", async () => {
      const number = faker.random.number();
      await ticketPack.update({ number });
      expect(ticketPack.number).toBe(number);
    });

    it("Should retrieve a TicketPack", async () => {
      const id = ticketPack.id;
      const _ticketPack = await TicketPack.findByPk(id);
      expect(_ticketPack).not.toBeNull();
    });

    it("Should delete a TicketPack", async () => {
      const id = ticketPack.id;
      await ticketPack.destroy();
      const _ticketPack = await TicketPack.findByPk(id);
      expect(_ticketPack).not.toBeNull();
    });
  });
  
};