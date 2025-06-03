import { Prisma, Org } from "generated/prisma";
import { OrgsRepository } from "../orgs-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrgsRepository implements OrgsRepository {
  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const org = await prisma.org.create({
      data,
    });

    return org;
  }

  async findById(id: string): Promise<Org | null> {
    const org = await prisma.org.findFirstOrThrow({
      where: {
        id,
      },
    });

    return org;
  }

  async findByEmail(email: string): Promise<Org | null> {
    const org = await prisma.org.findFirstOrThrow({
      where: {
        email,
      },
    });

    return org;
  }
}
