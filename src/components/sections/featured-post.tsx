import Link from "next/link";
import { getPosts, formatPostDate } from "@/lib/posts";
import { CategoryBadge } from "@/components/ui/category-badge";

export default async function FeaturedPost() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  if (!featured) return null;

  // Build tracked URL for click tracking
  const baseUrl = `/blog/${featured.slug}`;
  const trackedUrl = `${baseUrl}?utm_source=home&utm_medium=featured&utm_campaign=${featured.slug}`;

  return (
    <Link
      href={trackedUrl}
      className="group block overflow-hidden rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] hover:border-[color:var(--text-tertiary)] transition-colors"
    >
      {featured.heroImage && (
        <div className="aspect-[16/8] overflow-hidden bg-[color:var(--bg-primary)]">
          <img
            src={featured.heroImage.url}
            alt={featured.heroImage.alt}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="eager"
          />
        </div>
      )}
      <div className="p-8 sm:p-10">
        <CategoryBadge
          name={featured.category}
          tone={featured.categoryTone}
        />
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)] leading-tight group-hover:text-[color:var(--accent-primary)] transition-colors">
          {featured.title}
        </h2>
        <p className="mt-3 text-[color:var(--text-secondary)] leading-relaxed">
          {featured.teaser}
        </p>
        <p className="mt-6 font-mono text-xs text-[color:var(--text-tertiary)]">
          {formatPostDate(featured.publishedDate)} ·{" "}
          {featured.readingTime} leitura · DESTAQUE
        </p>
      </div>
    </Link>
  );
}