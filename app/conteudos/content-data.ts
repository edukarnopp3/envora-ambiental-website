export type ContentArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  lead: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  sources: Array<{ label: string; url: string }>;
};

export const contentArticles: ContentArticle[] = [
  {
    slug: "lap-lai-lao-entenda-as-etapas",
    category: "Licenciamento ambiental",
    title: "LAP, LAI e LAO: o que muda em cada etapa?",
    description: "Entenda, de forma objetiva, as funções da LAP, da LAI e da LAO no licenciamento ambiental em Santa Catarina.",
    publishedAt: "2026-09-04",
    readingTime: "3 min",
    lead: "As três licenças não são documentos equivalentes. Cada uma corresponde a uma fase do empreendimento e autoriza um avanço diferente.",
    sections: [
      {
        title: "A sequência em poucas palavras",
        paragraphs: [
          "A Licença Ambiental Prévia (LAP) é concedida na fase de planejamento. Ela avalia a localização e a concepção do empreendimento, atesta a viabilidade ambiental e estabelece condições para as etapas seguintes.",
          "A Licença Ambiental de Instalação (LAI) autoriza a implantação conforme os planos, programas, projetos e medidas de controle aprovados. Já a Licença Ambiental de Operação (LAO) autoriza o início da atividade depois da verificação das exigências aplicáveis.",
        ],
      },
      {
        title: "O ponto que evita retrabalho",
        paragraphs: [
          "Antes de reunir documentos, é necessário confirmar a atividade real, o porte, a localização, a fase atual e o órgão competente. A modalidade correta depende desse enquadramento.",
          "A Envora realiza essa leitura inicial, organiza a documentação técnica, protocola e acompanha o processo. A emissão e o prazo de análise permanecem sob decisão do órgão ambiental.",
        ],
      },
    ],
    sources: [
      { label: "Prefeitura de Joinville — Licença ambiental para atividades industriais e diversas", url: "https://www.joinville.sc.gov.br/servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/" },
      { label: "IMA/SC — Instruções Normativas", url: "https://in.ima.sc.gov.br/" },
    ],
  },
  {
    slug: "licenca-ambiental-ou-autorizacao-ambiental",
    category: "Enquadramento",
    title: "Licença ambiental ou AuA: por onde começar?",
    description: "Veja por que o enquadramento da atividade vem antes da escolha entre licenciamento ambiental e Autorização Ambiental.",
    publishedAt: "2026-09-04",
    readingTime: "3 min",
    lead: "O nome do estabelecimento ou o CNAE isolado não definem, sozinhos, qual procedimento ambiental deve ser solicitado.",
    sections: [
      {
        title: "Primeiro, entender a operação",
        paragraphs: [
          "O enquadramento considera o que efetivamente acontece no local, além do porte, da capacidade, da localização e dos potenciais impactos da atividade.",
          "Em Joinville, o controle pode ocorrer pelas fases de licença prévia, de instalação e de operação ou, quando a regulamentação permitir, por ato único de Autorização Ambiental (AuA).",
        ],
      },
      {
        title: "O procedimento correto vem depois",
        paragraphs: [
          "Começar por uma lista genérica de documentos pode levar a estudos desnecessários, falta de informações ou protocolo na modalidade errada. A análise técnica inicial serve para definir a rota antes de montar o processo.",
          "Na Envora, o empreendedor apresenta o cenário e os dados disponíveis. A partir disso, estruturamos a demanda, indicamos o procedimento aplicável e conduzimos as etapas técnicas contratadas.",
        ],
      },
    ],
    sources: [
      { label: "Prefeitura de Joinville — Serviços de licenciamento ambiental", url: "https://www.joinville.sc.gov.br/assunto/meio-ambiente/licenciamento/" },
      { label: "IMA/SC — Modalidades de licenciamento", url: "https://in.ima.sc.gov.br/" },
    ],
  },
  {
    slug: "antes-de-instalar-ampliar-ou-operar",
    category: "Prevenção de risco",
    title: "Antes de instalar, ampliar ou operar: o que conferir?",
    description: "Uma verificação ambiental antes da decisão reduz o risco de começar uma implantação, ampliação ou operação sem a etapa adequada.",
    publishedAt: "2026-09-04",
    readingTime: "3 min",
    lead: "Contrato assinado, equipamento comprado ou obra iniciada não substituem a verificação ambiental da atividade.",
    sections: [
      {
        title: "Quatro perguntas objetivas",
        paragraphs: [
          "O que será realizado no local? Qual será a capacidade? A implantação exige obra ou intervenção? Já existe licença, autorização ou obrigação ambiental vinculada ao endereço?",
          "Essas respostas ajudam a identificar se há necessidade de licenciamento, autorização, atualização ou outro procedimento antes do próximo passo operacional.",
        ],
      },
      {
        title: "Decidir antes custa menos do que corrigir depois",
        paragraphs: [
          "A licença ambiental estabelece condições, restrições e medidas de controle para as fases do empreendimento. Por isso, a consulta deve acontecer antes da instalação, ampliação ou mudança relevante da operação.",
          "A Envora organiza essa verificação e transforma o cenário em uma rota técnica clara. Quando houver necessidade de processo ambiental, cuidamos da documentação, do protocolo e do acompanhamento dentro do escopo contratado.",
        ],
      },
    ],
    sources: [
      { label: "Prefeitura de Joinville — Licenciamento ambiental", url: "https://www.joinville.sc.gov.br/assunto/meio-ambiente/licenciamento/" },
      { label: "Prefeitura de Joinville — Licença para atividades industriais e diversas", url: "https://www.joinville.sc.gov.br/servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/" },
    ],
  },
];

export const contentArticleBySlug = new Map(contentArticles.map((article) => [article.slug, article]));
