import { makeCreatePetUseCase } from "@/use-cases/factories/make-create-pet-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    about: z.string(),
    size: z.string(),
    energy_level: z.string(),
    independency_level: z.string(),
    environment: z.string(),
    town: z.string(),
    adoption_requirements: z.array(z.string()),
  });

  const data = registerBodySchema.parse(request.body);

  const createPet = makeCreatePetUseCase();

  const { pet } = await createPet.execute({
    orgId: request.user.sub,
    ...data,
  });

  return reply.status(200).send({ pet });
}
