import { Prisma, Pet } from "generated/prisma";
import { PetsRepository } from "../pets-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data,
    });

    return pet;
  }

  async findById(id: string): Promise<Pet | null> {
    const pet = await prisma.pet.findFirstOrThrow({
      where: {
        id,
      },
    });

    return pet;
  }

  async listByTown(town: string): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        town,
      },
    });

    return pets;
  }

  async listByOrgId(orgId: string): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        orgId,
      },
    });

    return pets;
  }

  async filterByAttribute({
    town,
    size,
    energy_level,
    environment,
    independency_level,
  }: {
    town: string;
    size?: string;
    energy_level?: string;
    independency_level?: string;
    environment?: string;
  }): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        town,
        size,
        energy_level,
        independency_level,
        environment,
      },
    });

    return pets;
  }
}
