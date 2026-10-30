import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  subject?: unknown;
  message?: unknown;
  phone?: unknown;
  engagementType?: unknown;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { success: false, error: "Invalid request payload format" },
      { status: 400 }
    );
  }

  const { name, email, organization, subject, message, phone, engagementType } = body;

  // Validate Name
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Name is required" },
      { status: 400 }
    );
  }

  // Validate Email
  if (!email || typeof email !== "string" || email.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Email is required" },
      { status: 400 }
    );
  }

  const trimmedEmail = email.trim();
  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return NextResponse.json(
      { success: false, error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate Message
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Message is required" },
      { status: 400 }
    );
  }

  // Construct processed inquiry
  const inquiryRecord = {
    id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    name: name.trim(),
    email: trimmedEmail.toLowerCase(),
    organization: typeof organization === "string" ? organization.trim() : undefined,
    subject: typeof subject === "string" ? subject.trim() : undefined,
    message: message.trim(),
    phone: typeof phone === "string" ? phone.trim() : undefined,
    engagementType: typeof engagementType === "string" ? engagementType.trim() : undefined,
    receivedAt: new Date().toISOString(),
  };

  // Optional: forward to CRM webhook if configured
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl && webhookUrl.startsWith("http")) {
    try {
      // Fire-and-forget or handled asynchronously with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryRecord),
        signal: controller.signal,
      }).catch(() => {
        // Silently tolerate upstream webhook unreachable in dev / test
      }).finally(() => {
        clearTimeout(timeoutId);
      });
    } catch {
      // Ignore webhook delivery failure to maintain API resilience
    }
  }

  return NextResponse.json(
    {
      success: true,
      message: "Inquiry received successfully",
      inquiryId: inquiryRecord.id,
    },
    { status: 200 }
  );
}
