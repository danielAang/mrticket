import { User } from "../../src/models";
import faker from "faker";
import truncate from "../utils/truncate";
import deleteSqlite from "../utils/deleteSqlite";
import factory from "../factories";

beforeAll(async () => {
  await truncate();
});

describe("Testing CRUD operations on User model", () => {
  
  var user;  
  
  it("Should insert User", async () => {
    user = await factory.create("User", {});
    expect(user.id).not.toBeNull();
  });

  it('Should update an User', async () => {
    const email = faker.internet.email();
    await user.update({
      username: email
    });

    expect(user.username).toBe(email);
  });  

  it("Should retrieve an User", async () => {
    const id = user.id;
    const _user = await User.findOne({
      where: {
        id
      }
    });
    expect(_user).not.toBeNull();
  });

  it("Should delete an User", async () => {
    const id = user.id;
    await user.destroy();
    const _user = await User.findOne({
      where: {
        id
      }
    });
    expect(_user).toBeNull();
  });
});
