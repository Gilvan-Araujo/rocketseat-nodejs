import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository";
import { CreateOrgUseCase } from "../create-org";

export function makeCreateOrgUseCase() {
  const gymsRepository = new PrismaOrgsRepository();
  const useCase = new CreateOrgUseCase(gymsRepository);

  return useCase;
}
