import { PostgreUsersRepository } from "../../../repositories/user/implementations/PostgreUsersRepository";
import { CreateUserUseCase } from "./create-user-use-case";
import { CreateUserController } from "./create-user-controller";

const postgreUsersRepository = new PostgreUsersRepository();

const createUserUseCase = new CreateUserUseCase(postgreUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
