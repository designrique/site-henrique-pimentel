import type { Metadata } from "next";
import { Geist, Fraunces, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreadcrumbInjector } from "@/components/breadcrumb-injector";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://henriquepimentel.com.br"),
  title: {
    default: "Henrique Pimentel — Consultor de Tecnologia em IA",
    template: "%s — Henrique Pimentel",
  },
  description:
    "Implemento sistemas de IA que entregam resultado mensurável. Sites, automações, agentes inteligentes e presença em buscas generativas (ChatGPT, Gemini, Perplexity).",
  keywords: [
    "consultor IA",
    "consultor de tecnologia",
    "Henrique Pimentel",
    "GEO",
    "AEO",
    "Generative Engine Optimization",
    "Recife",
    "IA aplicada",
  ],
  authors: [{ name: "Henrique Pimentel" }],
  creator: "Henrique Pimentel",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://henriquepimentel.com.br",
    siteName: "Henrique Pimentel",
    title: "Henrique Pimentel — Consultor de Tecnologia em IA",
    description:
      "Implemento sistemas de IA que entregam resultado mensurável.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Pimentel — Consultor de Tecnologia em IA",
    description:
      "Implemento sistemas de IA que entregam resultado mensurável.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const SITE_URL = "https://henriquepimentel.com.br";

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#henrique`,
      name: "Henrique Pimentel",
      jobTitle: "Consultor de Tecnologia em Inteligência Artificial",
      url: SITE_URL,
      image: `${SITE_URL}/foto-henrique.webp`,
      sameAs: [
        "https://linkedin.com/in/henriquepimentel",
        "https://github.com/henriquepimentel",
      ],
      worksFor: { "@id": `${SITE_URL}/#service` },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Centro de Informática (CIn) — Universidade Federal de Pernambuco",
          sameAs: "https://www.cin.ufpe.br",
        },
        {
          "@type": "EducationalOrganization",
          name: "Universidade Federal de Pernambuco (UFPE) — Design",
          sameAs: "https://www.ufpe.br",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Mestrado",
          educationalLevel: "Mestre em Ciências da Computação",
        },
      ],
      knowsAbout: [
        "Inteligência Artificial Aplicada",
        "Generative Engine Optimization",
        "GEO",
        "AEO",
        "ChatGPT",
        "Gemini",
        "Claude",
        "Perplexity",
        "Copilot",
        "Automação com IA",
        "Site para médicos",
        "Marketing médico CFM",
        "Schema.org",
        "JSON-LD",
        "llms.txt",
        "Next.js",
        "Python",
        "WhatsApp Business API",
      ],
      knowsLanguage: ["pt-BR", "en", "es"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
      about: [
        {
          "@type": "Thing",
          name: "Generative Engine Optimization",
          url: "https://en.wikipedia.org/wiki/Search_engine_optimization",
          description: "Otimização de conteúdo para motores generativos (ChatGPT, Gemini, Perplexity, Claude, Copilot).",
        },
        {
          "@type": "Thing",
          name: "Search Engine Optimization",
          url: "https://developers.google.com/search/docs",
          description: "Otimização para buscadores tradicionais (Google, Bing).",
        },
        {
          "@type": "Thing",
          name: "Inteligência Artificial Aplicada",
          url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
          description: "Aplicação prática de IA em processos de negócio: atendimento, captação e posicionamento.",
        },
        {
          "@type": "Thing",
          name: "Marketing médico",
          url: "https://www.cfm.org.br/resolucoes-cfm",
          description: "Marketing para médicos dentro das regras do CFM (Resolução 2.336/2023).",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "ChatGPT",
          url: "https://openai.com/chatgpt",
        },
        {
          "@type": "Thing",
          name: "Gemini",
          url: "https://deepmind.google/technologies/gemini/",
        },
        {
          "@type": "Thing",
          name: "Perplexity",
          url: "https://www.perplexity.ai/",
        },
        {
          "@type": "Thing",
          name: "Claude",
          url: "https://www.anthropic.com/claude",
        },
        {
          "@type": "Thing",
          name: "Copilot",
          url: "https://www.microsoft.com/copilot/",
        },
        {
          "@type": "Thing",
          name: "Schema.org",
          url: "https://schema.org/",
        },
        {
          "@type": "Thing",
          name: "llms.txt",
          url: "https://llmstxt.org/",
        },
        {
          "@type": "Thing",
          name: "Next.js",
          url: "https://nextjs.org/",
        },
        {
          "@type": "Thing",
          name: "Cloudflare Pages",
          url: "https://developers.cloudflare.com/pages/",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Henrique Pimentel — Consultoria de Tecnologia em IA",
      url: SITE_URL,
      image: `${SITE_URL}/foto-henrique.webp`,
      founder: { "@id": `${SITE_URL}/#henrique` },
      employee: { "@id": `${SITE_URL}/#henrique` },
      description:
        "Consultor independente em Inteligência Artificial aplicada. Implementa sistemas de IA, automações, sites otimizados para citação por motores generativos (GEO/AEO) e atendimento 24h com IA para clínicas, médicos, empresas e profissionais.",
      areaServed: [
        { "@type": "Country", name: "Brasil" },
        { "@type": "Country", name: "Portugal" },
        { "@type": "Country", name: "México" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Chile" },
        { "@type": "Country", name: "Colômbia" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
      priceRange: "R$ 4.000 – R$ 60.000",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: `${SITE_URL}/contato/`,
        name: "Agendar diagnóstico de 30 min",
        actionStatus: "PotentialActionStatus",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de consultoria em IA",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "MedCitado — GEO para médicos",
              description:
                "Sistema completo para médicos serem citados pelas IAs (ChatGPT, Gemini, Perplexity, Claude, Copilot). Site dentro das regras do CFM 2.336/2023, Google Meu Negócio em modo autoridade, atendimento 24h com IA, relatório mensal de menções. Garantia inversa de 60 dias.",
              serviceType: "Generative Engine Optimization médico",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "BRL",
              price: "12000",
              valueAddedTaxIncluded: true,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Atendimento automático 24h com IA",
              description:
                "Agente inteligente no WhatsApp e site que qualifica contato, agenda consulta e responde fora do horário.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "BRL",
              minPrice: "6000",
              maxPrice: "18000",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consultoria técnica pontual",
              description:
                "Avaliação das ferramentas, plano de ação e roteiro de implementação por hora ou pacote fechado.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "BRL",
              price: "450",
              unitText: "HOUR",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Análise GEO gratuita",
              description:
                "Relatório de citação nos 5 motores de IA em até 7 dias úteis. Sem custo, sem reunião obrigatória.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "BRL",
              price: "0",
            },
          },
        ],
      },
      sameAs: ["https://linkedin.com/in/henriquepimentel"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Henrique Pimentel — Consultor de Tecnologia em IA",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#henrique` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "section:first-of-type p:first-of-type"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geist.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <BreadcrumbInjector />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
