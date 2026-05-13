# Site Henrique Pimentel

Site institucional do consultor de tecnologia em IA Henrique Pimentel — Recife, atendendo Brasil, América Latina e Portugal.

Próximo deploy: **Cloudflare Pages** · Produção: `henriquepimentel.com.br`

## Stack

- Next.js 16 (Turbopack) — static export
- React 19 + TypeScript
- Tailwind CSS v4
- Motion (animações)
- Geist + Fraunces + JetBrains Mono (Google Fonts)

## Estrutura

```
src/
├── app/                  # App Router pages + route handlers
│   ├── (rotas)/          # Home, /sobre, /medcitado, /cases, /blog, /baseline-geo, /contato
│   ├── blog/[slug]/      # Posts dinâmicos com generateStaticParams
│   ├── */index.md/       # Markdown mirrors por rota (text/plain)
│   ├── sitemap.ts        # /sitemap.xml automático
│   ├── robots.ts         # /robots.txt liberando 16 user-agents de IA
│   └── layout.tsx        # Schema JSON-LD @graph (Person + ProfessionalService + WebSite)
├── components/           # UI + sections + theme provider
├── content/
│   ├── mirrors/          # Conteúdo markdown limpo por rota (System 2 do AI SEO Playbook)
│   └── posts/            # Posts do blog (.tsx com PostMeta + Content React)
└── lib/                  # Helpers (posts loader, etc.)

public/
├── llms.txt              # System 1 do AI SEO Playbook
├── _headers              # Cloudflare Pages headers (text/plain p/ .md, cache, security)
└── (assets)              # Logos, fotos, favicons
```

## AI SEO infra (do playbook do Brycen Wood)

- ✅ `llms.txt` em [public/llms.txt](public/llms.txt) — bio + 7 serviços com preços reais + FAQs
- ✅ Markdown mirrors em `/{rota}/index.md` (10 rotas)
- ✅ `sitemap.xml` automático com priorities (1.0 home, 0.9 services, 0.7 posts)
- ✅ `robots.txt` liberando 16 user-agents de IA (GPTBot, ClaudeBot, PerplexityBot, etc.)
- ✅ JSON-LD `@graph` global: Person + ProfessionalService + WebSite
- ✅ FAQPage schema dinâmico no componente `<FAQs />`
- ✅ Article schema em posts do blog

## Scripts

```bash
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # Static export para out/
npm run start    # Preview produção (após build)
npm run lint
```

## Deploy

Cloudflare Pages com framework preset Next.js → static export.

Build command: `npm run build`
Output: `out/`
Node version: `20`

## Licença

Conteúdo do site © Henrique Pimentel. Código sob licença particular.
