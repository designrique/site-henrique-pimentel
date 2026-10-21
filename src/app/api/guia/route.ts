import { NextResponse } from "next/server";
import {
  handleSubmit,
  createCrmAdapter,
  createRateLimiter,
  createIdempotencyStore,
  readRequestBody,
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

  let body: unknown;
  try {
    body = JSON.parse(await readRequestBody(req, MAX_BODY));
  } catch (error) {
    const tooLarge = error instanceof Error && error.message === "payload_too_large";
    return NextResponse.json({ error: tooLarge ? "payload_too_large" : "invalid_json" }, { status: tooLarge ? 413 : 400 });
  }

  const result = await handleSubmit(body, {
    adapter: createCrmAdapter(process.env),
    sessionSecret: process.env.GUIDE_SESSION_SECRET,
    limiter,
    dedupe,
    requestKey: clientKey(req),
    ttlSeconds: 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === "production",
  });

  const res = NextResponse.json(result.body, { status: result.status });
  if (result.setCookie) res.headers.append("Set-Cookie", result.setCookie);
  return res;
}
