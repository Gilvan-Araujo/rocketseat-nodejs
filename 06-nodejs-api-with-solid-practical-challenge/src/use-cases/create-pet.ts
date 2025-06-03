import { Pet } from "generated/prisma";
import { PetsRepository } from "@/repositories/pets-repository";

interface CreatePetUseCaseRequest extends Omit<Pet, "id" | "created_at"> {
  orgId: string;
}

interface CreatePetUseCaseResponse {
  pet: Pet;
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(
    data: CreatePetUseCaseRequest
  ): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create(data);

    return { pet };
  }
}
