import { getMirrorByPath } from "@/content/mirrors";

export async function mirrorResponse(path: string): Promise<Response> {
  const body = await getMirrorByPath(path);
  if (!body) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "index, follow",
    },
  });
}
