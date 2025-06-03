import { expect, beforeEach, describe, it } from "vitest";
import { hash } from "bcryptjs";
import { InMemoryOrgsRepository } from "@/repositories/in-memory/in-memory-orgs-repository";
import { AuthenticateUseCase } from "./authenticate";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

let orgsRepository: InMemoryOrgsRepository;
let sut: AuthenticateUseCase;

describe("Authenticate org Use Case", () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository();
    sut = new AuthenticateUseCase(orgsRepository);
  });

  it("should be able to authenticate", async () => {
    await orgsRepository.create({
      responsible_name: "John",
      email: "any@email.com",
      address: "Rua do Meio",
      zip_code: "12345678",
      whatsapp: "999999999",
      password_hash: await hash("123456", 6),
    });

    const { org } = await sut.execute({
      email: "any@email.com",
      password: "123456",
    });

    expect(org.id).toEqual(expect.any(String));
  });

  it("should not be able to authenticate with wrong email", async () => {
    await orgsRepository.create({
      responsible_name: "John",
      email: "any@email.com",
      address: "Rua do Meio",
      zip_code: "12345678",
      whatsapp: "999999999",
      password_hash: await hash("123456", 6),
    });

    await expect(() =>
      sut.execute({
        email: "wrong@email.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await orgsRepository.create({
      responsible_name: "John",
      email: "any@email.com",
      address: "Rua do Meio",
      zip_code: "12345678",
      whatsapp: "999999999",
      password_hash: await hash("123456", 6),
    });

    await expect(() =>
      sut.execute({
        email: "any@email.com",
        password: "123123",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
