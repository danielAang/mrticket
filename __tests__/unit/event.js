import factory from "../factories";
import faker from "faker";
import { Event } from "../../src/models";

module.exports = () => {
  describe("Testing CRUD operations on Event model", () => {
    var event;

    it("Should insert Event", async () => {
      event = await factory.create("Event", {});
      expect(event.id).not.toBeNull();
    });

    it("Should set an User a Event", async () => {
      const user = await factory.create("User", {});
      event.setUser(user);
      expect(event.user_id).not.toBeNull();
    });

    it("Should set an Client to a Event", async () => {
      const client = await factory.create("Client", {});
      event.setClient(client);
      expect(event.client_id).not.toBeNull();
    });

    it("Should update an Event", async () => {
      const title = faker.name.title();
      await event.update({
        name: title,
      });

      expect(event.name).toBe(title);
    });

    it("Should retrieve an Event", async () => {
      const id = event.id;
      const _event = await Event.findOne({
        where: {
          id,
        },
      });
      expect(_event).not.toBeNull();
    });

    it("Should delete an Event", async () => {
      const id = event.id;
      await event.destroy();
      const _event = await Event.findOne({
        where: {
          id,
        },
      });
      expect(_event).toBeNull();
    });
  });
};
