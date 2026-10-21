import { NextResponse } from "next/server";
import {
  handleSubmit,
  createCrmAdapter,
  createRateLimiter,
  createIdempotencyStore,
} from "@/lib/lead-guide/gate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Singletons de modulo: estado bounded, vive enquanto o processo do servidor viver.
const limiter = createRateLimiter({ limit: 5, windowMs: 60_000 });
const dedupe = createIdempotencyStore({ ttlMs: 10 * 60_000, maxEntries: 5000 });

const MAX_BODY = 4096;

function clientKey(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  const ip = xff ? xff.split(",")[0].trim() : req.headers.get("x-real-ip") ?? "unknown";
  return ip;
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "unsupported_media_type" }, { status: 415 });
  }

  const declared = Number(req.headers.get("content-length") ?? "0");
  if (Number.isFinite(declared) && declared > MAX_BODY) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const result = await handleSubmit(body, {
    adapter: createCrmAdapter(process.env),
    sessionSecret: process.env.GUIDE_SESSION_SECRET,
    limiter,
    dedupe,
    requestKey: clientKey(req),
    idempotencyKey: req.headers.get("idempotency-key") ?? undefined,
    ttlSeconds: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === "production",
  });

  const res = NextResponse.json(result.body, { status: result.status });
  if (result.setCookie) res.headers.append("Set-Cookie", result.setCookie);
  return res;
}
