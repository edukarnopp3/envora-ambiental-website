export type ServicePageData = {
  slug: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  highlights: string[];
  applies: string;
  process: string[];
  deliverable: string;
  boundary: string;
};

export const servicePages: ServicePageData[] = [
  {
    slug: "auto-de-infracao-ambiental",
    shortTitle: "Auto de infração ambiental",
    title: "Recebeu um auto de infração ambiental?",
    eyebrow: "Análise técnica da ocorrência e dos documentos",
    description: "Análise técnica de auto de infração ambiental em Joinville, com conferência do fato apontado, prazo e documentos ambientais relacionados.",
    intro: "Antes de responder, é preciso separar o fato técnico, o prazo indicado e o que pertence à defesa jurídica.",
    highlights: ["Documento conferido", "Evidências relacionadas", "Limite técnico definido"],
    applies: "Quando um órgão ambiental registra uma possível irregularidade e estabelece prazo para defesa, manifestação ou correção. O documento deve ser analisado junto das licenças, autorizações, registros operacionais e evidências do fato.",
    process: [
      "Conferimos órgão emissor, fato descrito, fundamento indicado, prazo e medidas exigidas.",
      "Relacionamos o auto ao histórico do processo, às licenças existentes e aos comprovantes disponíveis.",
      "Organizamos a manifestação técnica ou os subsídios ambientais que serão usados na resposta.",
    ],
    deliverable: "Diagnóstico técnico do auto, relação de evidências e definição objetiva do que precisa ser respondido ou regularizado.",
    boundary: "Defesa, recurso e tese jurídica exigem advogado. A Envora responde pela parte ambiental contratada.",
  },
  {
    slug: "licenciamento-ambiental",
    shortTitle: "Licenciamento ambiental",
    title: "Licenciamento ambiental começa pelo enquadramento correto.",
    eyebrow: "Atividade, porte, localização e órgão competente",
    description: "Consultoria para licenciamento ambiental em Joinville, com enquadramento da operação, documentação técnica, protocolo e acompanhamento.",
    intro: "A lista de documentos só faz sentido depois de confirmar qual atividade ocorre no local e qual procedimento se aplica.",
    highlights: ["Atividade real", "Modalidade aplicável", "Documentação técnica"],
    applies: "Para implantação, operação, ampliação, alteração de processo ou mudança de endereço de atividade potencialmente sujeita a controle ambiental. O CNAE ajuda na triagem, mas não substitui a descrição da operação.",
    process: [
      "Levantamos processo produtivo, capacidade, áreas, equipamentos, resíduos, efluentes e localização.",
      "Conferimos o enquadramento e identificamos a modalidade e o órgão competente para o caso.",
      "Preparamos os documentos técnicos contratados, protocolamos e acompanhamos as exigências do processo.",
    ],
    deliverable: "Rota de licenciamento definida e processo organizado com as peças técnicas previstas no escopo contratado.",
    boundary: "A emissão da licença e o prazo de análise dependem do órgão ambiental e não podem ser garantidos pela consultoria.",
  },
  {
    slug: "renovacao-e-regularizacao",
    shortTitle: "Renovação e regularização",
    title: "Renovação e regularização sem repetir erros do processo anterior.",
    eyebrow: "Licença, condicionantes e alterações da operação",
    description: "Renovação de licença e regularização ambiental em Joinville, com revisão de prazos, condicionantes e mudanças ocorridas na empresa.",
    intro: "Renovar não é apenas reapresentar a licença: a situação atual precisa ser comparada com o que foi autorizado.",
    highlights: ["Prazo verificado", "Condicionantes conferidas", "Operação atualizada"],
    applies: "Quando a licença está próxima do vencimento, quando a empresa opera com documentação desatualizada ou quando houve mudança de atividade, capacidade, equipamento ou estrutura desde a última autorização.",
    process: [
      "Revisamos a licença, o processo anterior, os prazos e as condicionantes aplicáveis.",
      "Comparamos o que foi autorizado com a operação atual e registramos as alterações relevantes.",
      "Definimos a rota de renovação ou regularização e preparamos as entregas técnicas contratadas.",
    ],
    deliverable: "Mapa de pendências e processo de renovação ou regularização coerente com a situação atual da empresa.",
    boundary: "Mudanças relevantes podem exigir procedimento diferente de uma renovação simples; isso é definido após a conferência documental.",
  },
  {
    slug: "danc-e-cca",
    shortTitle: "DANC e CCA",
    title: "DANC ou CCA: o documento depende do enquadramento.",
    eyebrow: "Comprovação ambiental para atividades específicas",
    description: "Análise técnica para DANC e CCA em Joinville, considerando atividade efetiva, porte, localização e critérios do órgão ambiental.",
    intro: "DANC e CCA não são nomes diferentes para o mesmo documento. Cada uma responde a uma situação de enquadramento.",
    highlights: ["Atividade conferida", "Porte calculado", "Documento compatível"],
    applies: "Quando a empresa precisa demonstrar sua situação ambiental, mas há dúvida se a atividade está sujeita ao licenciamento ou se opera abaixo do porte previsto. A análise considera a atividade efetiva, não apenas o CNAE cadastrado.",
    process: [
      "Descrevemos a operação e conferimos localização, capacidade, área e equipamentos relevantes.",
      "Verificamos se a atividade consta da listagem aplicável e se alcança o porte sujeito a licenciamento.",
      "Se não constar, avaliamos a DANC; se constar abaixo do porte, avaliamos a CCA e suas condições.",
    ],
    deliverable: "Conclusão de enquadramento e preparação do requerimento compatível com a situação identificada.",
    boundary: "A conclusão depende dos dados reais da operação e dos critérios vigentes do órgão competente.",
  },
  {
    slug: "pgrs",
    shortTitle: "PGRS",
    title: "PGRS baseado nos resíduos que a empresa realmente gera.",
    eyebrow: "Plano de Gerenciamento de Resíduos Sólidos",
    description: "Elaboração e revisão de PGRS em Joinville, com caracterização dos resíduos, fluxos internos, responsáveis e destinação.",
    intro: "Um plano útil precisa corresponder à rotina da empresa e aos documentos que comprovam a destinação.",
    highlights: ["Fontes geradoras", "Fluxos de manejo", "Destinação comprovável"],
    applies: "Quando a atividade precisa elaborar ou atualizar o plano, quando surgiram novos resíduos ou quando o documento existente não representa mais a operação. A análise alcança geração, segregação, armazenamento, coleta e destinação.",
    process: [
      "Identificamos setores geradores, tipos de resíduos, volumes disponíveis e formas atuais de manejo.",
      "Conferimos acondicionamento, armazenamento, transportadores, receptores, MTRs e comprovantes.",
      "Estruturamos procedimentos, responsabilidades e registros que a empresa deverá manter.",
    ],
    deliverable: "PGRS compatível com a operação informada, acompanhado das rotinas e evidências necessárias para sua manutenção.",
    boundary: "Treinamento, implantação e acompanhamento periódico são etapas separadas quando não constarem no escopo.",
  },
  {
    slug: "pgrcc",
    shortTitle: "PGRCC",
    title: "PGRCC para controlar os resíduos ao longo da obra.",
    eyebrow: "Resíduos da Construção Civil",
    description: "Elaboração de PGRCC em Joinville, com estimativa de geração, segregação, armazenamento, transporte e destinação dos resíduos da obra.",
    intro: "O plano define o fluxo antes da geração e estabelece quais registros deverão comprovar a destinação durante a execução.",
    highlights: ["Resíduos estimados", "Manejo no canteiro", "Destino documentado"],
    applies: "Para obras que precisam apresentar um plano de gerenciamento ou organizar previamente os resíduos da construção. Projeto, etapa da obra, métodos construtivos e destinos previstos influenciam o conteúdo.",
    process: [
      "Caracterizamos a obra e estimamos as classes de resíduos esperadas em cada etapa.",
      "Definimos segregação, acondicionamento, armazenamento temporário, coleta e transporte.",
      "Relacionamos transportadores, destinos e comprovantes que deverão ser mantidos durante a obra.",
    ],
    deliverable: "PGRCC com fluxos de gerenciamento e controle documental definidos para a obra informada.",
    boundary: "A execução diária do plano e a guarda dos comprovantes são responsabilidades da obra, salvo contratação específica de acompanhamento.",
  },
];

export const servicePageBySlug = new Map(servicePages.map((service) => [service.slug, service]));
