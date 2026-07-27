import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "captacao-automatica-clientes",
    title:
      "Captação automática de clientes: o funil que trabalha sozinho",
    teaser:
      "Como integrar site, atendente de IA e anúncios para que o lead cheque, seja qualificado, agendado e acompanhado — sem você fazer nada manualmente.",
    category: "Captação",
    publishedDate: "2026-07-27",
    readingTime: "10 min",
    featured: false,
    author: "Henrique Pimentel",
    seo: {
      metaTitle:
        "Captação automática de clientes: funil integrado com IA | Henrique Pimentel",
      metaDescription:
        "Site, atendente de IA e anúncios trabalhando juntos. O lead chega, é qualificado, agendado e acompanhado automaticamente. Sem trabalho manual.",
      metaKeywords:
        "captação automática, funil de vendas, automação de leads, qualificação automática, IA marketing, funil integrado",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Captação automática não é &ldquo;fazer mais anúncios&rdquo;.
          É conectar site, IA e anúncios em um funil onde o lead chega,
          é qualificado, é agendado e recebe acompanhamento — tudo
          automático. O dono do negócio só olha o painel e atende os
          casos que precisam de toque humano.
        </Lead>

        <p>
          Henrique Pimentel implementa funis de captação que integram{" "}
          <a
            href="https://ads.google.com/"
            rel="noopener noreferrer"
          >
            Google Ads
          </a>{" "}
          e{" "}
          <a
            href="https://www.facebook.com/business/ads"
            rel="noopener noreferrer"
          >
            Meta Ads
          </a>{" "}
          com{" "}
          <a href="/blog/atendente-ia-whatsapp-24h">
            atendente de IA no WhatsApp
          </a>{" "}
          e sites que convertem. Este post documenta a arquitetura do
          funil completo — o que se conecta com o que, em que ordem, e
          onde a maioria das implementações falha.
        </p>

        <H2>O problema: funil despedaçado</H2>

        <p>
          A maioria dos negócios tem as peças soltas:
        </p>

        <List>
          <li>
            <strong>Anúncios rodam</strong> e mandam gente para o site.
          </li>
          <li>
            <strong>O site tem um formulário</strong> que ninguém
            preenche porque é longo e frio.
          </li>
          <li>
            <strong>Alguns clicam no WhatsApp</strong> e mandam
            &ldquo;oi&rdquo; às 23h. Ninguém responde até a manhã
            seguinte.
          </li>
          <li>
            <strong>O lead esfria</strong>, esquece, ou encontra um
            concorrente que respondeu primeiro.
          </li>
        </List>

        <p>
          O problema não é o anúncio, não é o site e não é o WhatsApp.
          É a <em>desconexão</em> entre eles. Cada peça funciona
          isolada; o lead cai nos buracos entre uma e outra.
        </p>

        <Quote>
          Captação automática não é mais anúncios. É eliminar os
          buracos entre o anúncio e o agendamento.
        </Quote>

        <H2>A arquitetura do funil integrado</H2>

        <p>
          O funil tem 5 estágios conectados. Cada um entrega o lead
          quente para o próximo, sem buraco:
        </p>

        <H3>1. Atração (Ads)</H3>

        <List>
          <li>
            <strong>Google Ads</strong> para busca ativa (alto
            intenção): &ldquo;geriatra Recife particular&rdquo;,
            &ldquo;advogado trabalhalista Boa Viagem&rdquo;. O usuário
            está procurando, é quente.
          </li>
          <li>
            <strong>Meta Ads</strong> para descoberta (construção de
            demanda): Instagram Reels e Feed para públicos por
            interesse e comportamento. O usuário não estava procurando,
            mas se reconhece no conteúdo.
          </li>
          <li>
            <strong>Conteúdo orgânico</strong> que aparece no{" "}
            <a href="/blog/o-que-e-geo-medicos">
              ChatGPT e Gemini
            </a>{" "}
            via GEO — o lead chega sem custo de aquisição.
          </li>
        </List>

        <H3>2. Destino inteligente (Site)</H3>

        <p>
          O anúncio não manda para a home genérica. Manda para uma{" "}
          <a href="/blog/site-ativo-captacao">
            landing page com proposta clara
          </a>{" "}
          que tem:
        </p>

        <List>
          <li>
            Uma oferta específica (&ldquo;Consulta de avaliação
            geriátrica&rdquo;, não &ldquo;nossos serviços&rdquo;).
          </li>
          <li>
            Prova social (casos, depoimentos, números reais — não
            &ldquo;Demonstração&rdquo;).
          </li>
          <li>
            <strong>Do caminhos de conversão</strong>: formulário
            curto (nome + WhatsApp) OU botão direto para WhatsApp com
            mensagem pré-preenchida.
          </li>
        </List>

        <H3>3. Qualificação (IA)</H3>

        <List>
          <li>
            O lead clica no WhatsApp e a{" "}
            <a href="/blog/atendente-ia-whatsapp-24h">
              atendente de IA
            </a>{" "}
            responde em 3 segundos.
          </li>
          <li>
            A IA qualifica: qual o serviço, qual a urgência, qual o
            convênio, qual a cidade. Em 2-3 trocas de mensagem.
          </li>
          <li>
            Se é lead qualificado → agenda. Se não → encaminha para
            conteúdo ou espera o momento certo.
          </li>
        </List>

        <H3>4. Agendamento (automático)</H3>

        <List>
          <li>
            A IA consulta a agenda em tempo real, propõe horários,
            confirma.
          </li>
          <li>
            Envia confirmação com endereço, instruções e preparo (se
            houver).
          </li>
          <li>
            Lembrete 24h e 1h antes via WhatsApp. Reduz faltas em
            30-45%.
          </li>
        </List>

        <H3>5. Acompanhamento (painel)</H3>

        <List>
          <li>
            Todo o funil é visível em um{" "}
            <strong>painel único</strong>: quantos cliques, quantos
            leads, quantos agendaram, quantos compareceram, qual o
            custo por agendamento.
          </li>
          <li>
            Sem painel, você não sabe se o problema é o anúncio, o
            site, a IA ou a agenda. Com painel, você otimiza o ponto
            certo.
          </li>
        </List>

        <H2>Onde as implementações falham</H2>

        <List>
          <li>
            <strong>Anúncio → Home genérica</strong>: o lead cai numa
            página que não tem CTA claro, sai. Landing page específica
            converte 3-5x mais que home.
          </li>
          <li>
            <strong>WhatsApp → Caixa de entrada sem IA</strong>: a
            mensagem chega e fica. Sem resposta em 5 min, a conversão
            cai 80% (dados da{" "}
            <a
              href="https://about.meta.com/brand-resources/whatsapp/"
              rel="noopener noreferrer"
            >
              Meta
            </a>
            ).
          </li>
          <li>
            <strong>Sem lembrete</strong>: o lead agendou mas ninguém
            lembrou. 30% não aparecem. O lembrete automático é o
            retorno mais rápido do funil inteiro.
          </li>
          <li>
            <strong>Sem painel</strong>: o cliente paga anúncios, site
            e IA mas não consegue ver o funil completo. Não sabe onde
            está perdendo dinheiro.
          </li>
          <li>
            <strong>Dados inventados no painel</strong>:{" "}
            <a href="/blog/site-ativo-captacao">
              painel com números de demonstração
            </a>{" "}
            não serve. Se a tabela não existe ainda, mostra estado
            vazio, nunca número falso.
          </li>
        </List>

        <H2>Quanto custa, quanto retorna</H2>

        <p>
          O funil integrado tem custo de operação e custo de
          aquisição. São coisas diferentes:
        </p>

        <List>
          <li>
            <strong>Custo de operação</strong> (fixo): site, IA no
            WhatsApp, painel. R$ 300-800/mês dependendo do volume.
          </li>
          <li>
            <strong>Custo de aquisição</strong> (variável): anúncios.
            Depende do nicho. Médico em Recife: R$ 15-40 por lead
            qualificado. Advogado em São Paulo: R$ 40-120. Imobiliária:
            R$ 20-60.
          </li>
          <li>
            <strong>ROI</strong>: se um paciente de R$ 300 é agendado
            com R$ 25 de anúncio + R$ 5 de IA, o custo de aquisição é
            R$ 30. Margem de 90%. Sem o funil, o mesmo lead custa R$ 25
            de anúncio + R$ 0 de IA mas nunca chega ao agendamento
            porque ninguém respondeu.
          </li>
        </List>

        <H2>Próximo passo</H2>

        <p>
          Se você quer montar um funil de captação que funciona de
          ponta a ponta,{" "}
          <a href="/contato">
            agende um diagnóstico de 30 minutos
          </a>
          . Eu mapeio seus canais atuais, identifico os buracos e
          mostro onde a automação tem maior retorno.
        </p>

        <p>
          Se ainda não tem o site que converte, leia sobre{" "}
          <a href="/blog/site-ativo-captacao">
            o que torna um site um ativo de captação
          </a>
          . Se já tem o site mas perde leads no WhatsApp, leia sobre o{" "}
          <a href="/blog/atendente-ia-whatsapp-24h">
            atendente de IA 24h
          </a>
          .
        </p>
      </PostProse>
    );
  },
};

export default post;
