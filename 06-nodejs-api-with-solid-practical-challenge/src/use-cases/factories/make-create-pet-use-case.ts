import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { CreatePetUseCase } from "../create-pet";

export function makeCreatePetUseCase() {
  const prismaUsersRepository = new PrismaPetsRepository();
  const registerUseCase = new CreatePetUseCase(prismaUsersRepository);

  return registerUseCase;
}
