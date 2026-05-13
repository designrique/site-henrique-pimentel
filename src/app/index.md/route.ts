import { mirrorResponse } from "@/content/mirrors/handler";

export const dynamic = "force-static";

export async function GET() {
  return mirrorResponse("/");
}
