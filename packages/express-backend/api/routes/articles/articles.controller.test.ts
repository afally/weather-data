import request from "supertest";
import app from "../../../server"; // Update the path if needed

describe("Get Articles Controller", () => {
  //let server: any;
  //const PORT = 3001;
  // beforeAll((done) => {
  //   server = app.listen(PORT, () => {
  //     console.log(`Test server started on port ${PORT}...`);
  //     done();
  //   });
  // });
  it("should return 200 and list of articles", async () => {
    const apiKey = "5aa965eb8e501bff4bde01b13de411e5"; // Replace with your valid API key
    const response = await request(app).get("/").query({ apiKey });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "success");
    expect(response.body).toHaveProperty("data");

    // Add more assertions here if needed
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
    const apiKey = "5aa965eb8e501bff4bde01b13de411e5"; // Replace with your valid API key
    const response = await request(app).get("/").query({ apiKey });
    expect(response.status).toBe(200);
    // Add more assertions here if needed
  });
  // afterAll(async () => {
  //   // Closing the server
  //   await server.close();
  //   console.log(`Test server closed...`);
  // }, 10000); // Set the timeout to 10000 milliseconds (10 seconds)
});
