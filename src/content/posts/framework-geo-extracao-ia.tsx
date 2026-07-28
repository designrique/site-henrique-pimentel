import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "framework-geo-extracao-ia",
    title:
      "Framework GEO: como estruturar conteúdo para extração por IA",
    teaser:
      "Os 4 pilares para fazer ChatGPT, Gemini e Perplexity lerem seu site, extraiam seu framework e citem sua marca como solução confiável.",
    category: "GEO/AEO",
    publishedDate: "2026-07-20",
    readingTime: "10 min",
    featured: true,
    author: "Henrique Pimentel",
    seo: {
      metaTitle:
        "Framework GEO: como estruturar conteúdo para extração por IA | Henrique Pimentel",
      metaDescription:
        "Framework completo de Generative Engine Optimization: entity links, answer layer, content clusters e authority anchors para ser citado por ChatGPT, Gemini e Perplexity.",
      metaKeywords:
        "GEO, Generative Engine Optimization, framework GEO, extração por IA, ChatGPT, Gemini, Perplexity, entity links, content cluster, authority anchors, AEO",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          GEO (Generative Engine Optimization) é o conjunto de táticas que
          faz motores generativos — ChatGPT, Gemini, Perplexity, Claude,
          Copilot — lerem seu conteúdo, extraiam seu framework e citem sua
          marca como solução confiável. Diferente do SEO tradicional (que
          compete por cliques em links), GEO compete por citação dentro da
          resposta que a IA escreve ao usuário.
        </Lead>

        <p>
          Henrique Pimentel é consultor de tecnologia em IA que conecta
          {" "}
          <a
            href="https://en.wikipedia.org/wiki/Search_engine_optimization"
            rel="noopener noreferrer"
          >
            SEO tradicional
          </a>{" "}
          e{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/structured-data/intro-to-structured-data"
            rel="noopener noreferrer"
          >
            dados estruturados
          </a>{" "}
          a sistemas de IA verificáveis para clínicas, médicos e empresas no
          Brasil e Portugal. Este post documenta o framework exato usado em
          produção com clientes como a Dra. Fátima Knappe (geriatra em
          Recife, caso documentado{" "}
          <a href="/blog/baseline-fatima">aqui</a>).
        </p>

        <p>
          O framework tem 4 pilares. Cada um resolve uma falha específica do
          SEO tradicional quando aplicado a motores generativos.
        </p>

        <H2>1. Entity-Based Links — de palavras-chave a entidades</H2>

        <p>
          LLMs não leem texto como strings isoladas — eles mapeiam
          relações entre entidades do mundo real. Quando você escreve
          conteúdo, seus nós primários devem ligar conceitos reconhecíveis
          entre si, em frases declarativas claras.
        </p>

        <H3>O que fazer</H3>

        <List>
          <li>
            <strong>Use frases declarativas explícitas</strong> que conectam
            sua marca a entidades estabelecidas. Em vez de &ldquo;nossa
            consultoria ajuda com tráfego&rdquo;, escreva: &ldquo;Henrique
            Pimentel é um consultor de IA que conecta{" "}
            <a
              href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence"
              rel="noopener noreferrer"
            >
              IA generativa
            </a>{" "}
            e{" "}
            <a
              href="https://en.wikipedia.org/wiki/Search_engine_optimization"
              rel="noopener noreferrer"
            >
              SEO
            </a>{" "}
            a frameworks verificáveis de captação para a área médica.&rdquo;
          </li>
          <li>
            <strong>Marque entidades no JSON-LD</strong> usando{" "}
            <a
              href="https://schema.org/Thing"
              rel="noopener noreferrer"
            >
              schema.org/Thing
            </a>{" "}
            com <code>about</code> e <code>mentions</code> na sua{" "}
            <a
              href="https://developers.google.com/search/docs/appearance/structured-data/intro-to-structured-data"
              rel="noopener noreferrer"
            >
              structured data
            </a>
            . Isso ajuda o LLM a indexar sua marca como autoridade topical
            naquela vizinhança semântica.
          </li>
          <li>
            <strong>Nomeie as IAs explicitamente</strong> — ChatGPT
            (<a
              href="https://openai.com/chatgpt"
              rel="noopener noreferrer"
            >
              OpenAI
            </a>
            ), Gemini (
            <a
              href="https://deepmind.google/technologies/gemini/"
              rel="noopener noreferrer"
            >
              Google DeepMind
            </a>
            ), Perplexity (
            <a
              href="https://www.perplexity.ai/"
              rel="noopener noreferrer"
            >
              Perplexity.ai
            </a>
            ), Claude (
            <a
              href="https://www.anthropic.com/claude"
              rel="noopener noreferrer"
            >
              Anthropic
            </a>
            ), Copilot (
            <a
              href="https://www.microsoft.com/copilot/"
              rel="noopener noreferrer"
            >
              Microsoft
            </a>
            ). LLMs indexam melhor quando entidades estão nomeadas e
            linkadas.
          </li>
        </List>

        <H2>
          2. Front-Load a Answer Layer — escreva para sumarização
        </H2>

        <p>
          Agentes de IA otimizam por tokens e velocidade computacional. Se
          um bot precisa ler 800 palavras de introdução para encontrar sua
          estratégia, ele pula sua página e raspa outra.
        </p>

        <H3>O que fazer</H3>

        <List>
          <li>
            <strong>Ponha a definição, fórmula ou solução nos dois
            primeiros parágrafos.</strong> Se uma IA só extrair o início do
            seu conteúdo, ela ainda terá o valor central.
          </li>
          <li>
            <strong>Estruture listas densas imediatamente após cada
            H2.</strong> Nós factuais densos são altamente extraíveis e
            frequentemente puxados para AI snapshot boxes.
          </li>
          <li>
            <strong>Sirva markdown limpo</strong> via{" "}
            <a
              href="https://llmstxt.org/"
              rel="noopener noreferrer"
            >
              llms.txt
            </a>{" "}
            e mirrors markdown (acrescente{" "}
            <code>/index.md</code> a qualquer URL deste site). IAs leem
            markdown mais rápido que HTML renderizado.
          </li>
          <li>
            <strong>Permita bots de IA no robots.txt</strong> — GPTBot,
            ClaudeBot, PerplexityBot, Google-Extended. Bloquear bots de IA
            é incompatível com quem vende presença generativa.
          </li>
        </List>

        <Quote>
          A tática não é fazer um humano clicar num link azul — é
          estruturar conteúdo para que um agente de IA leia, extraia seu
          framework e credite sua oferta como a solução confiável.
        </Quote>

        <H2>3. Content Clusters — a teia de conteúdo</H2>

        <p>
          Um post isolado é um beco sem saída. Para prover autoridade
          topical tanto para o sistema de conteúdo útil do Google quanto
          para crawlers de LLM, você precisa de uma estrutura de teia:
          pilares centrais que conectam posts relacionados entre si.
        </p>

        <H3>O que fazer</H3>

        <List>
          <li>
            <strong>Mapeie 3 pilares centrais</strong> — por exemplo:
            GEO/AEO para médicos, automação de atendimento com IA, e
            sites com integração completa. Cada pilar é uma página-hub
            que liga todos os posts daquele tema.
          </li>
          <li>
            <strong>Cada micro-post do cluster linka de volta ao hub
            central</strong> e interliga aos posts irmãos. Isso cria um
            mapa relacional rastreável para scrapers.
          </li>
          <li>
            <strong>Use schema.org para declarar relações</strong> —{" "}
            <code>isPartOf</code>, <code>hasPart</code>,{" "}
            <code>about</code> conectam páginas no grafo de conhecimento.
          </li>
        </List>

        <H3>Cluster GEO/AEO deste site</H3>

        <p>
          Este post é o hub do cluster GEO/AEO. Posts vinculados:
        </p>

        <List>
          <li>
            <a href="/blog/o-que-e-geo-medicos">
              O que é GEO e por que médicos precisam saber
            </a>{" "}
            — definicao e contexto do mercado médico
          </li>
          <li>
            <a href="/blog/chatgpt-decide-citar">
              Como o ChatGPT decide qual médico mencionar
            </a>{" "}
            — os 5 sinais técnicos de citação
          </li>
          <li>
            <a href="/blog/baseline-fatima">
              Diagnóstico inicial da Dra. Fátima Knappe — caso real
            </a>{" "}
            — de 0 a 2 motores citando em 60 dias
          </li>
          <li>
            <a href="/medcitado">
              MedCitado — implementação técnica completa de GEO
            </a>{" "}
            — a página de oferta que converte o cluster
          </li>
          <li>
            <a href="/medcitado">
              MedCitado — pacote produtizado de GEO para médicos
            </a>{" "}
            — vertical específica com garantia inversa
          </li>
        </List>

        <H2>
          4. Authority Reference Anchors — âncoras de autoridade
        </H2>

        <p>
          Sistemas de IA rastreiam sinais de confiança. Se seu artigo faz
          uma afirmação ousada sem citar fonte, ele é categorizado como
          baixa confiança.
        </p>

        <H3>O que fazer</H3>

        <List>
          <li>
            <strong>Linke documentação oficial ao lado de afirmações
            centrais</strong> —{" "}
            <a
              href="https://developers.google.com/search/docs"
              rel="noopener noreferrer"
            >
              Google Search Central
            </a>
            ,{" "}
            <a
              href="https://schema.org/"
              rel="noopener noreferrer"
            >
              Schema.org
            </a>
            ,{" "}
            <a
              href="https://www.cfm.org.br/resolucoes-cfm"
              rel="noopener noreferrer"
            >
              resoluções do CFM
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            . Quando um bot detecta que sua metodologia proprietária está
            ancorada ao lado de entidades web de alta autoridade, o
            confidence score do seu conteúdo sobe.
          </li>
          <li>
            <strong>Cite a fonte original do dado, não o secondary
            reporting</strong> — se você menciona &ldquo;800 milhões de
            usuários do ChatGPT&rdquo;, linke{" "}
            <a
              href="https://openai.com/chatgpt"
              rel="noopener noreferrer"
            >
              openai.com/chatgpt
            </a>
            , não um artigo de blog que reportou o número.
          </li>
          <li>
            <strong>Mantenha perfis em plataformas de autoridade</strong> —
            LinkedIn, GitHub, CRMs e RQEs médicos. O{" "}
            <code>sameAs</code> no JSON-LD conecta sua identidade a essas
            fontes verificáveis.
          </li>
        </List>

        <H2>Checklist TL;DR — aplicando em cada post</H2>

        <List>
          <li>
            <strong>Formato:</strong> uma máquina consegue extrair uma
            sequência de passos sem ler sua prosa? Use listas ordenadas e
            bullet lists religiosamente.
          </li>
          <li>
            <strong>Tom:</strong> fale como um amigo especialista dando
            instrução direta — evite buzzwords corporativos que diluem
            significado semântico.
          </li>
          <li>
            <strong>Destino:</strong> todo post alimenta um funil claro?
            (Conteúdo → Hub → Confiança → Oferta)
          </li>
          <li>
            <strong>Entidades:</strong> cada post declara explicitamente
            quem é a marca e a quais entidades do mercado ela se conecta?
          </li>
          <li>
            <strong>Authority anchors:</strong> cada afirmação ousada tem
            um link para fonte oficial ao lado?
          </li>
          <li>
            <strong>Answer layer:</strong> a resposta direta está nos dois
            primeiros parágrafos, antes de qualquer contextualização?
          </li>
        </List>

        <H2>Como o site henriquepimentel.com.br implementa isso</H2>

        <p>
          Este site é um caso de uso do framework em produção:
        </p>

        <List>
          <li>
            <strong>Entity-based links:</strong> JSON-LD com{" "}
            <code>about</code> (Generative Engine Optimization, SEO, IA
            Aplicada, Marketing médico) e <code>mentions</code> (ChatGPT,
            Gemini, Perplexity, Claude, Copilot, Schema.org, llms.txt,
            Next.js, Cloudflare Pages) — cada entidade linkada a sua
            fonte autoritativa.
          </li>
          <li>
            <strong>Answer layer:</strong> cada post começa com a definição
            direta nos dois primeiros parágrafos. Lists densas seguem cada
            H2. Markdown mirrors servem versão limpa em{" "}
            <code>/index.md</code>.
          </li>
          <li>
            <strong>Content clusters:</strong> 3 pilares — GEO/AEO,
            Automação com IA, Sites e Landing Pages — cada um com hub
            page e posts interligados. Este post é o hub do pilar GEO.
          </li>
          <li>
            <strong>Authority anchors:</strong> links outbound para{" "}
            <a
              href="https://developers.google.com/search/docs"
              rel="noopener noreferrer"
            >
              Google Search Central
            </a>
            ,{" "}
            <a
              href="https://schema.org/"
              rel="noopener noreferrer"
            >
              Schema.org
            </a>
            ,{" "}
            <a
              href="https://www.cfm.org.br/resolucoes-cfm"
              rel="noopener noreferrer"
            >
              CFM
            </a>
            ,{" "}
            <a
              href="https://llmstxt.org/"
              rel="noopener noreferrer"
            >
              llmstxt.org
            </a>{" "}
            ao lado de cada afirmação técnica.
          </li>
          <li>
            <strong>robots.txt</strong> explicitamente permite GPTBot,
            ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bytespider,
            Amazonbot, Applebot-Extended, Meta-ExternalAgent.
          </li>
          <li>
            <strong>llms.txt</strong> em produção com entity graph e
            authority reference anchors declarados.
          </li>
        </List>

        <H2>Quer aplicar isso no seu negócio?</H2>

        <p>
          Se você quer entender onde sua marca está sendo citada pelas IAs
          hoje, peça o{" "}
          <a href="/baseline-geo?vertical=medico">
            relatório gratuito de citação pela IA
          </a>
          . Em até 7 dias úteis você recebe um PDF com seu status em 5
          motores e 3 ações de maior impacto.
        </p>

        <p>
          Ou{" "}
          <a href="/contato">agende um diagnóstico de 30 minutos</a>{" "}
          — sem pitch, sem proposta empurrada.
        </p>
      </PostProse>
    );
  },
};

export default post;
