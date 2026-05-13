import { getAllPosts, formatPostDate } from "@/lib/posts";

export interface Mirror {
  path: string;
  title: string;
  description: string;
  body: string;
}

const today = () => new Date().toISOString().slice(0, 10);

function frontmatter(m: Omit<Mirror, "body">): string {
  return [
    "---",
    `title: ${m.title}`,
    `description: ${m.description}`,
    `url: https://henriquepimentel.com.br${m.path}`,
    `last_updated: ${today()}`,
    "---",
    "",
  ].join("\n");
}

function wrap(m: Mirror): string {
  return frontmatter(m) + m.body.trim() + "\n";
}

// ──────────────────────────────────────────────────────────────────────────────
// Page mirrors
// ──────────────────────────────────────────────────────────────────────────────

const homeMirror: Mirror = {
  path: "/",
  title: "Henrique Pimentel — Consultor de Tecnologia em IA",
  description:
    "Implementação de sistemas de IA com resultado mensurável. Sites, automações, agentes inteligentes e citação por IAs (ChatGPT, Gemini, Perplexity). Recife, atende Brasil, Portugal e LATAM.",
  body: `
# Henrique Pimentel — Consultor de Tecnologia em IA

Eu mesmo implemento — não vendo apresentação bonita. Cada projeto tem diagnóstico, números acompanhados de perto e relatório explicado em português. Atendo clínicas, médicos, empresas e profissionais que querem usar IA como vantagem concreta.

## Áreas de atuação

- Aparecer quando a IA é perguntada (GEO/AEO): seu nome citado quando paciente, cliente ou leitor pergunta no ChatGPT, Gemini ou Perplexity. Implementação técnica e acompanhamento mensal em 5 plataformas de IA.
- Atendimento automático 24 horas por dia: atendente inteligente no WhatsApp e no site que qualifica o contato, marca consulta e responde fora do horário. Reduz faltas de pacientes e libera sua secretária.
- Captação automática de clientes: site, cadastro de clientes, atendente de IA e anúncios trabalhando juntos. O contato chega, é qualificado, agendado e acompanhado sem trabalho manual.
- Sites profissionais com resultado: sites que aparecem no Google, são reconhecidos pelas IAs e mostram painel onde você acompanha de perto o que funciona.
- Implementação de IA em produtos: integração com IAs (OpenAI, Gemini, Claude) e fluxos de automação em produção — não ficam só no teste.
- Consultoria técnica pontual: avaliação das ferramentas, plano de ação e roteiro de implementação. Por hora ou pacote fechado.

## Por que trabalhar comigo

- 19+ anos no mercado de tecnologia
- Mestre em Ciências da Computação pelo CIn-UFPE
- Graduação em Design pela UFPE
- 50+ empresas atendidas em carreira
- 5 motores de IA monitorados por cliente (ChatGPT, Gemini, Perplexity, Claude, Copilot)
- Sistema entregue por projeto, com prazo definido
- Números reais: pacientes agendados, vendas, retorno do investimento, citações pela IA
- Comunicação direta com quem implementa — eu mesmo
- Manutenção mensal opcional com relatório explicado
- Tecnologias atuais e seguras (relatório técnico mostrado ao cliente)

## Casos em produção

- Dra. Fátima Knappe — Geriatria · Recife · MedCitado no ar desde maio/2026, com acompanhamento mensal de menções em 5 motores de IA. Stack: Next.js + Cloudflare Pages + n8n.
- Instituto Ariana Borges — Site institucional · Recife · Plataforma de cursos e área de membros com automação de WhatsApp para captação e atendimento. Stack: Next.js + Supabase + n8n.

## Diagnóstico gratuito de 30 minutos

Você descreve o problema, eu mostro se posso ajudar, indico outra direção se não puder. Sem apresentação de vendas, sem proposta empurrada.

Contato: https://henriquepimentel.com.br/contato
Análise GEO gratuita: https://henriquepimentel.com.br/baseline-geo
`,
};

