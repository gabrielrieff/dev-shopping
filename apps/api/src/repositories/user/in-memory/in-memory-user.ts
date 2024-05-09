import { User } from "../../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUser implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async delete(user: User): Promise<void> {
    this.users.filter((item) => item.id !== user.id);
  }

  async findOverlappyngUser(email: string): Promise<User | null> {
    const overlappyngUser = this.users.find((user) => {
      return user.email === email;
    });

    if (!overlappyngUser) {
      return null;
    }

    return overlappyngUser;
  }
}
