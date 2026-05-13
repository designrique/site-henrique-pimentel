import { mirrorResponse } from "@/content/mirrors/handler";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return mirrorResponse(`/blog/${slug}/`);
}