const sobreMirror: Mirror = {
  path: "/sobre/",
  title: "Sobre — Henrique Pimentel",
  description:
    "Mestre em Ciências da Computação pelo CIn-UFPE, graduação em Design pela UFPE, 19+ anos no mercado de tecnologia. Consultor independente em IA aplicada.",
  body: `
# Sobre — Henrique Pimentel

## Quem sou e o que faço

Com 19 anos de trajetória no mercado, construí uma base sólida que une o olhar centrado no usuário do Design (UFPE) à profundidade técnica da Ciência da Computação (Mestre pelo CIn-UFPE). Minha transição de Designer para Engenheiro de Inteligência Artificial aconteceu por uma necessidade prática: buscar maneiras mais inteligentes, ágeis e eficientes de resolver problemas complexos para negócios em qualquer lugar do mundo.

Sediado no pólo tecnológico de Recife e atuando em todo o Brasil, América Latina e Portugal, meu foco é direto: oferecer soluções de IA aplicáveis que resolvem as dores reais do dia a dia do empresário.

Se você gerencia uma clínica, um consultório médico ou qualquer negócio onde o atendimento e a fluidez operacional são o coração da empresa, eu entendo os seus desafios. Meu trabalho consiste em mergulhar na sua operação para identificar falhas de rotina, gargalos de atendimento e processos repetitivos que drenam a energia da sua equipe.

Não implemento tecnologia apenas por implementar. Eu desenho agentes, automações e fluxos de trabalho que se integram perfeitamente à sua realidade, seja o seu negócio local ou com atuação internacional. Entrego a solução ideal para gerar resultados de verdade — poupando tempo, reduzindo custos e elevando a experiência do seu cliente final.

## Minha caixa de ferramentas

- Frontend: Next.js 16, React 19, TypeScript, Tailwind v4
- Backend: Python + FastAPI, Node + Hono, n8n, Postgres
- IA Aplicada: OpenAI / Gemini / Claude APIs, LangChain, RAG, Eval
- Infraestrutura: Cloudflare Workers + Pages + R2, Docker Swarm + Traefik, VPS Hostinger / Hetzner

## Como trabalho

1. Auditoria primeiro. Recomendação depois.
2. Sistema entregue, não slide.
3. Métrica acessível ao cliente.
4. Comunicação direta com quem implementa — sem intermediário.

Vamos descobrir como a IA pode trabalhar pelo seu negócio?
`,
};

const medcitadoMirror: Mirror = {
  path: "/medcitado/",
  title: "MedCitado — Citação médica nas IAs dentro das regras do CFM",
  description:
    "Sistema completo para médicos serem citados pelas IAs. Site dentro do CFM 2.336/2023 + Google Meu Negócio + atendimento 24h com IA + monitoramento mensal nos 5 motores. Em 14 dias.",
  body: `
# MedCitado — Citação médica nas IAs

Quando seu paciente pergunta à IA, seu nome aparece.

Sistema completo para médicos serem citados pelas IAs. Site dentro das regras do CFM 2.336/2023, Google Meu Negócio em modo autoridade, atendimento 24 horas por dia com IA e acompanhamento mensal das menções em ChatGPT, Gemini, Perplexity, Claude e Copilot.

## Faça o teste antes que seu concorrente faça

Abra o ChatGPT. Cole a pergunta abaixo, substituindo seus dados:

> melhor [sua especialidade] em [sua cidade]

Seu nome aparece? Se não, você está perdendo pacientes que nunca souberam que você existe. O filho do paciente que pesquisa às 22h vai marcar consulta com quem o ChatGPT indicou.

## O que está incluso no pacote (14 dias de implantação)

1. Site profissional dentro das regras do CFM — Site dentro da Resolução CFM 2.336/2023, com a marcação técnica que faz as IAs reconhecerem você como referência válida na sua especialidade.
2. Atendimento 24h por dia no WhatsApp — Atendente inteligente que entende o caso do paciente, sugere horários e passa para sua secretária com o caso já organizado.
3. Google Meu Negócio em modo autoridade — Postagens semanais, gestão de avaliações, fotos profissionais. Sinal forte para Google e Gemini de que você está ativo.
4. Confirmação automática de consulta — Lembrete automático 24h antes da consulta. Reduz faltas de pacientes em até 40%.
5. Blog que vira fonte citada pela IA — Conteúdo educativo dentro das regras do CFM, escrito de um jeito que ChatGPT e Perplexity passam a citar você.
6. Relatório mensal de menções — Painel com sua presença em ChatGPT, Gemini, Perplexity, Claude e Copilot. Evolução medida mês a mês, explicada em português.

## Garantia inversa

Se em 60 dias seu nome não aparecer em pelo menos 1 motor de IA, devolvo o valor da implantação. Sem letra miúda. Implemento, acompanho, mostro os resultados. Se não funcionar, você não paga.

## Caso em produção

Dra. Fátima Knappe — Geriatra em Recife. Site dentro das regras do CFM no ar desde maio/2026, com diagnóstico inicial de citações pela IA documentado e acompanhamento mensal nos 5 motores de IA. Resultado em 60 dias: 20% de presença no Gemini para buscas-alvo (2 de 10 termos citando o nome dela).

Análise GEO gratuita: https://henriquepimentel.com.br/baseline-geo?vertical=medico
`,
};

