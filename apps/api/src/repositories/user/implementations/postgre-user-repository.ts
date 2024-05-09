import { User } from "../../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgreUserRepository implements IUserRepository {
  findOverlappyngUser(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  private users: User[] = [];

  async delete(user: User): Promise<void> {
    this.users.filter((item) => item.id !== user.id);
  }
  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
