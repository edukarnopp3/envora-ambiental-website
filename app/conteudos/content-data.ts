import { practicalArticles } from "./practical-content";
import { editorialArticles } from "./editorial-articles";
import { carbonArticles } from "./carbon-content";

export type ContentArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  serviceSlug?: string;
  lead: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
    table?: { headers: string[]; rows: string[][] };
  }>;
  conclusion?: string;
  faq?: Array<{ question: string; answer: string }>;
  relatedLinks?: Array<{ label: string; href: string }>;
  sources: Array<{ label: string; url: string }>;
};

const baseContentArticles: ContentArticle[] = [
  ...carbonArticles,
  ...practicalArticles,
  {
    slug: "lap-lai-lao-entenda-as-etapas",
    category: "Licenciamento ambiental",
    title: "LAP, LAI e LAO: o que muda em cada etapa?",
    description: "Veja o que LAP, LAI e LAO autorizam, como se relacionam e o que conferir antes de iniciar a operação em Joinville.",
    publishedAt: "2026-09-04",
    updatedAt: "2026-10-23",
    readingTime: "3 min",
    serviceSlug: "lap-lai-lao",
    lead: "No licenciamento ambiental em fases, a LAP avalia a viabilidade, a LAI autoriza a instalação e a LAO autoriza a operação. Uma etapa não deve ser usada como se autorizasse a seguinte. A modalidade e o procedimento dependem do enquadramento da atividade e do órgão competente.",
    sections: [
      {
        title: "O que cada licença autoriza?",
        paragraphs: ["A carta de serviço de Joinville diferencia planejamento, instalação e operação e prevê a AuA por ato único para os casos aplicáveis. No procedimento em fases, as funções são estas:"],
        table: {
          headers: ["Etapa", "Papel da licença", "O que vem a seguir"],
          rows: [
            ["LAP — planejamento", "Avaliar localização e concepção, viabilidade ambiental e condições do projeto.", "Preparar os projetos e as medidas para a etapa de instalação."],
            ["LAI — instalação", "Autorizar a implantação conforme os projetos e controles aprovados.", "Implantar e comprovar o atendimento das exigências aplicáveis."],
            ["LAO — operação", "Autorizar o funcionamento após a verificação das exigências pertinentes.", "Cumprir condicionantes, acompanhar os controles e planejar a renovação."],
          ],
        },
      },
      {
        title: "O que preparar para obter a LAO em Joinville?",
        paragraphs: [
          "Para os processos abrangidos pela IN SAMA nº 009/2026, o artigo 51 relaciona os documentos da LAO. Entre eles estão o relatório de atendimento das exigências anteriores, o registro fotográfico dos controles implantados, os relatórios de testes operacionais e as responsabilidades técnicas correspondentes.",
          "A lista final depende da atividade e das instalações. A carta municipal indica quando se aplica essa instrução e quando devem ser seguidas normas específicas do IMA. Reunir os documentos exige comparar o projeto aprovado com o que foi efetivamente instalado.",
        ],
      },
      {
        title: "A empresa já opera ou pretende ampliar?",
        paragraphs: [
          "Apresente o histórico das licenças e informe as mudanças realizadas ou planejadas. Operação existente, renovação, licença vencida e ampliação são situações diferentes; não se deve escolher uma etapa apenas pelo nome do documento desejado.",
          "A Envora analisa esse cenário e define as peças e etapas técnicas antes da contratação. O cliente fornece os dados da operação; taxas e terceiros são discriminados na proposta. Decisão e emissão cabem ao órgão ambiental.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Obtenção de LAP, LAI e LAO pela Envora", href: "/servicos/lap-lai-lao" },
      { label: "Licenciamento ambiental em Joinville", href: "/servicos/licenciamento-ambiental" },
      { label: "Como renovar a LAO", href: "/conteudos/como-renovar-lao-industria" },
      { label: "LAO ou AuA: qual se aplica?", href: "/conteudos/industria-precisa-lao-ou-aua" },
      { label: "Como acompanhar as condicionantes", href: "/conteudos/o-que-acompanhar-depois-licenca-ambiental" },
    ],
    sources: [
      { label: "Prefeitura de Joinville — licenciamento industrial e atividades diversas", url: "https://www.joinville.sc.gov.br/servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/" },
      { label: "IN SAMA nº 009/2026 — artigo 51: documentos para a LAO", url: "https://sei.joinville.sc.gov.br/sei/publicacoes/controlador_publicacoes.php?acao=publicacao_visualizar&id_documento=10000033646817&id_orgao_publicacao=0" },
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

const articlesBySlug = new Map<string, ContentArticle>();
for (const article of [...baseContentArticles, ...editorialArticles]) articlesBySlug.set(article.slug, article);

export const contentArticles: ContentArticle[] = [...articlesBySlug.values()];

export const contentArticleBySlug = new Map(contentArticles.map((article) => [article.slug, article]));
