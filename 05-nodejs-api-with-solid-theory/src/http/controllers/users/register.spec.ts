import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Register (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should register a new user", async () => {
    const response = await request(app.server).post("/users").send({
      name: "John Doe",
      email: "jonh@doe.com",
      password: "123456",
    });

    expect(response.statusCode).toEqual(201);
  });
});
