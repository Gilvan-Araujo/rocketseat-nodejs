import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryOrgsRepository } from "@/repositories/in-memory/in-memory-orgs-repository";
import { CreateOrgUseCase } from "./create-org";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pets-repository";

let inMemoryOrgsRepository: InMemoryOrgsRepository;
let sut: CreateOrgUseCase;

describe("Create org Use Case", () => {
  beforeEach(() => {
    inMemoryOrgsRepository = new InMemoryOrgsRepository();
    sut = new CreateOrgUseCase(inMemoryOrgsRepository);
  });

  it("should be able to create an org successfully", async () => {
    const { org } = await sut.execute({
      responsible_name: "John",
      email: "any@email.com",
      address: "Rua do Meio",
      zip_code: "12345678",
      whatsapp: "999999999",
      password_hash: "123456",
    });

    expect(org.id).toEqual(expect.any(String));
  });

  it("should be able to list all pets from an org", async () => {
    const { org } = await sut.execute({
      responsible_name: "John",
      email: "any@email.com",
      address: "Rua do Meio",
      zip_code: "12345678",
      whatsapp: "999999999",
      password_hash: "123456",
    });

    const petsRepository = new InMemoryPetsRepository();
    await petsRepository.create({
      name: "Thor",
      about: "Cachorro amável",
      adoption_requirements: ["Família amável"],
      energy_level: "Alto",
      environment: "Largo",
      independency_level: "Alto",
      size: "Grande",
      town: "Recife",
      orgId: org.id,
    });
    const list = await petsRepository.listByOrgId(org.id);

    expect(list).toHaveLength(1);
    expect(list).toEqual(expect.any(Array));
  });
});
