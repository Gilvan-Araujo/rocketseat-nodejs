import { Org, Prisma } from "generated/prisma";

export interface OrgsRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>;
  findById(id: string): Promise<Org | null>;
  findByEmail(email: string): Promise<Org | null>;
}
