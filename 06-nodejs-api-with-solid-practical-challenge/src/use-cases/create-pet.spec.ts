import { expect, describe, it, beforeEach } from "vitest";
import { CreatePetUseCase } from "./create-pet";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";

let inMemoryPetsRepository: InMemoryPetsRepository;
let sut: CreatePetUseCase;

describe("Create pet Use Case", () => {
  beforeEach(() => {
    inMemoryPetsRepository = new InMemoryPetsRepository();
    sut = new CreatePetUseCase(inMemoryPetsRepository);
  });

  it("should be able to create pet successfully", async () => {
    const { pet } = await sut.execute({
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

    expect(pet.id).toEqual(expect.any(String));
  });
});
