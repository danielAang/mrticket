import { User } from "../../src/models";
import faker from "faker";
import truncate from "../utils/truncate";
import factory from "../factories";

describe("Testing CRUD operations on User model", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("Should insert User", async () => {
    const user = await factory.create("User", {});

    expect(user.id).not.toBeNull();
  });
});
