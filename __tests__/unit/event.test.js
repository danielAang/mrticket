import truncate from "../utils/truncate";
import factory from "../factories";

var user = null;
var client = null;

beforeAll(async () => {
  await truncate();

  user = await factory.create("User", {});
  client = await factory.create("Client", {});
});

describe("Testing CRUD operations on Event model", () => {

  var event;
  
  it("Should insert Event", async () => {
    event = await factory.create("Event", {});
    expect(event.id).not.toBeNull();
  });

  it("Should set an User and Client to an Event", async () => {
    event.setClient(client);
    event.setUser(user);
    await event.save();

    expect(event.user_id).not.toBeNull();
    expect(event.client_id).not.toBeNull();
  });

  /* it('Should update an Event', async () => {
    const email = faker.internet.email();
    await event.update({
      username: email
    });

    expect(event.username).toBe(email);
  });  

  it("Should retrieve an Event", async () => {
    const id = event.id;
    const _event = await User.findOne({
      where: {
        id
      }
    });
    expect(_event).not.toBeNull();
  });

  it("Should delete an Event", async () => {
    const id = event.id;
    await event.destroy();
    const _event = await User.findOne({
      where: {
        id
      }
    });
    expect(_event).toBeNull();
  }); */
});
