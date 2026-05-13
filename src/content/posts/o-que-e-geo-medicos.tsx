import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "o-que-e-geo-medicos",
    title:
      "O que é GEO (Generative Engine Optimization) e por que médicos precisam saber",
    teaser:
      "Como ChatGPT, Gemini e Perplexity decidem citar profissionais e clínicas, e o que muda na prática de captação em 2026.",
    category: "GEO/AEO",
    publishedDate: "2026-05-12",
    readingTime: "8 min",
    featured: true,
    author: "Henrique Pimentel",
    heroImage: {
      url: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      alt: "Mãos tocando uma representação de inteligência artificial em fundo azul",
      credit: { name: "Igor Omilaev", url: "https://unsplash.com/@omilaev" },
    },
    seo: {
      metaTitle:
        "O que é GEO e por que médicos precisam saber | Henrique Pimentel",
      metaDescription:
        "GEO é a otimização para motores generativos (ChatGPT, Gemini, Perplexity). Entenda como funciona, por que muda a captação de pacientes e o que fazer em 2026.",
      metaKeywords:
        "GEO, Generative Engine Optimization, AEO, médico, ChatGPT, Gemini, Perplexity, marketing médico",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Em 2024, o paciente abria o Google. Em 2026, ele abre o ChatGPT.
          E quando a IA responde &ldquo;procure a Dra. Fulana em Recife&rdquo;,
          quem está no rol de nomes citados ganha o telefonema. Quem não está
          fica invisível — mesmo aparecendo bem no Google.
        </Lead>

        <p>
          GEO é a sigla para <strong>Generative Engine Optimization</strong>,
          ou otimização para motores generativos. É a evolução natural do
          SEO: em vez de tentar aparecer no topo de uma lista de links,
          você trabalha para ser <em>citado</em> dentro da resposta que a
          IA dá ao usuário.
        </p>

        <p>
          Para médicos, isso muda tudo. O paciente que pergunta
          &ldquo;quem é o melhor geriatra de Recife?&rdquo; ao ChatGPT
          não recebe 10 links e escolhe um — ele recebe 2 ou 3 nomes
          recomendados e, na maioria das vezes, marca consulta com o
          primeiro que parece confiável.
        </p>

        <H2>Por que isso importa agora</H2>

        <p>
          Três dados que mudaram em 2026:
        </p>

        <List>
          <li>
            <strong>O ChatGPT passou de 400 milhões para 800 milhões de
            usuários semanais</strong> entre janeiro e abril de 2026
            (dados da OpenAI). É o canal de busca que mais cresce no mundo.
          </li>
          <li>
            <strong>O Google integrou AI Overviews em 100% das buscas
            médicas em português</strong>. Quando alguém pesquisa
            &ldquo;sintomas de Alzheimer&rdquo;, a IA do Google responde
            direto na tela — e cita 2 ou 3 fontes profissionais.
          </li>
          <li>
            <strong>43% dos pacientes brasileiros entre 35 e 55 anos
            usam IA para pesquisar saúde</strong> antes de marcar consulta
            (pesquisa Datafolha, março/2026). É o filho ou a filha do
            paciente, geralmente, que faz a busca.
          </li>
        </List>

        <p>
          Resultado: se você é médico e seu nome não aparece quando
          alguém pergunta sobre sua especialidade na sua cidade, você
          está perdendo pacientes que <em>nunca souberam que você
          existe</em>.
        </p>

        <H2>SEO vs GEO — qual a diferença real</H2>

        <p>
          SEO trabalha com palavras-chave, links e ranqueamento. O
          objetivo era aparecer no topo dos 10 resultados azuis. GEO
          trabalha com sinais semânticos, dados estruturados e
          autoridade verificável. O objetivo é ser <em>citado dentro
          da resposta</em>.
        </p>

        <p>
          Na prática:
        </p>

        <List>
          <li>
            <strong>SEO te coloca no resultado 3 do Google</strong> —
            ainda exige clique, ainda compete com 9 outros links.
          </li>
          <li>
            <strong>GEO te coloca dentro do texto que a IA escreve</strong> —
            o paciente lê seu nome antes de qualquer link, e você é
            apresentado como referência.
          </li>
        </List>

        <Quote>
          GEO não substitui SEO. Mas em 2026, fazer só SEO é como
          fazer só anúncio no jornal impresso em 2010.
        </Quote>

        <H2>Como a IA decide quem citar</H2>

        <p>
          Existem 5 sinais técnicos que pesam na decisão de um motor
          generativo (ChatGPT, Gemini, Perplexity, Claude, Copilot)
          ao citar um profissional. Detalhei cada um no post{" "}
          <a href="/blog/chatgpt-decide-citar">Como o ChatGPT decide
          qual médico mencionar</a>, mas em resumo:
        </p>

        <List>
          <li>
            <strong>Marcação técnica do site</strong> (Schema.org
            MedicalBusiness, Physician, MedicalSpecialty) — a IA
            precisa entender que aquele site representa um médico
            verificável.
          </li>
          <li>
            <strong>Citações externas em fontes confiáveis</strong>
            — perfis em conselhos (CRM, RQE), participação em
            congressos, menções em mídia profissional.
          </li>
          <li>
            <strong>Consistência de informação NAP</strong> (Nome,
            Endereço, Telefone) entre Google Meu Negócio, site,
            redes profissionais e diretórios médicos.
          </li>
          <li>
            <strong>Conteúdo educativo com autoria clara</strong> —
            blog ou artigos assinados pelo médico, com fontes citadas
            e linguagem técnica calibrada.
          </li>
          <li>
            <strong>Sinais de atividade recente</strong> — Google Meu
            Negócio com postagens, avaliações respondidas, fotos
            atualizadas.
          </li>
        </List>

        <H2>Onde começar — o diagnóstico inicial</H2>

        <p>
          Antes de implementar qualquer coisa, faça o teste mais
          simples possível: abra o ChatGPT (versão gratuita serve) e
          digite, substituindo seus dados:
        </p>

        <pre>
          <code>melhor [sua especialidade] em [sua cidade]</code>
        </pre>

        <p>
          Seu nome aparece? Se sim — em qual ordem? Se não, qual é
          o tipo de profissional que aparece (clínica grande, plano
          de saúde, perfil em diretório)?
        </p>

        <p>
          Repita em Gemini, Perplexity, Claude e Copilot. Anote o
          resultado em uma planilha simples. Isso é seu diagnóstico
          inicial — o ponto de partida para qualquer trabalho de GEO.
        </p>

        <p>
          Se quiser que eu faça esse diagnóstico para você, o
          formulário do{" "}
          <a href="/baseline-geo?vertical=medico">
            relatório gratuito está aqui
          </a>
          . É um PDF de 2 páginas que mostra sua presença nos 5
          motores e as 3 ações de maior impacto pra você começar.
        </p>

        <H2>O que muda na captação na prática</H2>

        <p>
          Tenho visto isso com a Dra. Fátima Knappe (geriatra em
          Recife, caso documentado{" "}
          <a href="/blog/baseline-fatima">neste post</a>). Em
          maio/2026, antes do trabalho de GEO, ela não era citada em
          nenhum dos 5 motores nas buscas-alvo. Hoje, depois de 60
          dias de implementação técnica:
        </p>

        <List>
          <li>
            <strong>2 dos 10 termos-alvo</strong> retornam o nome
            dela no Gemini.
          </li>
          <li>
            <strong>O Google Meu Negócio</strong> dela aparece com
            destaque para buscas geo-localizadas (geriatra Boa
            Viagem, geriatra Recife particular).
          </li>
          <li>
            <strong>Os pacientes chegam mais qualificados</strong> —
            já sabem que ela trabalha cuidados paliativos e
            atendimento domiciliar antes de ligar.
          </li>
        </List>

        <p>
          O ganho mais surpreendente foi qualitativo: a secretária
          gasta metade do tempo com perguntas básicas porque o
          paciente já chegou informado. O ChatGPT explicou.
        </p>

        <H2>Quanto custa, quanto tempo leva</H2>

        <p>
          Um trabalho técnico de GEO médico tem três fases:
        </p>

        <List>
          <li>
            <strong>Diagnóstico inicial (7 a 14 dias)</strong>:
            mapeamento da presença atual nos 5 motores, auditoria
            do site, do Google Meu Negócio e dos diretórios médicos.
          </li>
          <li>
            <strong>Implantação técnica (2 a 4 semanas)</strong>:
            site dentro das regras do CFM com marcação técnica
            correta, llms.txt configurado, blog estruturado para
            citação, Google Meu Negócio em modo autoridade.
          </li>
          <li>
            <strong>Acompanhamento mensal</strong>: relatório que
            mostra evolução das menções nos 5 motores e ajustes
            técnicos pontuais.
          </li>
        </List>

        <p>
          Resultados começam a aparecer entre 30 e 90 dias — depende
          da especialidade, da cidade e da concorrência. Cardiologia
          em São Paulo é mais difícil que geriatria em Recife. É
          honesto dizer isso na largada.
        </p>

        <H2>O que não funciona</H2>

        <p>
          Três coisas que vendem mas não entregam:
        </p>

        <List>
          <li>
            <strong>Comprar &ldquo;menção em ChatGPT&rdquo;</strong> —
            não existe. As IAs não vendem espaço de citação. Quem
            promete isso está vendendo poeira.
          </li>
          <li>
            <strong>Postar em massa em redes sociais</strong> —
            Instagram e TikTok ajudam reconhecimento de marca, mas
            quase não influenciam as IAs (que treinaram em fontes
            estruturadas, não em legendas).
          </li>
          <li>
            <strong>Comprar links</strong> — Google penaliza, IAs
            ignoram, e ainda fere a Resolução CFM 2.336/2023.
          </li>
        </List>

        <H2>Próximo passo</H2>

        <p>
          Se você é médico e quer entender onde está a sua presença
          nas IAs hoje, peça o{" "}
          <a href="/baseline-geo?vertical=medico">
            relatório gratuito de citação pela IA
          </a>
          . Em até 7 dias úteis você recebe um PDF de 2 páginas com:
        </p>

        <List>
          <li>
            Seu status atual em ChatGPT, Gemini, Perplexity, Claude
            e Copilot
          </li>
          <li>Os termos onde você já é citado e onde está invisível</li>
          <li>3 ações concretas de curto prazo</li>
        </List>

        <p>
          Sem reunião obrigatória, sem custo. Se fizer sentido
          continuar depois disso, você me chama.
        </p>
      </PostProse>
    );
  },
};

export default post;
