import { Prisma, Pet } from "generated/prisma";

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  findById(id: string): Promise<Pet | null>;
  listByTown(town: string): Promise<Pet[]>;
  listByOrgId(orgId: string): Promise<Pet[]>;
  filterByAttribute({
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
  }): Promise<Pet[]>;
}
