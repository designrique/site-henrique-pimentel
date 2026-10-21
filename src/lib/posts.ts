import type { ComponentType } from "react";

export interface PostMeta {
  slug: string;
  title: string;
  teaser: string;
  category: string;
  categoryTone?: "vertical";
  publishedDate: string;
  readingTime: string;
  featured?: boolean;
  draft?: boolean;
  news?: boolean;
  source?: { name: string; url: string };
  author?: string;
  heroImage?: {
    url: string;
    alt: string;
    credit?: { name: string; url: string };
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
  };
}

export interface PostEntry {
  meta: PostMeta;
  Content?: ComponentType;
}

import { postRegistry } from "@/content/posts";

export async function getPosts(): Promise<PostMeta[]> {
  return postRegistry
    .map((p) => p.meta)
    .filter((m) => !m.draft && !m.news)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export async function getNewsPosts(): Promise<PostMeta[]> {
  return postRegistry
    .map((p) => p.meta)
    .filter((m) => !m.draft && m.news)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export async function getAllPosts(): Promise<PostMeta[]> {
  return postRegistry
    .map((p) => p.meta)
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export async function getPostBySlug(slug: string): Promise<PostEntry | null> {
  const entry = postRegistry.find((p) => p.meta.slug === slug);
  if (!entry) return null;
  return entry;
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
