import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  getNewsPosts,
  formatPostDate,
  type PostMeta,
} from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notícias — IA, mercado e tecnologia",
  description:
    "Novidades de inteligência artificial, marketing digital, SEO/GEO e tecnologia, curadas a partir de pesquisa semanal. Sem hype, com fonte.",
};

export default async function NewsPage() {
  const news = await getNewsPosts();
  const [featured, ...rest] = news;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[color:var(--border-default)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, var(--accent-subtle-bg) 0%, transparent 60%)",
          }}
        />
        <Container className="pt-16 pb-12 sm:pt-24 sm:pb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase text-[color:var(--accent-primary)]">
            Notícias
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Novidades de IA, mercado e{" "}
            <span className="font-serif italic text-[color:var(--accent-primary)]">
              tecnologia
            </span>
            , com fonte.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--text-secondary)]">
            O que mudou na semana em inteligência artificial, marketing
            digital, SEO/GEO e vendas — curado de pesquisa contínua, com
            link para a fonte original. Atualizado conforme os relatórios
            são publicados.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              {featured ? (
                <FeaturedNews post={featured} />
              ) : (
                <EmptyState />
              )}

              {rest.length > 0 && (
                <div className="space-y-8">
                  {rest.map((p, i) => (
                    <NewsRow
                      key={p.slug}
                      post={p}
                      isLast={i === rest.length - 1}
                    />
                  ))}
                </div>
              )}
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
                  Mais recentes
                </h3>
                <ul className="mt-4 space-y-3">
                  {news.slice(0, 5).map((p, i) => (
                    <li key={p.slug}>
                      <Link
                        href={`/noticias/${p.slug}`}
                        className="group flex gap-3"
                      >
                        <span className="font-mono text-xs text-[color:var(--text-tertiary)] pt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium leading-snug text-[color:var(--text-secondary)] group-hover:text-[color:var(--accent-primary)] transition-colors">
                          {p.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6">
                <h3 className="text-base font-semibold text-[color:var(--text-primary)]">
                  Receba no e-mail
                </h3>
                <p className="mt-2 text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  Os relatórios completos de pesquisa, com links e números,
                  direto na sua caixa.
                </p>
                <form className="mt-4 flex flex-col gap-2">
                  <label htmlFor="news-email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="news-email"
                    type="email"
                    placeholder="seu@email.com"
                    className="h-10 rounded-lg border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] px-3 text-sm placeholder:text-[color:var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)]"
                  />
                  <button
                    type="submit"
                    className="h-10 rounded-lg bg-[color:var(--accent-primary)] px-4 text-sm font-medium text-white hover:bg-[color:var(--accent-hover)] transition-colors"
                  >
                    Inscrever
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function FeaturedNews({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/noticias/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] card-hover"
    >
      {post.heroImage && (
        <div className="aspect-[16/8] overflow-hidden bg-[color:var(--bg-primary)]">
          <img
            src={post.heroImage.url}
            alt={post.heroImage.alt}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="eager"
          />
        </div>
      )}
      <div className="p-8 sm:p-10">
        <CategoryBadge name={post.category} tone={post.categoryTone} />
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-[color:var(--text-primary)] leading-tight group-hover:text-[color:var(--accent-primary)] transition-colors">
          {post.title}
        </h2>
        <p className="mt-3 text-[color:var(--text-secondary)] leading-relaxed">
          {post.teaser}
        </p>
        <p className="mt-6 font-mono text-xs text-[color:var(--text-tertiary)]">
          {formatPostDate(post.publishedDate)} · {post.readingTime} leitura
          {post.source && <> · Fonte: {post.source.name}</>}
        </p>
      </div>
    </Link>
  );
}

function NewsRow({ post, isLast }: { post: PostMeta; isLast: boolean }) {
  return (
    <Link
      href={`/noticias/${post.slug}`}
      className={`group grid gap-4 sm:grid-cols-12 py-6 border-t border-[color:var(--border-default)] ${
        isLast ? "border-b border-b-[color:var(--border-default)]" : ""
      }`}
    >
      <div className="sm:col-span-3">
        <CategoryBadge name={post.category} tone={post.categoryTone} />
        <p className="mt-2 font-mono text-xs text-[color:var(--text-tertiary)]">
          {formatPostDate(post.publishedDate)}
        </p>
        <p className="mt-1 font-mono text-xs text-[color:var(--text-tertiary)]">
          {post.readingTime} leitura
        </p>
      </div>
      <div className="sm:col-span-9">
        <h3 className="text-xl font-semibold text-[color:var(--text-primary)] group-hover:text-[color:var(--accent-primary)] transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--text-secondary)]">
          {post.teaser}
        </p>
      </div>
    </Link>
  );
}

function CategoryBadge({
  name,
  tone,
}: {
  name: string;
  tone?: "vertical";
}) {
  const isMedico = tone === "vertical";
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
        isMedico
          ? "bg-[color:var(--vertical-medico-subtle-bg)] text-[color:var(--vertical-medico-text)]"
          : "bg-[color:var(--accent-subtle-bg)] text-[color:var(--accent-text)]"
      }`}
    >
      {name}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-[color:var(--border-default)] p-12 text-center">
      <p className="text-lg font-semibold text-[color:var(--text-primary)]">
        Nenhuma notícia publicada ainda
      </p>
      <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
        A primeira publicação chega com o próximo relatório de pesquisa.
      </p>
    </div>
  );
}
