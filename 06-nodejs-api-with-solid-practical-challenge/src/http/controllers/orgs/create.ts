import { makeCreateOrgUseCase } from "@/use-cases/factories/make-create-org-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createGymBodySchema = z.object({
    responsible_name: z.string(),
    email: z.string(),
    zip_code: z.string(),
    address: z.string(),
    whatsapp: z.string(),
    password_hash: z.string(),
  });

  const data = createGymBodySchema.parse(request.body);

  const createOrgUseCase = makeCreateOrgUseCase();

  const { org } = await createOrgUseCase.execute(data);

  return reply.status(201).send({ orgId: org.id });
}
