import { describe, it, expect } from "vitest";
import { CreateUserUseCase } from "./create-user-use-case";
import { User } from "../../../entities/User";
import { InMemoryUser } from "../../../repositories/user/in-memory/in-memory-user";

describe("Create user", () => {
  it("should be able to create new user", () => {
    const postgreUsersRepository = new InMemoryUser();

    const createUserUseCase = new CreateUserUseCase(postgreUsersRepository);

    expect(
      createUserUseCase.execute({
        name: "John Doe",
        email: "john@gmail.com",
        password: "123123",
      })
    ).resolves.toBeInstanceOf(User);
  });

  it("not should be able to create new user", async () => {
    const postgreUsersRepository = new InMemoryUser();

    const createUserUseCase = new CreateUserUseCase(postgreUsersRepository);

    await createUserUseCase.execute({
      name: "John Doe",
      email: "john@gmail.com",
      password: "123123",
    });

    expect(
      createUserUseCase.execute({
        name: "John Doe",
        email: "john@gmail.com",
        password: "123123",
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
