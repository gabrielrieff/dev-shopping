import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { IDeleteUserDTO } from "./delete-user-DTO";

export class DeleteUserUseCase {
  constructor(private userReposiry: IUserRepository) {}

  async execute(data: IDeleteUserDTO) {
    const user = new User(data);

    await this.userReposiry.delete(user);
  }
}
