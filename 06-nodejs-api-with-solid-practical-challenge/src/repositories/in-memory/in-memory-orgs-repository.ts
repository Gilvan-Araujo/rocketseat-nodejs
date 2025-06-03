import { Org, Prisma } from "generated/prisma";
import { randomUUID } from "node:crypto";
import { OrgsRepository } from "../orgs-repository";

export class InMemoryOrgsRepository implements OrgsRepository {
  public items: Org[] = [];

  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const org: Org = {
      ...data,
      id: randomUUID(),
      created_at: new Date(),
    };

    this.items.push(org);

    return org;
  }

  async findById(id: string): Promise<Org | null> {
    const org = this.items.find((item) => item.id === id);

    if (!org) return null;

    return org;
  }

  async findByEmail(email: string): Promise<Org | null> {
    const org = this.items.find((item) => item.email === email);

    if (!org) return null;

    return org;
  }
}
