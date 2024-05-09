import { PostgreUsersRepository } from "../../../repositories/user/implementations/PostgreUsersRepository";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-use-case";

const postgreUsersRepository = new PostgreUsersRepository();

const deleteUserUseCase = new DeleteUserUseCase(postgreUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController, deleteUserUseCase };
