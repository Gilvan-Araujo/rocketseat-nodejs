import { randomUUID } from "node:crypto";
import { Prisma, Pet } from "generated/prisma";
import { PetsRepository } from "../pets-repository";

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = [];

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet: Pet = {
      ...data,
      id: randomUUID(),
      created_at: new Date(),
      adoption_requirements: data.adoption_requirements as string[],
      orgId: data.orgId || "",
    };

    this.items.push(pet);

    return pet;
  }

  async findById(id: string): Promise<Pet | null> {
    const pet = this.items.find((item) => item.id === id);

    if (!pet) return null;

    return pet;
  }

  async listByTown(town: string): Promise<Pet[]> {
    const pets = this.items.filter((item) => item.town === town);

    return pets;
  }

  async listByOrgId(orgId: string): Promise<Pet[]> {
    const pets = this.items.filter((item) => item.orgId === orgId);

    return pets;
  }

  async filterByAttribute({
    size,
    energy_level,
    environment,
    independency_level,
  }: {
    size?: string;
    energy_level?: string;
    independency_level?: string;
    environment?: string;
  }): Promise<Pet[]> {
    const pets = this.items.filter((item) => {
      if (size && item.size !== size) return false;
      if (energy_level && item.energy_level !== energy_level) return false;
      if (independency_level && item.independency_level !== independency_level)
        return false;
      if (environment && item.environment !== environment) return false;

      return true;
    });

    return pets;
  }
}
