import { OrgsRepository } from "@/repositories/orgs-repository";
import { compare } from "bcryptjs";
import { Org } from "generated/prisma";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  org: Org;
}

export class AuthenticateUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email);

    if (!org) throw new InvalidCredentialsError();

    const doesPasswordMatch = await compare(password, org.password_hash);

    if (!doesPasswordMatch) throw new InvalidCredentialsError();

    return { org };
  }
}