const casesMirror: Mirror = {
  path: "/cases/",
  title: "Cases — implementações com números reais",
  description:
    "Portfólio de projetos com diagnóstico inicial mensurável, ferramentas documentadas e relatório de evolução. Sem antes/depois inflado.",
  body: `
# Cases — implementações com números reais

Cada implementação com diagnóstico inicial mensurável, ferramentas documentadas e relatório de evolução. Sem antes/depois inflado.

## Dra. Fátima Knappe — MedCitado · Geriatria · Recife

Status: Em produção desde maio/2026.

Sistema completo de citação médica nas IAs em produção desde maio/2026. Dentro das regras do CFM 2.336/2023.

- Diagnóstico inicial (Gemini): 2 de 10 buscas citando · 20%
- Ferramentas: Next.js 16 + Cloudflare Pages + n8n + Looker Studio
- Prazo de implantação: 14 dias
- Especialidade: Geriatria · cuidados paliativos

## Endocrinologista — MedCitado · Próxima vertical

Status: Em prospecção.

Prospecção ativa em andamento. Implantação prevista para o segundo trimestre de 2026.

- Especialidade: Endocrinologia
- Mercado: Lisboa + Porto
- Ferramentas previstas: Mesmas do MedCitado v1

## Metodologia

1. Diagnóstico — 30 minutos, gratuito. Entendo seu contexto e mostro se posso ajudar.
2. Auditoria — 7 a 14 dias. Relatório técnico com diagnóstico inicial mensurável.
3. Implantação — 2 a 6 semanas. Sistema entregue funcionando, com painel de acompanhamento.
4. Acompanhamento — Mensal opcional. Relatório de evolução + ajustes técnicos.
`,
};

const baselineGeoMirror: Mirror = {
  path: "/baseline-geo/",
  title: "Análise GEO gratuita — como a IA cita você?",
  description:
    "Relatório técnico de como você é citado por ChatGPT, Gemini, Perplexity, Claude e Copilot. Em até 7 dias úteis. Sem custo, sem reunião obrigatória.",
  body: `
# Análise GEO gratuita

Descubra como você está sendo citado pela IA.

Em até 7 dias úteis você recebe um relatório técnico com o estado atual da sua presença em ChatGPT, Gemini, Perplexity, Claude e Copilot — e o que muda para começar a aparecer.

## Como funciona

Três passos. Sem reunião obrigatória. Você recebe o PDF por e-mail.

1. Você preenche o formulário — nome, segmento, cidade-alvo e até 3 termos pelos quais quer ser encontrado.
2. Eu faço o diagnóstico inicial — rodo as buscas reais nos 5 motores (ChatGPT, Gemini, Perplexity, Claude, Copilot) com a ferramenta aberta que mantenho em /tools/geo-baseline.
3. Você recebe o relatório — PDF de 2 páginas: presença atual, motores que já citam, motores onde você está invisível, e 3 ações concretas de curto prazo.

## Em produção

Dra. Fátima Knappe — Geriatra em Recife. Diagnóstico inicial de citações pela IA documentado em maio/2026 e acompanhado mensalmente nos 5 motores de IA.

Solicitar: https://henriquepimentel.com.br/baseline-geo
`,
};

