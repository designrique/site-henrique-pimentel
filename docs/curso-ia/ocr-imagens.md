# OCR das imagens

Transcrição consolidada do material enviado. A ordem segue as imagens recebidas.

## 1. Introdução

**O NOVO MUNDO DA ADVOCACIA**

### Introdução

Vivemos a era da inteligência aumentada. Enquanto muitos ainda tentam entender o que são LLMs, outros já estão usando esses modelos para revolucionar a forma como trabalham e prosperam. Este guia foi criado com um objetivo muito claro: mostrar como a fusão entre sua inteligência jurídica e a inteligência artificial pode multiplicar sua produtividade, refinar seu raciocínio técnico e levar sua atuação profissional a um novo patamar.

Mais do que um manual técnico, este material é um convite à transformação. Aqui, você vai aprender a dominar a engenharia de prompts, compreender os bastidores dos modelos de linguagem de grande escala (LLMs), aplicá-los no dia a dia da advocacia e, principalmente, criar soluções jurídicas com mais profundidade, precisão e velocidade.

Se você ainda acredita que IA é um modismo passageiro, cuidado: pode estar prestes a ser ultrapassado por quem sabe fazer as perguntas certas para a máquina certa.

Prepare-se para desbloquear sua super inteligência. O futuro da advocacia começa agora e ele é exponencial.

## 2. Sumário

**Capítulo 1: Pensamento Exponencial e LLMs**

- 1.1 Pensamento Exponencial e LLMs
- 1.2 Entendendo as LLMs
- 1.3 Tabela de Limitações das LLMs

**Capítulo 2: Engenharia de Prompt**

- 2.1 Engenharia de Prompt
- 2.1.1 Definição, Componentes e Novas Abordagens
- 2.1.2 Técnicas de Prompting Atualizadas
- 2.1.3 Para prompts complexos é fundamental usar Markdown

**Capítulo 3: Aplicações Práticas na Advocacia**

- 3.1 Aplicações Práticas na Advocacia
- 3.1.1 IA na Elaboração de Peças Jurídicas
- 3.1.2 Prompts de Alto Nível Jurídico
- 3.1.3 IA para Captar Clientes
- 3.1.4 Treinando a IA para Linguagem Técnica Jurídica
- 3.1.5 IA Colaborativa e Senso Crítico
- 3.1.6 IA na Gestão de Escritório
- 3.1.7 GPTs Interessantes

**Capítulo 4: Ecossistema de IAs**

- 4.1 Ecossistema de IAs

## 3. Capítulo 1: Pensamento Exponencial e LLMs

### 1.1 Pensamento Exponencial e LLMs

Exemplo de escolha entre recompensas:

- Opção A: receber R$ 1.000.000,00 imediatamente.
- Opção B: receber R$ 0,01, dobrando o valor todos os dias durante 30 dias.

A segunda alternativa termina com valor superior a R$ 10 milhões. O exemplo ilustra como o crescimento exponencial é contraintuitivo.

### O papel de Moore e o salto das LLMs

A Lei de Moore é apresentada como a previsão de que a capacidade de processamento dos chips dobraria a cada 18 meses, enquanto o preço cairia pela metade. O texto contrasta esse ritmo com a evolução das LLMs, descrita no material como uma duplicação de capacidade aproximadamente a cada quatro meses.

### Caso de uso: escritório de advocacia tradicional

O escritório Santos & Associados, com 15 anos de atuação em direito empresarial, usava pesquisa jurisprudencial manual, modelos antigos de peças e análise documental por estagiários. Após implementar IA gradualmente, o material relata:

- produtividade da equipe 70% maior;
- tempo de resposta reduzido de 3 dias para menos de 24 horas;
- capacidade de atendimento dobrada sem novas contratações;
- aumento significativo na precisão da análise documental.

### Exercício prático

1. Identifique três tarefas repetitivas realizadas semanalmente.
2. Estime o tempo médio gasto em cada tarefa.
3. Pesquise como LLMs poderiam automatizar ou apoiar essas tarefas.
4. Calcule a economia de tempo em um mês, três meses e um ano.
5. Reflita sobre como reinvestir o tempo economizado em atividades de maior valor.

Sugestões: pesquisa jurisprudencial, análise inicial de contratos, redação de minutas e triagem de e-mails.

### 1.2 Entendendo as LLMs

