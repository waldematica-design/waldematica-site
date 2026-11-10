import "server-only";

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

// Credencial separada da autenticação dos assinantes da Waldemática IA.
// É possível definir FREE_COURSE_ACCESS_SECRET especificamente na Vercel.
// O fallback usa o segredo de Supabase já configurado no site, sem expô-lo ao cliente.
export const FREE_COURSE_COOKIE = "waldematica_free_demo_access";
export const FREE_COURSE_MAX_AGE_SECONDS = 30 * 24 * 60 * 60;

function signingSecret(): string | null {
  return (
    process.env.FREE_COURSE_ACCESS_SECRET ||
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    null
  );
}

function signature(payload: string, secret: string): string {
  return createHmac("sha256", secret)
    .update(`waldematica-free-course:v1:${payload}`)
    .digest("base64url");
}

export function createFreeCourseAccessToken(): string | null {
  const secret = signingSecret();
  if (!secret) return null;

  const expiresAt = Math.floor(Date.now() / 1000) + FREE_COURSE_MAX_AGE_SECONDS;
  const nonce = randomBytes(16).toString("base64url");
  const payload = `${expiresAt}.${nonce}`;
  return `${payload}.${signature(payload, secret)}`;
}

export function hasValidFreeCourseAccess(token: string | undefined): boolean {
  const secret = signingSecret();
  if (!secret || !token || token.length > 300) return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [expiryString, nonce, providedSignature] = parts;
  if (!/^\d{10}$/.test(expiryString) || !/^[A-Za-z0-9_-]{22}$/.test(nonce)) return false;

  const expiresAt = Number(expiryString);
  const now = Math.floor(Date.now() / 1000);
  if (expiresAt <= now || expiresAt > now + FREE_COURSE_MAX_AGE_SECONDS + 60) return false;

  const payload = `${expiryString}.${nonce}`;
  const expected = Buffer.from(signature(payload, secret), "base64url");
  const provided = Buffer.from(providedSignature, "base64url");

  return provided.length === expected.length && timingSafeEqual(provided, expected);
}
