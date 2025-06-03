import { expect, describe, it, beforeEach } from "vitest";
import { FilterPetsByAttributeUseCase } from "./filter-pets-by-attribute";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";

let inMemoryPetsRepository: InMemoryPetsRepository;
let sut: FilterPetsByAttributeUseCase;

describe("Filter pets by attribute Use Case", () => {
  beforeEach(() => {
    inMemoryPetsRepository = new InMemoryPetsRepository();
    sut = new FilterPetsByAttributeUseCase(inMemoryPetsRepository);
  });

  it("should be able to list pets according to attribute of filter", async () => {
    await inMemoryPetsRepository.create({
      name: "Thor",
      about: "Cachorro amável",
      adoption_requirements: ["Família amável"],
      energy_level: "Alto",
      environment: "Largo",
      independency_level: "Alto",
      size: "Grande",
      town: "Recife",
      orgId: "org-01",
    });

    await inMemoryPetsRepository.create({
      name: "Loki",
      about: "Cachorro amável",
      adoption_requirements: ["Família amável"],
      energy_level: "Médio",
      environment: "Pequeno",
      independency_level: "Baixo",
      size: "Pequeno",
      town: "Recife",
      orgId: "org-01",
    });

    const { pets: smallPets } = await sut.execute({
      town: "Recife",
      size: "Pequeno",
    });
    expect(smallPets).toHaveLength(1);
    expect(smallPets[0].name).toEqual("Loki");

    const { pets: bigPets } = await sut.execute({
      town: "Recife",
      size: "Grande",
    });
    expect(bigPets).toHaveLength(1);
    expect(bigPets[0].name).toEqual("Thor");
  });

  it("should return empty when no attributes match", async () => {
    const { pets } = await sut.execute({
      town: "Recife",
      size: "Pequeno",
    });
    expect(pets).toHaveLength(0);
  });
});