const contatoMirror: Mirror = {
  path: "/contato/",
  title: "Contato — diagnóstico de 30 min gratuito",
  description:
    "Diagnóstico estruturado de 30 minutos. Sem apresentação de vendas, sem proposta empurrada. Trabalho principalmente por mensagens.",
  body: `
# Contato — diagnóstico de 30 min gratuito

Vamos conversar sobre seu problema real.

Diagnóstico estruturado de 30 minutos. Eu entendo seu contexto, mostro se posso ajudar e te indico outra direção se não puder. Trabalho principalmente por mensagens — reunião só quando necessário.

## Canais diretos

- E-mail: henrique@henriquepimentel.com.br
- LinkedIn: linkedin.com/in/henriquepimentel
- WhatsApp: solicitar via formulário

## Agenda

Diagnóstico de 30 minutos, gratuito. Horários de segunda a quinta, pela manhã (horário do Brasil).

Cal.com: https://cal.com/henriquepimentel
`,
};

const blogIndexMirror: Mirror = {
  path: "/blog/",
  title: "Blog — Notas de campo",
  description:
    "Implementações, falhas e aprendizados em texto longo. Posts técnicos sobre IA aplicada, citação pela IA e saúde digital.",
  body: `
# Blog — Notas de campo

Implementações, falhas e aprendizados em texto longo. Posts técnicos sobre IA aplicada, citação pela IA e saúde digital. Sem promessas vazias, sem tese sem dado.
`,
};

// ──────────────────────────────────────────────────────────────────────────────
// Mirror Registry
// ──────────────────────────────────────────────────────────────────────────────

const pageMirrors: Mirror[] = [
  homeMirror,
  sobreMirror,
  medcitadoMirror,
  casesMirror,
  baselineGeoMirror,
  contatoMirror,
  blogIndexMirror,
];

export async function getMirrorByPath(path: string): Promise<string | null> {
  // Normalize: strip trailing /index.md, ensure trailing slash on root
  const normalized = path.replace(/\/?index\.md$/, "/").replace(/\/+$/, "/");

  // Page mirrors
  const page = pageMirrors.find((m) => m.path === normalized);
  if (page) return wrap(page);

  // Blog post mirrors
  const postMatch = normalized.match(/^\/blog\/([^/]+)\/?$/);
  if (postMatch) {
    const slug = postMatch[1];
    const posts = await getAllPosts();
    const post = posts.find((p) => p.slug === slug);
    if (post) {
      const mirror: Mirror = {
        path: `/blog/${slug}/`,
        title: post.title,
        description: post.teaser,
        body: [
          `# ${post.title}`,
          ``,
          `Categoria: ${post.category}`,
          `Publicado: ${formatPostDate(post.publishedDate)}`,
          `Tempo de leitura: ${post.readingTime}`,
          post.author ? `Autor: ${post.author}` : null,
          ``,
          `## Resumo`,
          ``,
          post.teaser,
          ``,
          `## Conteúdo completo`,
          ``,
          `Para o conteúdo completo deste artigo, acesse: https://henriquepimentel.com.br/blog/${slug}`,
        ]
          .filter(Boolean)
          .join("\n"),
      };
      return wrap(mirror);
    }
  }

  return null;
}
