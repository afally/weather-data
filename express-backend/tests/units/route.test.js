const { describe, it, expect } = require("@jest/globals");
const request = require("supertest");
const app = require("../../server");
const {
  getDatabaseConnection,
  sequelize,
} = require("../../api/utils/getDatabaseConnection");

describe("Authentication Routes", () => {
  it("should return a 401 status if user is not authenticated", async () => {
    await getDatabaseConnection();
    const res = await request(app)
      .post("/api/sensors/search")
      .send({
        filters: { temperature: { gte: 20 } },
        sort: { column: "temperature", order: "descending" },
      });
    expect(res.status).toBe(401);
  });
  it("should return a 200 status and set a cookie upon successful login", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ email: "admin@admin.com", password: "pass" });
    expect(res.status).toEqual(200);
    expect(res.headers["set-cookie"]).toBeDefined();
  });
  it("should include authentication cookie in subsequent authenticated requests", async () => {
    const loginRes = await request(app)
      .post("/api/login")
      .send({ email: "admin@admin.com", password: "pass" });
    const authToken = loginRes.headers["set-cookie"][0].split(";")[0];
    const searchRes = await request(app)
      .post("/api/sensors/search")
      .set("Cookie", [authToken])
      .send({
        filters: { temperature: { gte: 20 } },
        sort: { column: "temperature", order: "descending" },
      });
    expect(searchRes.status).toEqual(200);
  });
  it("should log in a user", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ email: "admin@admin.com", password: "pass" });
    expect(res.status).toEqual(200);
  });
  it("should return an error if email is missing during registration", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({ password: "password123" });
    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty("errors");
  });
  it("should return an error if the password is too short during registration", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({ email: "newuser@example.com", password: "123" });
    expect(res.status).toEqual(400);
  });
});

describe("Sensor Routes", () => {
  it("should not search sensor data with wrong authorization token", async () => {
    const res = await request(app)
      .post("/api/sensors/search")
      .set("Authorization", "Bearer wrong-auth-token")
      .send({
        filters: { temperature: { gte: 20 } },
        sort: { column: "temperature", order: "descending" },
        aggregate: { column: "visibility", operator: "COUNT" },
      });

    expect(res.status).toEqual(401);
  });

  it("should return an error if an invalid authentication token is provided for upload", async () => {
    const res = await request(app)
      .post("/api/sensors/upload")
      .set("Authorization", "Bearer invalid-token");

    expect(res.status).toEqual(401);
  });
});
describe("Error Handling Middleware", () => {
  it("should return a 404 error for an unknown route", async () => {
    const res = await request(app).get("/unknown-route");

    expect(res.status).toEqual(500);
  });
});