As LLMs são apresentadas como sistemas de completação de texto baseados em padrões aprendidos durante o treinamento. O material relaciona seu funcionamento ao artigo “Attention is All You Need”, aos Transformers e à previsão probabilística do próximo token.

**Tokens:** podem representar uma palavra, parte de uma palavra, caractere ou pontuação. O modelo gera texto token por token, usando o contexto anterior.

**Atenção seletiva:** identifica as partes mais relevantes do contexto.

**Loop de tokens:** cada novo token é previsto com base no histórico anterior.

**Janela de contexto:** limite de tokens que o modelo consegue considerar em uma interação.

**Limite de tokens de saída:** limite da quantidade de tokens que pode ser gerada em uma resposta.

### Caso de uso: a petição que desapareceu

A Dra. Marina Silva trabalhou com mais de 15 anos de documentação fiscal. Depois de dezenas de interações e mais de 145 mil tokens, ultrapassou o limite de 128 mil tokens do modelo utilizado. As respostas começaram a ignorar informações iniciais. A estratégia adotada depois foi dividir o trabalho em sessões temáticas, controlar a contagem de tokens e salvar conclusões importantes.

### Exercício: calculando e gerenciando tokens

1. Escolha um documento jurídico usado com frequência.
2. Conte os tokens usando `https://platform.openai.com/tokenizer`.
3. Se passar de 30 mil tokens, divida o documento em seções lógicas.
4. Crie uma estratégia de interação considerando a janela de contexto.
5. Liste pelo menos três técnicas para evitar perda de contexto.

### 1.3 Limitações das LLMs

- tamanho de saída: capacidade limitada de gerar grandes volumes de texto de uma só vez;
- janela de contexto: quantidade de informação considerada durante a interação.

Tabela transcrita do material:

| LLM | Janela de contexto | Tokens de entrada | Tokens de saída |
|---|---:|---:|---:|
| GPT-4 Turbo | 128k | 128k | ~4k* |
| Gemini-2.0 Flash-Thinking | 2M | 1M | 4k |
| DeepSeek-R1 | 256k | 256k | ~8k* |
| Llama-3.3-70B-Instruct | 128k | 128k | ~4k* |
| Claude 3 Opus | 200k | 200k | ~4k* |
| Qwen2.5-72B-Instruct | 131k | 131k | ~4k* |
| Mistral-Large-2407 | 128k | 128k | ~4k* |
| Gemini-1.5 Pro | 2M | 2M | 8k |

`* Valores aproximados.`

## 4. Capítulo 2: Engenharia de Prompt

Elementos identificados no diagrama:

- Persona
- Base de Conhecimento
- Mensagem do Sistema
- Restrições
- Processo
- Objetivo
- Prompt
- LLM

### Estrutura de um prompt eficaz

1. **Persona:** atuar como advogado especialista em direito tributário.
2. **Missão:** analisar a viabilidade de compensação de PIS/COFINS sobre insumos.
3. **Base de conteúdo:** Lei 10.637/2002, Lei 10.833/2003, IN RFB 2.055/2021 e precedentes do STJ no Tema 779.
4. **Processo:** analisar requisitos legais, documentação necessária e riscos.
5. **Restrições:** limitar-se aos aspectos federais e indicar entendimentos divergentes.

O material também menciona variáveis, loops e métodos de autoavaliação como abordagens para aumentar precisão e consistência.

A imagem seguinte inicia a seção “212 Técnicas de Prompting Atualizadas”, mas o restante da lista não está visível no material recebido.

## 5. Material adicional

Uma imagem contém exercícios de matemática, aparentemente material de apoio ou exemplo:

1. Explique por que as afirmações são verdadeiras ou falsas:
   - um número divisível por 6 é divisível por 3;
   - se um número é divisível por 2 e por 3, então é divisível por 6.
2. Para a sequência 3, 7, 11, 15, responda:
   - próximo termo;
   - diferença comum;
   - termo geral ou termo de ordem `n`.

Essa imagem foi preservada como fonte, mas não foi incorporada como conteúdo principal do curso por não estar claramente relacionada à advocacia ou à formação presencial de IA.

## Observações de qualidade

- Alguns títulos e logotipos aparecem rotacionados ou parcialmente cortados.
- Há trechos que terminam fora da área fotografada.
- O conteúdo sobre limites e capacidades de modelos deve ser revisado antes de virar material didático, porque valores de contexto e saída mudam por modelo e versão.
- Os números do caso Santos & Associados são exemplos narrativos da fonte, não resultados verificados.
