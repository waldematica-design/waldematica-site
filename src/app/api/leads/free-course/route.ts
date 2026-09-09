import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadRequest = {
  name?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  emailMarketingConsent?: unknown;
  whatsappMarketingConsent?: unknown;
  website?: unknown;
  pagePath?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
};

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isAllowedOrigin(origin: string | null) {
  if (!origin) {
    return true;
  }

  try {
    const url = new URL(origin);
    const host = url.hostname.toLowerCase();

    return (
      host === "waldematica.com.br" ||
      host === "www.waldematica.com.br" ||
      host === "localhost" ||
      host === "127.0.0.1" ||
      host.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

function validEmail(email: string) {
  return (
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)
  );
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request.headers.get("origin"))) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: robôs costumam preencher este campo invisível.
  if (cleanString(body.website, 120)) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanString(body.name, 80);
  const email = cleanString(body.email, 254).toLowerCase();
  const whatsapp = cleanString(body.whatsapp, 30);
  const pagePath = cleanString(body.pagePath, 240) || "/cursos-gratis/";
  const utmSource = cleanString(body.utmSource, 120);
  const utmMedium = cleanString(body.utmMedium, 120);
  const utmCampaign = cleanString(body.utmCampaign, 180);
  const emailMarketingConsent = body.emailMarketingConsent === true;
  const whatsappMarketingConsent =
    Boolean(whatsapp) && body.whatsappMarketingConsent === true;

  if (name.length < 2 || !validEmail(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const supabaseUrl = (
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
  ).replace(/\/$/, "");
  const supabaseSecret =
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    "";

  if (!supabaseUrl || !supabaseSecret) {
    console.error("Lead capture is missing Supabase server environment variables.");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  try {
    const supabaseResponse = await fetch(
      `${supabaseUrl}/rest/v1/rpc/capture_lead`,
      {
        method: "POST",
        headers: {
          apikey: supabaseSecret,
          Authorization: `Bearer ${supabaseSecret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          p_name: name,
          p_email: email,
          p_whatsapp: whatsapp || null,
          p_email_marketing_consent: emailMarketingConsent,
          p_whatsapp_marketing_consent: whatsappMarketingConsent,
          p_source: "curso_gratis",
          p_page_path: pagePath,
          p_utm_source: utmSource || null,
          p_utm_medium: utmMedium || null,
          p_utm_campaign: utmCampaign || null,
          p_metadata: {
            product: "cursos-gratis",
            modules: 3,
            videos: 23,
          },
        }),
        cache: "no-store",
      },
    );

    if (!supabaseResponse.ok) {
      const detail = await supabaseResponse.text();
      console.error("Supabase lead capture failed:", supabaseResponse.status, detail);
      return NextResponse.json({ ok: false }, { status: 503 });
    }

    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("Lead capture request failed:", error);
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
