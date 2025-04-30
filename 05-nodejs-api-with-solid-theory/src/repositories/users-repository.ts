import { Prisma, User } from "generated/prisma";

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
