import type { PostEntry } from "@/lib/posts";
import { PostProse, H2, H3, Lead, Quote, List } from "@/components/blog/prose";

const post: PostEntry = {
  meta: {
    slug: "baseline-fatima",
    title:
      "Diagnóstico inicial da Dra. Fátima Knappe — caso real, números reais",
    teaser:
      "Do dia zero até 2 de 10 motores citando — o que mudou no site, no Google Meu Negócio e no acompanhamento mensal.",
    category: "Cases",
    publishedDate: "2026-05-08",
    readingTime: "12 min",
    author: "Henrique Pimentel",
    heroImage: {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      alt: "Estetoscópio sobre um laptop com gráficos médicos na tela",
      credit: {
        name: "National Cancer Institute",
        url: "https://unsplash.com/@nci",
      },
    },
    seo: {
      metaTitle:
        "Diagnóstico inicial Dra. Fátima Knappe — caso real | Henrique Pimentel",
      metaDescription:
        "Caso real de GEO médico: do dia zero até 2 de 10 motores de IA citando a Dra. Fátima Knappe. Site, Google Meu Negócio, acompanhamento mensal — tudo documentado.",
      metaKeywords:
        "case real GEO, Dra. Fátima Knappe, geriatra Recife, GEO médico, ChatGPT médico",
    },
  },
  Content: function PostContent() {
    return (
      <PostProse>
        <Lead>
          Em fevereiro de 2026, ChatGPT, Gemini, Perplexity, Claude
          e Copilot não citavam a Dra. Fátima Knappe em <em>nenhuma</em>{" "}
          das 10 buscas-alvo que mapeamos. Em maio, 60 dias após a
          implantação, 2 dos 10 termos retornavam o nome dela no
          Gemini. Esse post mostra exatamente o que foi feito, com
          números reais — sem inflar resultado.
        </Lead>

        <H2>O ponto de partida — fevereiro/2026</H2>

        <p>
          A Dra. Fátima Knappe é geriatra em Recife,
          com 22 anos de carreira, foco em cuidados paliativos e
          atendimento domiciliar. Tinha um site simples em WordPress,
          Google Meu Negócio com 18 avaliações, perfil no Doctoralia
          desatualizado.
        </p>

        <p>
          Antes de implementar qualquer coisa, fiz o diagnóstico
          inicial das 10 buscas-alvo nos 5 motores de IA. O resultado
          do dia zero:
        </p>

        <div className="my-8 overflow-x-auto rounded-xl border border-[color:var(--border-default)] bg-[color:var(--bg-subtle)]">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="border-b border-[color:var(--border-default)]">
                <th className="px-4 py-3 text-left text-[color:var(--text-tertiary)] uppercase tracking-wider text-xs">
                  Busca
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--text-tertiary)] uppercase tracking-wider text-xs">
                  ChatGPT
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--text-tertiary)] uppercase tracking-wider text-xs">
                  Gemini
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--text-tertiary)] uppercase tracking-wider text-xs">
                  Perplexity
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--text-tertiary)] uppercase tracking-wider text-xs">
                  Claude
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--text-tertiary)] uppercase tracking-wider text-xs">
                  Copilot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border-default)] text-[color:var(--text-secondary)]">
              {[
                ["Geriatra Recife", "—", "—", "—", "—", "—"],
                ["Melhor geriatra Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Recife particular", "—", "—", "—", "—", "—"],
                ["Geriatra cuidados paliativos Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Boa Viagem", "—", "—", "—", "—", "—"],
                ["Geriatra atende domicílio Recife", "—", "—", "—", "—", "—"],
                ["Médico para Alzheimer Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Recife particular convênio", "—", "—", "—", "—", "—"],
                ["Geriatra demência Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Recife indicação", "—", "—", "—", "—", "—"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-2.5 ${
                        j === 0 ? "text-left text-[color:var(--text-primary)]" : "text-center"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Zero em 50 combinações. É de fato o ponto de partida mais
          comum quando começo um trabalho de GEO médico.
        </p>

        <H2>O que foi implementado — 14 dias de trabalho técnico</H2>

        <H3>Semana 1 — Site dentro das regras do CFM</H3>

        <p>
          Refiz o site do zero em Next.js 16 (estático, servido pelo
          Cloudflare Pages). As decisões técnicas:
        </p>

        <List>
          <li>
            <strong>Marcação Schema.org completa</strong>: Physician
            + MedicalBusiness + MedicalSpecialty (Geriatrics)
            + availableService listando os procedimentos (consulta
            geriátrica, avaliação cognitiva, cuidados paliativos
            domiciliares).
          </li>
          <li>
            <strong>Arquivo llms.txt</strong> na raiz do domínio,
            com resumo estruturado da clínica para motores
            generativos.
          </li>
          <li>
            <strong>Open Graph + Twitter Card</strong> com imagens
            profissionais.
          </li>
          <li>
            <strong>Conteúdo CFM-safe</strong>: linguagem técnica
            sem promessa de cura, sem &ldquo;antes e depois&rdquo;,
            sem testemunhos diretos de pacientes.
          </li>
        </List>

        <H3>Semana 2 — Google Meu Negócio em modo autoridade</H3>

        <p>
          O Google Meu Negócio foi reativado com cuidado:
        </p>

        <List>
          <li>
            <strong>15 fotos profissionais novas</strong> do
            consultório e do trabalho.
          </li>
          <li>
            <strong>Categoria principal corrigida</strong> de
            &ldquo;Médico&rdquo; (genérico) para &ldquo;Geriatra&rdquo;
            (específico). Isso muda muito a IA.
          </li>
          <li>
            <strong>Postagens semanais</strong> com conteúdo
            educativo (sem identificar pacientes).
          </li>
          <li>
            <strong>Resposta a todas as avaliações</strong> antigas
            que ainda não tinham resposta.
          </li>
          <li>
            <strong>Atributos preenchidos</strong>: aceita convênios
            (lista correta), atende domicílio, acessibilidade.
          </li>
        </List>

        <H3>Sistema de acompanhamento mensal</H3>

        <p>
          Criei um script (mantenho aberto em{" "}
          <a href="/tools/geo-baseline">/tools/geo-baseline</a>) que
          roda as 10 buscas-alvo nos 5 motores uma vez por mês e
          gera o relatório de evolução. O custo da rodada mensal é
          aproximadamente R$ 8 em chamadas de API. O retorno é
          enxergar onde a coisa avança e onde travou.
        </p>

        <H2>O resultado — 60 dias depois (maio/2026)</H2>

        <div className="my-8 overflow-x-auto rounded-xl border border-[color:var(--vertical-medico-primary)] bg-[color:var(--vertical-medico-subtle-bg)]">
          <table className="w-full text-sm font-mono">
            <thead>
              <tr className="border-b border-[color:var(--border-default)]">
                <th className="px-4 py-3 text-left text-[color:var(--vertical-medico-text)] uppercase tracking-wider text-xs">
                  Busca
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--vertical-medico-text)] uppercase tracking-wider text-xs">
                  ChatGPT
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--vertical-medico-text)] uppercase tracking-wider text-xs">
                  Gemini
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--vertical-medico-text)] uppercase tracking-wider text-xs">
                  Perplexity
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--vertical-medico-text)] uppercase tracking-wider text-xs">
                  Claude
                </th>
                <th className="px-4 py-3 text-center text-[color:var(--vertical-medico-text)] uppercase tracking-wider text-xs">
                  Copilot
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border-default)] text-[color:var(--vertical-medico-text)]">
              {[
                ["Geriatra Recife", "—", "—", "—", "—", "—"],
                ["Melhor geriatra Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Recife particular", "—", "—", "—", "—", "—"],
                [
                  "Geriatra cuidados paliativos Recife",
                  "—",
                  "✓",
                  "—",
                  "—",
                  "—",
                ],
                ["Geriatra Boa Viagem", "—", "—", "—", "—", "—"],
                [
                  "Geriatra atende domicílio Recife",
                  "—",
                  "✓",
                  "—",
                  "—",
                  "—",
                ],
                ["Médico para Alzheimer Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Recife particular convênio", "—", "—", "—", "—", "—"],
                ["Geriatra demência Recife", "—", "—", "—", "—", "—"],
                ["Geriatra Recife indicação", "—", "—", "—", "—", "—"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-4 py-2.5 ${
                        j === 0 ? "text-left" : "text-center"
                      } ${
                        cell === "✓"
                          ? "text-[color:var(--vertical-medico-primary)] font-bold"
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Em números: <strong>2 de 50 combinações</strong> (10
          buscas × 5 motores) — uma taxa de 4%. Parece pouco, mas
          significa: <strong>20% das buscas-alvo no Gemini</strong>{" "}
          já mencionam o nome dela. E o Gemini é o motor que está
          dentro do Google — onde o paciente comum mais pesquisa.
        </p>

        <H2>Por que esses 2 termos específicos?</H2>

        <p>
          Os termos que &ldquo;subiram&rdquo; foram{" "}
          <em>geriatra cuidados paliativos Recife</em> e{" "}
          <em>geriatra atende domicílio Recife</em>. Não é coincidência:
        </p>

        <List>
          <li>
            São os <strong>nichos específicos</strong> em que a Dra.
            Fátima tem mais autoridade demonstrável (formação em
            cuidados paliativos, atuação ativa em atendimento
            domiciliar).
          </li>
          <li>
            São termos com <strong>menor competição</strong>{" "}
            comparado a &ldquo;melhor geriatra Recife&rdquo; (que
            tem dezenas de profissionais brigando).
          </li>
          <li>
            A Dra. Fátima já tinha menções externas alinhadas — duas
            palestras em congressos da Sociedade Brasileira de
            Geriatria e Gerontologia (SBGG) sobre paliativos.
          </li>
        </List>

        <Quote>
          A IA cita primeiro onde você tem autoridade demonstrável.
          Trabalhar do nicho específico para o termo genérico é o
          caminho — não o contrário.
        </Quote>

        <H2>Ganhos qualitativos que não estão na tabela</H2>

        <p>
          Os números acima são o resultado direto. Mas três coisas
          mudaram que não aparecem em métrica:
        </p>

        <List>
          <li>
            <strong>Pacientes chegam mais qualificados.</strong> A
            secretária da Dra. Fátima reportou que, em maio, 60% dos
            primeiros contatos já sabiam que a clínica trabalha
            cuidados paliativos e atendimento domiciliar. Antes,
            esse número era 15% — a maioria ligava perguntando
            informações básicas.
          </li>
          <li>
            <strong>Reduziu o &ldquo;turismo de consulta&rdquo;.</strong>
            Pacientes que querem só receita de medicamento controlado
            param de marcar quando a IA descreve o perfil da
            profissional (foco em geriatria integral, não em
            consulta rápida).
          </li>
          <li>
            <strong>O Google Meu Negócio passou a aparecer melhor
            em buscas locais.</strong> O sinal de atividade ajudou
            também o ranqueamento tradicional do Google Maps — efeito
            colateral positivo.
          </li>
        </List>

        <H2>O que ainda não funcionou</H2>

        <p>
          Sou honesto: 4 dos 5 motores ainda não citam a Dra. Fátima
          em nenhum termo. Razões prováveis:
        </p>

        <List>
          <li>
            <strong>ChatGPT</strong> ainda não detecta sinais
            suficientes — o site é novo (3 meses), a quantidade de
            menções externas ainda é pequena.
          </li>
          <li>
            <strong>Perplexity</strong> prioriza fontes com link
            recente — vou trabalhar conteúdo educativo no blog nos
            próximos 60 dias.
          </li>
          <li>
            <strong>Claude e Copilot</strong> são mais conservadores
            ainda — costumam só citar quando há múltiplas fontes
            confirmando autoridade.
          </li>
        </List>

        <p>
          A meta para os próximos 60 dias: subir de 2 para 5 termos
          citados no Gemini, conseguir ao menos 1 citação no ChatGPT
          e 1 no Perplexity. Detalho a estratégia no próximo
          relatório mensal.
        </p>

        <H2>Quanto custou — números reais</H2>

        <List>
          <li>
            <strong>Implantação técnica (14 dias úteis)</strong>:
            site novo + Google Meu Negócio + marcação Schema +
            llms.txt + script de acompanhamento.
          </li>
          <li>
            <strong>Hospedagem</strong>: Cloudflare Pages (grátis no
            volume atual).
          </li>
          <li>
            <strong>Domínio</strong>: R$ 40/ano (Registro.br).
          </li>
          <li>
            <strong>Custo de acompanhamento mensal</strong>: ~R$ 8
            de API + tempo de análise.
          </li>
        </List>

        <p>
          Para a Dra. Fátima, o investimento se paga em 1 paciente
          novo qualificado por mês — patamar facilmente superado já
          no primeiro mês.
        </p>

        <H2>Replicar isso para outro médico</H2>

        <p>
          O sistema técnico é o mesmo. O que muda é a estratégia de
          conteúdo (nicho da especialidade) e o trabalho de menções
          externas (depende da rede do médico).
        </p>

        <p>
          Se você quer entender onde está sua presença nas IAs hoje
          — antes de qualquer trabalho — peça o{" "}
          <a href="/baseline-geo?vertical=medico">
            relatório gratuito de citação pela IA
          </a>
          . Em até 7 dias úteis você recebe o equivalente à tabela
          acima, mas com o seu nome.
        </p>

        <p>
          Se quer implementar o sistema completo (Site + Google Meu
          Negócio + Acompanhamento), o pacote MedCitado está descrito{" "}
          <a href="/medcitado">aqui</a>. Garantia inversa: se em 60
          dias seu nome não aparecer em pelo menos 1 motor de IA,
          devolvo o valor da implantação.
        </p>
      </PostProse>
    );
  },
};

export default post;
