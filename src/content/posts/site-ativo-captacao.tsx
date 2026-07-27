import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "site-ativo-captacao",
    title:
      "O que torna um site um ativo de captação (e não um brochure online)",
    teaser:
      "A diferença entre um site que apenas existe e um site que aparece no Google, é reconhecido pelas IAs e converte visitantes em agendamentos.",
    category: "Sites",
    publishedDate: "2026-07-27",
    readingTime: "8 min",
    featured: false,
    author: "Henrique Pimentel",
    seo: {
      metaTitle:
        "Site de captação: como um site vira ativo de marketing | Henrique Pimentel",
      metaDescription:
        "Diferença entre site-brochure e site ativo: SEO técnico, GEO para IA, painel de acompanhamento e conversão real. Não é sobre estética, é sobre resultado.",
      metaKeywords:
        "site de captação, site profissional, SEO técnico, GEO, conversão, landing page, site ativo, marketing digital",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          A maioria dos sites é um brochure online: bonito, existe, mas
          não gera nada. Um site ativo de captação aparece no Google,
          é reconhecido pelo ChatGPT, e converte visitantes em
          agendamentos. A diferença não é estética — é técnica e
          mensurável.
        </Lead>

        <p>
          Henrique Pimentel constrói sites profissionais em{" "}
          <a
            href="https://nextjs.org/"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          hospedados na{" "}
          <a
            href="https://pages.cloudflare.com/"
            rel="noopener noreferrer"
          >
            Cloudflare Pages
          </a>{" "}
          que combinam{" "}
          <a
            href="https://developers.google.com/search/docs"
            rel="noopener noreferrer"
          >
            SEO técnico
          </a>
          ,{" "}
          <a href="/blog/framework-geo-extracao-ia">
            GEO para motores de IA
          </a>{" "}
          e conversão real. Este post documenta o que diferencia um
          site ativo de um brochure inerte.
        </p>

        <H2>O que faz um site ser &ldquo;só um brochure&rdquo;</H2>

        <List>
          <li>
            <strong>Não aparece no Google</strong> para buscas que
            importam. O site existe mas o paciente não o encontra
            quando pesquisa a especialidade + cidade.
          </li>
          <li>
            <strong>Não é citado pela IA</strong>. Quando alguém
            pergunta ao ChatGPT &ldquo;melhor [especialidade] em
            [cidade]&rdquo;, o site não está na resposta.
          </li>
          <li>
            <strong>Não tem CTA claro</strong>. O visitante chega,
            lê, e... não sabe o que fazer. Sem botão de agendamento,
            sem WhatsApp, sem formulário curto.
          </li>
          <li>
            <strong>Não tem painel</strong>. O dono não sabe quantas
            pessoas visitaram, de onde vieram, quantas agendaram.
          </li>
          <li>
            <strong>É lento</strong>. Imagens de 5MB, JavaScript
            desnecessário, sem cache. O{" "}
            <a
              href="https://pagespeed.web.dev/"
              rel="noopener noreferrer"
            >
              PageSpeed
            </a>{" "}
            está em 40 e o visitante desiste antes do site carregar.
          </li>
        </List>

        <Quote>
          Um site bonito que não aparece, não converte e não mede é
          um custo. Um site que aparece, converte e mede é um ativo.
        </Quote>

        <H2>O que torna um site um ativo de captação</H2>

        <H3>1. SEO técnico que funciona</H3>

        <List>
          <li>
            <strong>Dados estruturados JSON-LD</strong> com{" "}
            <a
              href="https://schema.org/"
              rel="noopener noreferrer"
            >
              Schema.org
            </a>{" "}
            — a IA do Google entende que o site representa uma empresa,
            um médico, um serviço, em uma cidade específica.
          </li>
          <li>
            <strong>Sitemap XML</strong> atualizado automaticamente
            quando você adiciona conteúdo.
          </li>
          <li>
            <strong>Core Web Vitals</strong> em verde: LCP abaixo de
            2.5s, CLS abaixo de 0.1, INP abaixo de 200ms. O Google
            prioriza sites rápidos.
          </li>
          <li>
            <strong>Conteúdo estruturado em clusters</strong> — um
            post-pilar liga posts relacionados, criando autoridade
            topical. Detalhado no{" "}
            <a href="/blog/framework-geo-extracao-ia">
              framework GEO
            </a>
            .
          </li>
        </List>

        <H3>2. GEO para motores de IA</H3>

        <List>
          <li>
            <strong>llms.txt</strong> — arquivo que serve versão
            markdown limpa do conteúdo para ChatGPT, Gemini e
            Perplexity. IAs leem markdown mais rápido que HTML.
          </li>
          <li>
            <strong>robots.txt</strong> que explicitamente permite
            GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Se
            você bloqueia os bots de IA, está se invisibilizando no
            canal que mais cresce.
          </li>
          <li>
            <strong>Entity links</strong> — cada conceito importante
            liga a fontes de autoridade (Wikipedia, Google Search
            Central, Schema.org). A IA entende que seu site faz parte
            da vizinhança semântica daquele tema.
          </li>
          <li>
            <strong>Answer layer</strong> — a resposta direta nos dois
            primeiros parágrafos. Se a IA só ler o início, já tem o
            valor central.
          </li>
        </List>

        <H3>3. Conversão real</H3>

        <List>
          <li>
            <strong>CTA único e claro</strong> em cada página. O
            visitante sabe exatamente o que fazer: agendar, falar no
            WhatsApp, pedir orçamento.
          </li>
          <li>
            <strong>WhatsApp com mensagem pré-preenchida</strong> — o
            visitante não precisa pensar no que escrever. A mensagem
            já chega com contexto.
          </li>
          <li>
            <strong>Formulário curto</strong> — nome + telefone. Nada
            mais. Cada campo extra reduz a conversão em 10-15%.
          </li>
          <li>
            <strong>Prova social real</strong> — casos documentados,
            depoimentos, números. Não &ldquo;Demonstração&rdquo;
            nem tabelas com dados inventados.
          </li>
        </List>

        <H3>4. Painel de acompanhamento</H3>

        <List>
          <li>
            <strong>Visitantes, origem e conversão</strong> em um
            painel que o dono acessa quando quiser.
          </li>
          <li>
            <strong>Dados reais</strong> — se a tabela ainda não
            existe, mostra estado vazio. Nunca número inventado.
            Nunca &ldquo;Demonstração&rdquo;.
          </li>
          <li>
            <strong>Integração com o funil</strong> — o painel
            conecta o site aos anúncios e ao{" "}
            <a href="/blog/atendente-ia-whatsapp-24h">
              atendente de IA
            </a>
            . Você vê o funil completo, não só uma peça.
          </li>
        </List>

        <H2>O que não funciona em 2026</H2>

        <List>
          <li>
            <strong>WordPress com 30 plugins</strong> — lento,
            quebra a cada atualização, vulnerável. Tudo que
            WordPress faz com 30 plugins, Next.js faz nativo.
          </li>
          <li>
            <strong>Site feito em construtor Wix/GoDaddy</strong> —
            você não controla SEO técnico, não controla performance,
            não controla dados estruturados. É um prêmio de
            consolação.
          </li>
          <li>
            <strong>Site que não mede nada</strong> — sem{" "}
            <a
              href="https://analytics.google.com/"
              rel="noopener noreferrer"
            >
              Google Analytics
            </a>
            , sem{" "}
            <a
              href="https://search.google.com/search-console"
              rel="noopener noreferrer"
            >
              Search Console
            </a>
            , sem painel próprio. Você não pode melhorar o que não
            mede.
          </li>
          <li>
            <strong>Site sem conformidade CFM</strong> — se é médico,
            o site precisa respeitar a{" "}
            <a
              href="https://www.cfm.org.br/resolucoes-cfm"
              rel="noopener noreferrer"
            >
              Resolução CFM 2.336/2023
            </a>
            . Sem promessa de cura, sem Before/After, sem
            publicidade de procedimento. Detalhado no{" "}
            <a href="/blog/site-cfm-safe-nextjs">
              post sobre sites CFM-safe
            </a>
            .
          </li>
        </List>

        <H2>Quanto custa, quanto tempo leva</H2>

        <List>
          <li>
            <strong>Site profissional (landing + blog + páginas de
            serviço)</strong>: 2 a 4 semanas. Hospedagem na Cloudflare
            Pages: gratuito (domínio próprio + SSL incluído).
          </li>
          <li>
            <strong>SEO + GEO técnico</strong>: incluído na
            implementação. O site nasce com dados estruturados,
            llms.txt, sitemap e robots.txt corretos.
          </li>
          <li>
            <strong>Painel</strong>: incluído. O dono acessa quando
            quiser, vê visitantes e conversões reais.
          </li>
          <li>
            <strong>Manutenção mensal</strong>: opcional. Atualizações
            de conteúdo, ajustes técnicos, relatório de evolução.
          </li>
        </List>

        <H2>Próximo passo</H2>

        <p>
          Se você quer um site que aparece, converte e mede,{" "}
          <a href="/contato">agende um diagnóstico de 30 minutos</a>.
          Eu mostro o que seu site atual tem (ou não tem) e o que
          mudaria.
        </p>

        <p>
          Se quer entender primeiro como fazer o site ser citado pelas
          IAs, leia o{" "}
          <a href="/blog/o-que-e-geo-medicos">
            post sobre GEO
          </a>{" "}
          ou peça o{" "}
          <a href="/baseline-geo?vertical=medico">
            relatório gratuito de citação
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
