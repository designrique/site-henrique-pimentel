import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, Lead, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "meta-muse-agente-pessoal-autonomo",
    title: "Meta Muse quer agir por você, não só responder perguntas",
    teaser:
      "O agente pode comprar, reservar viagens e negociar em nome do usuário. A aposta da Meta depende de permissões granulares e de uma máquina virtual isolada.",
    category: "Inteligência Artificial",
    publishedDate: "2026-10-05",
    readingTime: "3 min",
    source: {
      name: "Anadolu Agency",
      url: "https://www.aa.com.tr/en/world/meta-launches-personal-ai-agent-muse-that-can-shop-book-travel-negotiate-for-users/4052400",
    },
    seo: {
      metaTitle: "Meta Muse: o agente de IA que compra e reserva por você",
      metaDescription:
        "Conheça o Muse, agente pessoal da Meta que pode comprar, reservar viagens e enviar e-mails, com permissões, aprovação humana e uma VM dedicada.",
      metaKeywords:
        "Meta Muse, agente de IA, inteligência artificial, automação, agente pessoal",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          A Meta lançou o Muse, um agente pessoal pensado para executar tarefas
          online em vez de apenas sugerir como fazê-las. Ele pode pesquisar e
          comprar produtos, reservar viagens, preencher formulários, enviar
          e-mails e até negociar em nome do usuário.
        </Lead>

        <p>
          A diferença prática está no que acontece depois do pedido. O usuário
          pode definir um objetivo mais amplo, e o Muse monta um plano e continua
          trabalhando mesmo quando o aplicativo é fechado. Se surgir uma mudança
          ou uma decisão sensível, como concluir uma compra ou enviar uma
          mensagem, o agente pode interromper o fluxo e pedir autorização.
        </p>

        <H2>Um navegador próprio, com limites</H2>

        <p>
          Para operar sites e serviços conectados, o Muse usa uma máquina virtual
          dedicada na nuvem, com navegador próprio. A Meta diz que um segundo
          agente, chamado Sentinel, avalia as ações: algumas seguem, outras são
          bloqueadas e as que exigem consentimento ficam pendentes de aprovação.
        </p>

        <p>
          O usuário escolhe quais serviços conectar e o que o Muse pode fazer em
          cada um. Segundo a empresa, o agente não vê senhas nem dados de
          pagamento, e suas ações ficam registradas em um histórico de auditoria.
          Para compras aprovadas, o pagamento pode passar pelo Link, da Stripe,
          que gera um cartão virtual de uso único.
        </p>

        <H2>O risco muda de lugar</H2>

        <p>
          Isolar o navegador e pedir confirmação reduz alguns riscos, mas não
          elimina o principal: um agente autorizado a interagir com contas reais
          ainda pode interpretar mal um pedido, escolher a opção errada ou ser
          induzido por conteúdo malicioso em uma página. O histórico de ações e
          as permissões por serviço são controles úteis; não substituem limites
          claros de gasto, escopo e reversibilidade.
        </p>

        <p>
          A Meta afirma que conversas e dados guardados na máquina virtual não
          são compartilhados com seus sistemas de anúncios. Também oferece a
          opção de impedir que as interações sejam usadas para treinar seus
          modelos. São compromissos importantes, mas a confiança vai depender de
          como esses controles funcionam no uso real, não apenas da arquitetura
          descrita no lançamento.
        </p>

        <H2>Disponibilidade inicial</H2>

        <List>
          <li>Disponível inicialmente nos Estados Unidos para pessoas com 18 anos ou mais.</li>
          <li>Acesso por um aplicativo dedicado ou pelo WhatsApp.</li>
          <li>Uso básico gratuito; planos de US$ 20 e US$ 100 mensais para uso mais intenso.</li>
          <li>Suporte aos óculos de IA da Meta está previsto, mas não foi detalhado como disponibilidade imediata.</li>
        </List>

        <p>
          O Muse aponta para uma mudança de interface: em vez de abrir vários
          aplicativos e executar cada etapa, o usuário delega o resultado e
          acompanha as exceções. Isso só será uma melhoria se a pessoa conseguir
          entender, limitar e desfazer o que o agente faz. Autonomia sem controle
          é só automação com uma conta bancária conectada.
        </p>

        <p>
          Fonte: <a href="https://www.aa.com.tr/en/world/meta-launches-personal-ai-agent-muse-that-can-shop-book-travel-negotiate-for-users/4052400" target="_blank" rel="noopener noreferrer">Anadolu Agency</a>.
          Confira também as <a href="/noticias">notícias de inteligência artificial</a>.
        </p>
      </PostProse>
    );
  },
};

export default post;
