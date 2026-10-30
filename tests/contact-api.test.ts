import { describe, it, expect } from "vitest";
import { POST } from "../src/app/api/contact/route";

describe("Institutional Inquiry API - /api/contact", () => {
  it("processes valid institutional inquiry and returns 200 with success status", async () => {
    const payload = {
      name: "Adv. Thandiwe Sithole",
      email: "t.sithole@buffalocity.gov.za",
      organization: "Buffalo City Metropolitan Municipality",
      subject: "Strategic Inquiry: sams-governance",
      engagementType: "sams-governance",
      phone: "+27 (0)43 000 0000",
      message: "Requesting demonstration of SAMS anomaly detection for municipal procurement.",
    };

    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe("Inquiry received successfully");
    expect(data.inquiryId).toBeDefined();
    expect(typeof data.inquiryId).toBe("string");
  });

  it("returns 400 when name is missing or whitespace only", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "   ",
        email: "contact@gov.za",
        message: "Test message",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Name is required");
  });

  it("returns 400 when email is missing or empty", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Director General",
        message: "Test message",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Email is required");
  });

  it("returns 400 when email format is invalid", async () => {
    const invalidEmails = [
      "not-an-email",
      "user@",
      "@domain.com",
      "user@domain",
      "user @domain.com",
    ];

    for (const email of invalidEmails) {
      const request = new Request("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Dr. Sipho Nkosi",
          email,
          message: "Requesting consultation on Umbono STEM engine",
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toBe("Invalid email format");
    }
  });

  it("returns 400 when message is missing or whitespace only", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Director General",
        email: "director@treasury.gov.za",
        message: "   ",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Message is required");
  });

  it("returns 400 when JSON payload is malformed", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{ malformed json :::",
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Invalid JSON payload");
  });

  it("returns 400 when payload is not an object", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(["not", "an", "object"]),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe("Invalid request payload format");
  });
});
