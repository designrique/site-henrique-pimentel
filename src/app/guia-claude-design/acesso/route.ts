import { accessResponse } from "@/lib/lead-guide/gate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Consome o link pessoal enviado por e-mail e libera o guia neste navegador. */
export async function GET(req: Request) {
  const token = new URL(req.url).searchParams.get("t");
  return accessResponse(
    token,
    process.env.GUIDE_SESSION_SECRET,
    Math.floor(Date.now() / 1000),
    process.env.NODE_ENV === "production"
  );
}
