import type { ServicePageData } from "./service-data";

export type ContactServicePage = ServicePageData & {
  contact: {
    message: string;
    action: string;
    image: string;
    imageAlt: string;
    imagePosition?: string;
    imageCredit?: { author: string; source: string; license: string; licenseUrl: string };
    situations: string[];
    initialInformation: string[];
  };
};

export const contactServicePages: ContactServicePage[] = [
  {
    slug: "responsabilidade-tecnica-ambiental",
    shortTitle: "Responsabilidade Técnica Ambiental (RT)",
    title: "Responsabilidade Técnica Ambiental (RT).",
    eyebrow: "Atuação técnica com escopo definido",
    description: "Avaliação de responsabilidade técnica ambiental em Joinville. Explique a atividade à Envora e defina o escopo de atendimento pelo WhatsApp.",
    intro: "Precisa definir a responsabilidade técnica ambiental da sua atividade? A Envora avalia a demanda e confirma a atuação possível antes da contratação.",
    highlights: ["Demanda avaliada", "Responsabilidades definidas", "Atuação contratada"],
    applies: "Para avaliar a necessidade de responsável técnico, acompanhamento ambiental ou atendimento a uma exigência relacionada à atividade.",
    process: [
      "Você informa a atividade e a necessidade.",
      "A Envora confirma a possibilidade de atendimento e define entregas e responsabilidades na proposta.",
      "Após a contratação, a Envora conduz o trabalho técnico previsto no escopo.",
    ],
    deliverable: "Atuação técnica com entregas, responsabilidades e limites definidos na contratação.",
    boundary: "A assunção de RT depende da atividade e da compatibilidade com as atribuições e a habilitação do profissional. A proposta define a atuação e o registro de responsabilidade técnica aplicável.",
    sources: [{ label: "CREA-SC — Anotação de Responsabilidade Técnica (ART)", url: "https://portal.crea-sc.org.br/profissional/art/anotacao-de-responsabilidade-tecnica-art/" }],
    contact: {
      message: "Olá! Preciso conversar sobre responsabilidade técnica ambiental. Minha empresa fica em [cidade] e atua com [atividade].",
      action: "Conversar sobre RT no WhatsApp",
      image: "/responsabilidade-tecnica-ilustrativa.webp",
      imageAlt: "Imagem ilustrativa de uma profissional avaliando uma instalação de tratamento em uma operação industrial",
      situations: ["Necessidade de responsável técnico", "Acompanhamento da rotina ambiental", "Exigência ou documento a avaliar"],
      initialInformation: ["Cidade e atividade da empresa", "O que motivou a necessidade de RT", "Documento ou exigência recebida, se houver"],
    },
  },
  {
    slug: "outorga-e-regularizacao-de-uso-da-agua",
    shortTitle: "Outorga e regularização de poços/uso da água",
    title: "Outorga e regularização de poços e uso da água.",
    eyebrow: "O procedimento começa pela avaliação do uso",
    description: "Avaliação de outorga e regularização de poços e uso da água em Joinville. A Envora analisa o caso e define as etapas técnicas antes da contratação.",
    intro: "Tem um poço, pretende captar água ou precisa conferir a documentação do imóvel? A Envora avalia a situação e define o trabalho técnico para o seu caso.",
    highlights: ["Uso identificado", "Procedimento avaliado", "Escopo definido"],
    applies: "Para avaliar poços existentes ou planejados, captações e outras situações de uso da água e sua documentação.",
    process: [
      "Você informa onde fica o imóvel e como a água é ou será utilizada.",
      "A Envora avalia o procedimento e confirma as etapas que pode atender na proposta.",
      "Após a contratação, a Envora conduz a documentação e as etapas técnicas incluídas no escopo.",
    ],
    deliverable: "Avaliação da situação e condução das etapas técnicas de regularização previstas na contratação.",
    boundary: "O procedimento depende da localização, da origem da água e das características do uso. Cadastro, autorização, dispensa ou outorga são avaliados caso a caso. A decisão cabe ao órgão competente, sem garantia de aprovação.",
    sources: [{ label: "Recursos Hídricos de SC — Procedimentos de outorga e SIOUT-SC", url: "https://www.aguas.sc.gov.br/outorga-solicite-sua-outorga-siout" }],
    contact: {
      message: "Olá! Preciso de ajuda com outorga ou regularização de uso da água. O imóvel fica em [cidade] e a situação é [poço/captação/outro].",
      action: "Conversar sobre outorga no WhatsApp",
      image: "/outorga-captacao-real.webp",
      imageAlt: "Estrutura de captação da estação de tratamento de água Ullrich junto ao Lago Austin, nos Estados Unidos",
      imagePosition: "53% center",
      imageCredit: {
        author: "Larry D. Moore",
        source: "https://commons.wikimedia.org/wiki/File:Ullrich_Water_Treatment_Plant_Intake_Lake_Austin_2020.jpg",
        license: "CC BY 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
      },
      situations: ["Poço existente ou planejado", "Captação ou outro uso da água", "Documentação a conferir ou regularizar"],
      initialInformation: ["Cidade e localização do imóvel", "Tipo de uso, finalidade e situação atual", "Cadastros ou documentos existentes, se houver"],
    },
  },
];

export const contactServicePageBySlug = new Map(contactServicePages.map((page) => [page.slug, page]));
