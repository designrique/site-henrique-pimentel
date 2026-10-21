import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cookies } from "next/headers";
import { guidePdfResponse, SESSION_COOKIE } from "@/lib/lead-guide/gate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const store = await cookies();
  return guidePdfResponse(
    store.get(SESSION_COOKIE)?.value,
    process.env.GUIDE_SESSION_SECRET,
    () => readFile(join(process.cwd(), "private/guides/claude-design.pdf"))
  );
}
