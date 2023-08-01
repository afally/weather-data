import request from "supertest";
import app from "../../../server";

//Testing the backend
//should return 200 and list of articles
//should return 401 if API key is missing
//should return 401 if API key is incorrect
//should pass the request if API key is correct

describe("Get Articles Controller", () => {
  it("should return 200 and list of articles", async () => {
    const apiKey = "5aa965eb8e501bff4bde01b13de411e5";
    const response = await request(app).get("/").query({ apiKey });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "success");
    expect(response.body).toHaveProperty("data");
  });

  it("should return 401 if API key is missing", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: "Invalid API key" });
  });

  it("should return 401 if API key is incorrect", async () => {
    const response = await request(app).get("/").query({ apiKey: "wrong_key" });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: "Invalid API key" });
  });

  it("should pass the request if API key is correct", async () => {
    const apiKey = "5aa965eb8e501bff4bde01b13de411e5";
    const response = await request(app).get("/").query({ apiKey });
    expect(response.status).toBe(200);
  });
});
