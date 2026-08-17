import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "ranking-deputados-projetos-pernambuco",
    title:
      "Ranking: deputados de Pernambuco que mais apresentaram projetos relevantes (federais e estaduais)",
    teaser:
      "Quem são os deputados federais e estaduais de PE com mais proposições legislativas relevantes no mandato atual? Um ranking construído com dados abertos da Câmara e da ALEPE.",
    category: "Dados Abertos",
    publishedDate: "2026-08-17",
    readingTime: "11 min",
    featured: false,
    author: "Henrique Pimentel",
    heroImage: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Congresso_Nacional_-_Brasilia_%2814911373813%29.jpg/1920px-Congresso_Nacional_-_Brasilia_%2814911373813%29.jpg",
      alt: "Congresso Nacional do Brasil em Brasília",
      credit: {
        name: "Marinelson Almeida",
        url: "https://www.flickr.com/people/marinelsonalmeida/",
      },
    },
    seo: {
      metaTitle:
        "Ranking de deputados de PE por projetos relevantes (2023-2026) | Henrique Pimentel",
      metaDescription:
        "Ranking com dados abertos: deputados federais e estaduais de Pernambuco que mais apresentaram proposições relevantes no mandato 2023-2026. Metodologia, destaques e links para cada projeto.",
      metaKeywords:
        "ranking deputados Pernambuco, deputados federais PE, deputados estaduais PE, ALEPE, projetos de lei Pernambuco, dados abertos, Câmara dos Deputados, Portal da Transparência",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Com dados abertos da Câmara dos Deputados e da Assembleia
          Legislativa de Pernambuco (ALEPE), dá para medir quem mais
          apresentou proposições legislativas relevantes no mandato
          2023–2026. Este ranking cruza proposições normativas (PL, PLP e
          PEC) com temas de impacto direto para o estado — água e
          saneamento, infraestrutura, saúde, educação, economia, meio
          ambiente, agricultura, segurança, cultura e direitos sociais.
        </Lead>

        <p>
          O objetivo não é eleger "o melhor deputado", mas responder uma
          pergunta objetiva:{" "}
          <strong>
            quem está propondo projetos que podem mudar a vida de quem
            mora em Pernambuco?
          </strong>{" "}
          A resposta importa ainda mais em ano eleitoral — e a boa notícia
          é que os dados são públicos e verificáveis, projeto por projeto.
        </p>

        <H2>Metodologia: como o ranking foi construído</H2>

        <p>
          Toda proposição apresentada é registrada em APIs públicas. Usei
          três fontes oficiais:
        </p>

        <List>
          <li>
            <strong>Câmara dos Deputados</strong> —{" "}
            <a
              href="https://dadosabertos.camara.leg.br/"
              rel="noopener noreferrer"
            >
              dadosabertos.camara.leg.br
            </a>{" "}
            (deputados federais de PE e suas proposições);
          </li>
          <li>
            <strong>ALEPE</strong> —{" "}
            <a
              href="https://dadosabertos.alepe.pe.gov.br/"
              rel="noopener noreferrer"
            >
              dadosabertos.alepe.pe.gov.br
            </a>{" "}
            (parlamentares estaduais e projetos de lei);
          </li>
          <li>
            <strong>MCP Brasil</strong> — servidor que padroniza 41 APIs
            públicas brasileiras (incluindo o Portal da Transparência e o
            TCE-PE) para consulta por agentes de IA, usado aqui como
            orquestrador das consultas.
          </li>
        </List>

        <p>
          <strong>Filtros aplicados:</strong>
        </p>

        <List>
          <li>
            Período: proposições apresentadas entre 01/2023 e 08/2026
            (legislatura atual).
          </li>
          <li>
            Federais: apenas proposições normativas — PL, PLP e PEC.
            Requerimentos e indicações foram descartados para não inflar o
            ranking com pedidos administrativos.
          </li>
          <li>
            Relevância: a ementa precisava tocar pelo menos um dos 11
            temas de impacto para Pernambuco (água/saneamento,
            infraestrutura/transporte, saúde, educação, economia/emprego,
            meio ambiente, agricultura, segurança, cultura/turismo,
            ciência/tecnologia, direitos sociais).
          </li>
          <li>
            Bônus: proposições que citam explicitamente Pernambuco,
            municípios do estado ou o Rio São Francisco receberam peso
            maior.
          </li>
        </List>

        <Quote>
          Uma ressalva honesta: quantidade não é qualidade. O ranking
          mede produção legislativa com relevância temática — a análise
          fina de cada texto é trabalho para o eleitor (e os links
          abaixo permitem isso).
        </Quote>

        <H2>Deputados federais de PE: o ranking</H2>

        <p>
          A bancada federal de Pernambuco tem 25 deputados. Entre eles, os
          que mais apresentaram proposições normativas com temas
          relevantes para o estado no mandato atual foram:
        </p>

        <List>
          <li>
            <strong>1. Eduardo da Fonte (PP)</strong> — 74 PL/PLP + 10
            PEC. Destaque: projeto que declara o acervo jornalístico do
            Diario de Pernambuco patrimônio cultural do Brasil (PL
            1205/2023).
          </li>
          <li>
            <strong>2. Clodoaldo Magalhães (PV)</strong> — 73 PL/PLP + 11
            PEC. Destaque: PEC que insere a cultura no rol de direitos
            sociais (PEC 2/2023) e PEC do direito aos cuidados (PEC
            14/2024).
          </li>
          <li>
            <strong>3. Túlio Gadêlha (PSD)</strong> — 54 PL/PLP + 8 PEC.
            Destaque: reconhece a Poesia do Pajeú como manifestação da
            cultura nacional (PL 4254/2025) e PEC da Igualdade Racial com
            Fundo Nacional de Reparação (PEC 27/2024).
          </li>
          <li>
            <strong>4. Pedro Campos (PSB)</strong> — 48 PL/PLP + 8 PEC.
            Destaque: denomina "Vital Novaes" o trecho do Eixo Leste da
            Transposição do Rio São Francisco em Floresta (PL 381/2025) —
            a proposição mais diretamente ligada à infraestrutura hídrica
            de PE no período.
          </li>
          <li>
            <strong>5. Lula da Fonte (PP)</strong> — 43 PL/PLP + 12 PEC.
            Destaque: PEC da jornada de 4 dias de trabalho (PEC 8/2025) e
            PEC que trata alimentação escolar como despesa de manutenção
            do ensino (PEC 46/2025).
          </li>
          <li>
            <strong>6. Coronel Meira (PL)</strong> — 33 PL/PLP + 16 PEC.
            Destaque: PEC que institui pisos salariais nacionais para
            profissionais de saúde (PEC 9/2025).
          </li>
          <li>
            <strong>7. Maria Arraes (PSB)</strong> — 39 PL/PLP + 7 PEC.
            Destaque: reconhece a Festa da Pedra do Reino, em São José do
            Belmonte, como manifestação da cultura nacional (PL
            2473/2026).
          </li>
          <li>
            <strong>8. Clarissa Tércio (PP)</strong> — 35 PL/PLP + 9 PEC.
            Destaque: PEC que aperfeiçoa a governança da administração
            pública com transformação digital (PEC 38/2025).
          </li>
        </List>

        <p>
          Fecham o top 10: <strong>Mendonça Filho (PL)</strong> (21
          PL/PLP + 13 PEC), <strong>Fernando Rodolfo (PRD)</strong> (20
          PL/PLP + 15 PEC) e <strong>Felipe Carreras (PSB)</strong> (18
          PL/PLP + 12 PEC, com dois projetos reconhecendo festivais de
          Garanhuns como patrimônio nacional).
        </p>

        <H2>Deputados estaduais: o ranking da ALEPE</H2>

        <p>
          Na Assembleia Legislativa, a produção legislativa é mais
          próxima do dia a dia do estado. O ranking considera projetos de
          lei com tema relevante apresentados desde 2023:
        </p>

        <List>
          <li>
            <strong>1. Gilmar Júnior (PV)</strong> — 47 projetos
            relevantes de 76. Destaque: Política Estadual de Cuidotecas
            (PL 3728/2026) e Política de Inovação Logística no
            Agronegócio com IA (PL 3751/2026).
          </li>
          <li>
            <strong>2. William Brigido (PSD)</strong> — 32 relevantes de
            50. Destaque: Estatuto das Pessoas com Doenças Raras (PL
            3767/2026) e Agenda Clima Pernambuco (PL 3772/2026).
          </li>
          <li>
            <strong>3. Delegada Gleide Ângelo (PP)</strong> — 32
            relevantes de 39. Destaque: política "Mulheres Guardiãs" (PL
            3736/2026) e combate à divulgação não consentida de conteúdo
            íntimo (PL 3741/2026).
          </li>
          <li>
            <strong>4. Romero Albuquerque (PSB)</strong> — 19 relevantes
            de 34. Destaque: isenção de ICMS na compra de fardamento para
            segurança pública (PL 3717/2026) e o "Crechômetro" — portal
            de acompanhamento das obras de creches financiadas pelo
            estado (PL 3799/2026).
          </li>
          <li>
            <strong>5. Luciano Duque (Podemos)</strong> — 14 relevantes
            de 21. Destaque: política de combate à evasão escolar de mães
            e pais adolescentes (PL 3721/2026).
          </li>
          <li>
            <strong>6. João Paulo do PT (PT)</strong> — 14 relevantes de
            21. Destaque: PEC que institui o Orçamento de Promoção dos
            Direitos da População LGBTQIAPN+ (PEC 33/2026) e gratuidade
            no transporte intermunicipal em dias de eleição (PL
            3864/2026).
          </li>
          <li>
            <strong>7. Antônio Moraes (PSD)</strong> — 14 relevantes de
            16 projetos.
          </li>
          <li>
            <strong>8. Socorro Pimentel (PSD)</strong> — 13 relevantes de
            19 projetos.
          </li>
        </List>

        <p>
          Completa o top 10: <strong>Renato Antunes (Novo)</strong> (13
          relevantes) e <strong>Junior Matuto (Republicanos)</strong> (11
          relevantes).
        </p>

        <H2>O que os temas dizem sobre a bancada</H2>

        <p>
          No agregado, os temas mais frequentes entre as proposições
          federais de PE foram saúde, direitos sociais e economia. Entre
          os estaduais, a pauta é dominada por políticas públicas de
          saúde e proteção social — um recorte que mostra onde os
          parlamentares estão concentrando esforço legislativo, e também
          onde há espaço para propostas mais ousadas em infraestrutura
          hídrica e logística, que seguem escassas apesar da relevância
          para o estado.
        </p>

        <H2>Como conferir cada proposição</H2>

        <p>
          Tudo é verificável. Na Câmara, use o{" "}
          <a
            href="https://www.camara.leg.br/busca-portal/proposicoes"
            rel="noopener noreferrer"
          >
            buscador oficial de proposições
          </a>{" "}
          pelo número e ano (ex.: PL 381/2025). Na ALEPE, o{" "}
          <a
            href="https://www.alepe.pe.gov.br/proposicoes/"
            rel="noopener noreferrer"
          >
            portal de proposições
          </a>{" "}
          permite consultar projetos, indicações e requerimentos por
          parlamentar e tema. E o{" "}
          <a
            href="https://portaldatransparencia.gov.br/api-de-dados"
            rel="noopener noreferrer"
          >
            Portal da Transparência
          </a>{" "}
          cruza a outra ponta: para onde o dinheiro público (incluindo
          emendas parlamentares) está indo — a chave de acesso é gratuita
          e leva um minuto para ser criada.
        </p>

        <H2>Limitações do ranking</H2>

        <List>
          <li>
            Mede <strong>proposições apresentadas</strong>, não aprovadas
            — virar lei é outra etapa, dependente de articulação e
            maioria.
          </li>
          <li>
            Coautoria e proposições "guarda-chuva" (frentes parlamentares)
            contam como apresentação individual, o que pode superestimar
            quem assina muitos projetos coletivos.
          </li>
          <li>
            A análise temática foi feita sobre as ementas públicas, não
            sobre o texto integral de cada projeto.
          </li>
        </List>

        <p>
          Dados coletados em 17/08/2026 diretamente das APIs oficiais.
          Números de proposições podem variar ligeiramente conforme a
          atualização das bases.
        </p>

        <H2>Por que isso importa em 2026</H2>

        <p>
          Em ano de eleição, o ranking é um convite ao voto informado:
          antes de decidir, confira o que o candidato (ou o atual
          deputado) efetivamente propôs. Os dados estão abertos — o
          trabalho é ler. Se você quer ajuda para transformar esse tipo
          de dado público em relatórios, dashboards ou conteúdo{" "}
          <a href="/contato">fale comigo</a>.
        </p>
      </PostProse>
    );
  },
};

export default post;
