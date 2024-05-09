import { User } from "../../entities/User";

export interface IUserRepository {
  save(user: User): Promise<User>;
  delete(user: User): Promise<void>;
  findOverlappyngUser(email: string): Promise<User | null>;
}
