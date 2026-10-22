import { NextResponse } from "next/server";
import { getContactDeliveryConfig } from "@/lib/contact";

export async function GET() {
  const contact = getContactDeliveryConfig();

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    services: {
      contact: {
        ready: contact.persistEnabled || contact.emailConfigured,
        emailConfigured: contact.emailConfigured,
        destinationConfigured: Boolean(contact.destination),
        persistEnabled: contact.persistEnabled,
        webhookConfigured: contact.webhookConfigured,
        provider: contact.provider,
      },
    },
  });
}
