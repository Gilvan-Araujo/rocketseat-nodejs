import { FastifyInstance } from "fastify";
import { verifyJwt } from "@/http/middlewares/verify-jwt";
import { create } from "./create";
import { search } from "./search";
import { nearby } from "./nearby";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";

export async function gymRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJwt);

  app.post("/gyms", { onRequest: [verifyUserRole("ADMIN")] }, create);

  app.get("/gyms/search", search);
  app.get("/gyms/nearby", nearby);
}
