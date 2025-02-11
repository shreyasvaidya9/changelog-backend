import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = {
      body: {
        username: "hello",
        password: "hi",
      },
    };
    const res = {
      json() {},
    };

    const newUser = await user.createNewUser(req, res, () => {});
  });
});
