import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getPosts, formatPostDate, type PostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — notas de campo",
  description:
    "Implementações, falhas e aprendizados em texto longo. Posts técnicos sobre IA aplicada, GEO/AEO, saúde digital. Sem hype.",
};

const categories = [
  { name: "IA Aplicada", count: 4 },
  { name: "GEO/AEO", count: 6 },
  { name: "Saúde Digital", count: 3, tone: "vertical" as const },
  { name: "Engenharia", count: 12 },
  { name: "Cases", count: 2 },
];

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <>
      <section className="relative overflow-hidden">
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
            NOTAS DE CAMPO
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-[color:var(--text-primary)] leading-[1.05]">
            Implementações, falhas e{" "}
            <span className="font-serif italic text-[color:var(--accent-primary)]">
              aprendizados
            </span>{" "}
            — em texto longo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Posts técnicos sobre IA aplicada, citação pela IA e saúde digital.
            Sem promessas vazias, sem tese sem dado.
          </p>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border-default)]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
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
              )}

              <div className="space-y-8">
                {rest.map((p, i) => (
                  <PostRow
                    key={p.slug}
                    post={p}
                    isLast={i === rest.length - 1}
                  />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
                  Filtrar por categoria
                </h3>
                <ul className="mt-4 space-y-2">
                  {categories.map((c) => (
                    <li key={c.name}>
                      <Link
                        href={`/blog/categoria/${c.name
                          .toLowerCase()
                          .replace(/[ /]/g, "-")}`}
                        className="flex items-center justify-between text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] py-1"
                      >
                        <span>{c.name}</span>
                        <span className="font-mono text-xs text-[color:var(--text-tertiary)]">
                          {String(c.count).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)] p-6">
                <h3 className="text-base font-semibold text-[color:var(--text-primary)]">
                  Newsletter quinzenal
                </h3>
                <p className="mt-2 text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  Implementações reais e leituras úteis a cada 14 dias. Zero
                  spam, fácil de cancelar.
                </p>
                <form className="mt-4 flex flex-col gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="newsletter-email"
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

              <div className="rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-primary)] p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--text-tertiary)]">
                  Ferramentas públicas
                </h3>
                <Link
                  href="/tools/geo-baseline"
                  className="mt-3 inline-block text-sm font-medium text-[color:var(--accent-primary)] hover:underline"
                >
                  Ferramenta de análise GEO →
                </Link>
                <p className="mt-2 text-sm text-[color:var(--text-secondary)] leading-relaxed">
                  Programa de código aberto que mede se ChatGPT, Gemini e
                  Perplexity citam um nome em buscas-alvo.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function PostRow({ post, isLast }: { post: PostMeta; isLast: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
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
