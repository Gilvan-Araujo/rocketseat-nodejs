import { Pet } from "generated/prisma";
import { PetsRepository } from "@/repositories/pets-repository";

interface FilterPetsByAttributeUseCaseRequest {
  town: string;
  size?: string;
  energy_level?: string;
  independency_level?: string;
  environment?: string;
}

interface FilterPetsByAttributeUseCaseResponse {
  pets: Pet[];
}

export class FilterPetsByAttributeUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(
    data: FilterPetsByAttributeUseCaseRequest
  ): Promise<FilterPetsByAttributeUseCaseResponse> {
    const pets = await this.petsRepository.filterByAttribute(data);

    return { pets };
  }
}
