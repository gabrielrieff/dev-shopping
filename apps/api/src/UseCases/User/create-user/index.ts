import { PostgreUserRepository } from "../../../repositories/user/implementations/postgre-user-repository";
import { CreateUserUseCase } from "./create-user-use-case";
import { CreateUserController } from "./create-user-controller";

const postgreUsersRepository = new PostgreUserRepository();

const createUserUseCase = new CreateUserUseCase(postgreUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
