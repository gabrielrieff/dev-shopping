import { hash } from "bcryptjs";
import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/user/IUserRepository";
import { ICreateUserDTO } from "./create-user-DTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}
  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const passwordHash = await hash(password, 8);

    const overlappyngUser =
      await this.usersRepository.findOverlappyngUser(email);

    if (overlappyngUser) {
      throw new Error("There is already a registered user with this email!");
    }

    const user = new User({ name, email, password: passwordHash });
    await this.usersRepository.save(user);

    return user;
  }
}
