import { expect, test } from "vitest";
import { User } from "./User";

test("create a new user", () => {
  const user = new User({
    name: "John Doe",
    email: "john@gmail.com",
    password: "123123",
  });

  expect(user).toBeInstanceOf(User);
});
