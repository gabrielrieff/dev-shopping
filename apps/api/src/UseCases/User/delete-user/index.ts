import { PostgreUserRepository } from "../../../repositories/user/implementations/postgre-user-repository";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-use-case";

const postgreUsersRepository = new PostgreUserRepository();

const deleteUserUseCase = new DeleteUserUseCase(postgreUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController, deleteUserUseCase };
