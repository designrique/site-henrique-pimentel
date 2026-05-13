import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "chatgpt-decide-citar",
    title: "Como o ChatGPT decide qual médico mencionar",
    teaser:
      "Os 5 sinais técnicos que pesam na decisão de citação por motores generativos.",
    category: "MedCitado",
    categoryTone: "vertical",
    publishedDate: "2026-05-10",
    readingTime: "6 min",
    author: "Henrique Pimentel",
    heroImage: {
      url: "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      alt: "A letra A em um circuito eletrônico, representando inteligência artificial",
      credit: { name: "Numan Ali", url: "https://unsplash.com/@numanaliphotographer" },
    },
    seo: {
      metaTitle:
        "Como o ChatGPT decide qual médico mencionar | Henrique Pimentel",
      metaDescription:
        "Os 5 sinais técnicos que ChatGPT, Gemini, Perplexity e outros motores generativos usam para decidir qual médico citar na resposta. Análise prática.",
      metaKeywords:
        "ChatGPT médico, citação IA, GEO médico, Schema.org Physician, llms.txt",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Não existe lance, anúncio ou compra de espaço dentro do
          ChatGPT. A pergunta correta é técnica: <em>quais sinais</em>
          fazem um modelo generativo decidir mencionar a Dra. Fátima
          em vez do Dr. Beltrano quando alguém pergunta &ldquo;qual
          o melhor geriatra de Recife?&rdquo;.
        </Lead>

        <p>
          Trabalhei nisso durante 2 meses com o caso da Dra. Fátima
          Knappe e identifiquei 5 sinais que pesam mais que todos os
          outros. Estão em ordem de impacto — do mais importante para
          o menos.
        </p>

        <H2>1. Marcação técnica do site (Schema.org)</H2>

        <p>
          Esse é o sinal que separa um site &ldquo;que existe&rdquo;
          de um site &ldquo;que a IA reconhece como referência válida
          de um médico&rdquo;.
        </p>

        <p>
          Sem marcação Schema.org, o seu site é só um conjunto de
          textos para a IA. Com a marcação correta, vira um registro
          estruturado dizendo: <em>aqui é a Dra. Fulana, geriatra,
          registrada no CRM-PE, com consultório em Recife, com
          horários X e Y</em>. A IA armazena isso como fato
          verificável.
        </p>

        <p>
          As marcações que mais pesam para médicos:
        </p>

        <List>
          <li>
            <code>Physician</code> — identifica você como médico
            individualmente.
          </li>
          <li>
            <code>MedicalBusiness</code> — identifica o consultório
            ou clínica como entidade.
          </li>
          <li>
            <code>MedicalSpecialty</code> — informa especialidade
            (Geriatrics, Cardiology, etc.).
          </li>
          <li>
            <code>medicalSpecialty</code> + <code>availableService</code> —
            informa procedimentos e serviços oferecidos.
          </li>
        </List>

        <p>
          A maioria dos sites de médico no Brasil usa template
          genérico (clínica, dentista) e perde aqui. É correção de
          poucas horas de trabalho técnico, mas o impacto é enorme.
        </p>

        <H2>2. Citações externas em fontes confiáveis</H2>

        <p>
          A IA não confia só no que <em>você</em> diz sobre você. Ela
          confia no que <em>fontes externas</em> dizem. Para médicos,
          os sinais externos mais fortes são:
        </p>

        <List>
          <li>
            <strong>Registro ativo no CRM</strong> — a IA cruza o
            nome com a base do Conselho Federal.
          </li>
          <li>
            <strong>RQE (Registro de Qualificação de
            Especialista)</strong> — específico para a especialidade.
          </li>
          <li>
            <strong>Participação em congressos e publicações</strong> —
            apresentações em SBGG, SBC, ou outros eventos da
            sociedade médica da especialidade.
          </li>
          <li>
            <strong>Menções em mídia profissional</strong> — entrevistas
            em portais médicos, artigos em revistas científicas,
            participação como palestrante.
          </li>
        </List>

        <Quote>
          Um médico com 3 menções em fontes externas confiáveis tem
          mais peso para a IA do que um médico com site bonito sem
          autoridade externa.
        </Quote>

        <H2>3. Consistência NAP entre canais</H2>

        <p>
          NAP é Nome, Endereço, Telefone. A IA cruza esses três
          dados entre todos os lugares onde você aparece: site,
          Google Meu Negócio, redes profissionais, diretórios
          médicos. Se houver divergência (endereço diferente em dois
          lugares, telefone desatualizado, nome com grafias
          diferentes), a IA reduz sua confiança e prefere citar
          quem é consistente.
        </p>

        <p>
          Em 80% dos casos que auditei, esse é o erro mais comum:
          o médico mudou de endereço há 3 anos, atualizou o site,
          mas esqueceu de atualizar o perfil no Doctoralia. A IA
          encontra os dois endereços e fica em dúvida.
        </p>

        <H2>4. Conteúdo educativo com autoria clara</H2>

        <p>
          Um blog médico assinado, com fontes citadas e linguagem
          técnica calibrada, faz três coisas ao mesmo tempo:
        </p>

        <List>
          <li>
            Estabelece autoridade sobre o tema específico (geriatria,
            cardiologia, etc.).
          </li>
          <li>
            Cria links internos que a IA usa para entender que você
            é a referência sobre aquele assunto.
          </li>
          <li>
            Vira fonte que a IA pode citar diretamente — não
            necessariamente o seu nome, mas o seu site como
            referência.
          </li>
        </List>

        <p>
          Importante: a Resolução CFM 2.336/2023 restringe muito o
          que médico pode publicar como conteúdo. Conteúdo educativo
          dentro das regras do CFM é possível, mas exige cuidado. É
          o tipo de trabalho que faço sob revisão direta do médico.
        </p>

        <H2>5. Sinais de atividade recente</H2>

        <p>
          A IA prefere médicos que estão claramente ativos. Sinais
          de atividade recente que ela detecta:
        </p>

        <List>
          <li>
            <strong>Google Meu Negócio com postagens nos últimos
            30 dias</strong> — fotos, eventos, atualizações.
          </li>
          <li>
            <strong>Avaliações respondidas</strong> — não só ter
            avaliações, mas mostrar que o médico responde.
          </li>
          <li>
            <strong>Site com data de atualização recente</strong> —
            mesmo que seja só blog post novo a cada 2 meses.
          </li>
          <li>
            <strong>Perfil profissional com data de atualização
            visível</strong> em diretórios médicos.
          </li>
        </List>

        <p>
          Esse sinal explica por que profissionais que &ldquo;fizeram o
          site há 5 anos e esqueceram&rdquo; aparecem cada vez menos.
          A IA, em dúvida entre dois médicos da mesma especialidade
          na mesma cidade, prefere o que demonstra estar ativo.
        </p>

        <H2>O que não pesa tanto quanto parece</H2>

        <p>
          Três coisas que vendem como &ldquo;essenciais para
          aparecer no ChatGPT&rdquo; mas têm impacto baixo:
        </p>

        <List>
          <li>
            <strong>Volume de seguidores no Instagram</strong> —
            redes sociais são fontes secundárias para a IA. Ajudam
            reconhecimento de marca, não citação direta.
          </li>
          <li>
            <strong>Site mobile-friendly &ldquo;cabocavido&rdquo;</strong> —
            importante para o paciente (e para o Google), mas neutro
            para a citação por IA. A IA lê o HTML, não a aparência.
          </li>
          <li>
            <strong>Velocidade de carregamento</strong> — entra no
            ranking do Google, mas a IA não penaliza site lento se
            o conteúdo for de qualidade.
          </li>
        </List>

        <H2>Como testar onde você está hoje</H2>

        <p>
          O teste de 5 minutos:
        </p>

        <List>
          <li>
            Abra ChatGPT, Gemini, Perplexity, Claude e Copilot
            (todos têm versão gratuita).
          </li>
          <li>
            Em cada um, digite <code>melhor [sua especialidade] em
            [sua cidade]</code>.
          </li>
          <li>
            Anote em qual deles seu nome aparece, em qual ordem, e
            quais nomes apareceram à frente do seu.
          </li>
        </List>

        <p>
          Repita com 2 ou 3 variações do termo (ex: &ldquo;geriatra
          Recife particular&rdquo;, &ldquo;geriatra Boa Viagem&rdquo;).
          O resultado é seu diagnóstico inicial.
        </p>

        <p>
          Se quiser que eu faça isso com 10 termos-alvo e te
          entregue o relatório em PDF, o{" "}
          <a href="/baseline-geo?vertical=medico">
            formulário do diagnóstico gratuito está aqui
          </a>
          . Em até 7 dias úteis você recebe o relatório completo.
        </p>
      </PostProse>
    );
  },
};

export default post;
