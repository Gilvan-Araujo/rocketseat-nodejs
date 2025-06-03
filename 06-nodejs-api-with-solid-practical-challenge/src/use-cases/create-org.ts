import { OrgsRepository } from "@/repositories/orgs-repository";
import { Org, Prisma } from "generated/prisma";

type CreateOrgUseCaseRequest = Prisma.OrgCreateInput;

interface CreateOrgUseCaseResponse {
  org: Org;
}

export class CreateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute(
    data: CreateOrgUseCaseRequest
  ): Promise<CreateOrgUseCaseResponse> {
    const org = await this.orgsRepository.create(data);

    return { org };
  }
}
