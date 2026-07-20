import { Suspense } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

/** ponytail: single-purpose JSON-LD, no abstraction */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = "https://henriquepimentel.com.br";

const PATH_LABELS: Record<string, string> = {
  sobre: "Sobre",
  servicos: "Serviços",
  cases: "Cases",
  blog: "Blog",
  medcitado: "MedCitado",
  contato: "Contato",
  "baseline-geo": "Baseline GEO",
  privacidade: "Privacidade",
  termos: "Termos",
  "exclusao-dados": "Exclusão de dados",
};

/** Auto-generates breadcrumb from URL path segments */
export function AutoBreadcrumb({ pathname }: { pathname: string }) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items: BreadcrumbItem[] = [
    { name: "Início", url: SITE_URL },
  ];

  let accum = "";
  for (const seg of segments) {
    accum += `/${seg}`;
    const label = PATH_LABELS[seg] ?? decodeURIComponent(seg);
    items.push({ name: label, url: `${SITE_URL}${accum}/` });
  }

  return (
    <Suspense fallback={null}>
      <BreadcrumbJsonLd items={items} />
    </Suspense>
  );
}
