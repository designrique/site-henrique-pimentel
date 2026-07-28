import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { CtaBlock } from "@/components/sections/cta-block";
import {
  getPosts,
  getPostBySlug,
  formatPostDate,
} from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getPostBySlug(slug);
  if (!entry) return { title: "Post não encontrado" };

  const { meta } = entry;
  const url = `https://henriquepimentel.com.br/blog/${slug}`;
  const title = meta.seo?.metaTitle ?? `${meta.title} | Henrique Pimentel`;
  const description = meta.seo?.metaDescription ?? meta.teaser;
  const heroUrl = meta.heroImage?.url;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Henrique Pimentel — Consultor de Tecnologia em IA",
      title,
      description,
      locale: "pt_BR",
      publishedTime: meta.publishedDate,
      authors: meta.author ? [meta.author] : undefined,
      section: meta.category,
      images: heroUrl
        ? [{ url: heroUrl, alt: meta.heroImage?.alt ?? meta.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: heroUrl ? [heroUrl] : undefined,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = await getPostBySlug(slug);
  if (!entry) notFound();

  const { meta, Content } = entry;
  const isMedicado = meta.categoryTone === "vertical";
  const accent = isMedicado
    ? "var(--vertical-medico-primary)"
    : "var(--accent-primary)";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.teaser,
    image: meta.heroImage?.url,
    datePublished: meta.publishedDate,
    dateModified: meta.publishedDate,
    author: {
      "@type": "Person",
      name: meta.author ?? "Henrique Pimentel",
      url: "https://henriquepimentel.com.br",
    },
    publisher: {
      "@type": "Person",
      name: "Henrique Pimentel",
      url: "https://henriquepimentel.com.br",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://henriquepimentel.com.br/blog/${meta.slug}`,
    },
    articleSection: meta.category,
    inLanguage: "pt-BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        <header className="relative border-b border-[color:var(--border-default)]">
          <Container className="pt-12 pb-10 sm:pt-20 sm:pb-14">
            <div className="mx-auto max-w-2xl">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-[color:var(--text-tertiary)] hover:text-[color:var(--text-primary)] transition-colors"
              >
                ← Todos os posts
              </Link>
              <p
                className="mt-6 font-mono text-xs uppercase tracking-[0.08em]"
                style={{ color: accent }}
              >
                {meta.category}
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)] leading-[1.1]">
                {meta.title}
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-[color:var(--text-secondary)] leading-relaxed">
                {meta.teaser}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-[color:var(--text-tertiary)] font-mono">
                <span>{formatPostDate(meta.publishedDate)}</span>
                <span aria-hidden="true">·</span>
                <span>{meta.readingTime}</span>
                {meta.author && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{meta.author}</span>
                  </>
                )}
              </div>
            </div>
          </Container>

          {meta.heroImage && (
            <div className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
              <div className="mx-auto max-w-4xl">
                <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)]">
                  <img
                    src={meta.heroImage.url}
                    alt={meta.heroImage.alt}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                {meta.heroImage.credit && (
                  <p className="mt-2 text-center font-mono text-xs text-[color:var(--text-tertiary)]">
                    Foto:{" "}
                    {meta.heroImage.credit.url ? (
                      <a
                        href={meta.heroImage.credit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[color:var(--text-primary)]"
                      >
                        {meta.heroImage.credit.name}
                      </a>
                    ) : (
                      meta.heroImage.credit.name
                    )}{" "}
                    · Unsplash
                  </p>
                )}
              </div>
            </div>
          )}
        </header>

        <section>
          <Container className="py-12 sm:py-16">
            {Content ? <Content /> : null}
          </Container>
        </section>

        <section className="border-t border-[color:var(--border-default)] bg-[color:var(--bg-subtle)]">
          <Container size="narrow" className="py-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
                  Compartilhe
                </p>
                <p className="mt-1 text-sm text-[color:var(--text-primary)]">
                  Se foi útil, mande pra quem precisa ver.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${meta.title} — https://henriquepimentel.com.br/blog/${meta.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-[10px] border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-4 text-sm font-medium text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://henriquepimentel.com.br/blog/${meta.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-[10px] border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-4 text-sm font-medium text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <CtaBlock
        title="Quer aplicar isso no seu caso?"
        subtitle="Agende um diagnóstico de 30 minutos. Sem pitch, sem proposta empurrada — só entender se faz sentido continuar."
        primary={{ label: "Agendar diagnóstico", href: "/contato" }}
        secondary={{
          label: "Ver análise GEO grátis →",
          href: "/baseline-geo?vertical=medico",
        }}
      />
    </>
  );
}
