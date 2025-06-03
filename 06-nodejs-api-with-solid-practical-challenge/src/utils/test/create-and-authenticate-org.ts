import { prisma } from "@/lib/prisma";
import { FastifyInstance } from "fastify";
import request from "supertest";

export async function createAndAuthenticateUser(app: FastifyInstance) {
  await prisma.org.create({
    data: {
      responsible_name: "John",
      email: "any@email.com",
      address: "Rua do Meio",
      zip_code: "12345678",
      whatsapp: "999999999",
      password_hash: "123456",
    },
  });

  const authResponse = await request(app.server).post("/sessions").send({
    email: "johndoe@example.com",
    password: "123456",
  });

  const { token } = authResponse.body;

  return {
    token,
  };
}
