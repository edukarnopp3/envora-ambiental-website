export type ServiceSource = { label: string; url: string };

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
  sources: ServiceSource[];
};

const pmj = (label: string, path: string): ServiceSource => ({ label: `PMJ — ${label}`, url: `https://www.joinville.sc.gov.br/${path}` });
const ima = (label: string, url: string): ServiceSource => ({ label: `IMA/SC — ${label}`, url });

export const servicePages: ServicePageData[] = [
  {
    slug: "auto-de-infracao-ambiental",
    shortTitle: "Auto de infração ambiental",
    title: "Recebeu um auto de infração ambiental?",
    eyebrow: "Análise técnica da ocorrência e dos documentos",
    description: "Análise técnica de auto de infração ambiental em Joinville, com conferência do fato apontado, prazo e documentos ambientais relacionados.",
    intro: "Antes de responder, é preciso separar o fato técnico, o prazo indicado e o que pertence à defesa jurídica.",
    highlights: ["Documento conferido", "Evidências relacionadas", "Limite técnico definido"],
    applies: "O auto registra uma infração apontada pela fiscalização. A manifestação deve considerar o documento recebido, o processo administrativo, os prazos informados e as evidências ambientais relacionadas ao fato.",
    process: [
      "Conferimos órgão emissor, fato descrito, fundamento indicado, prazo e medidas exigidas.",
      "Relacionamos o auto ao histórico do processo, às licenças existentes e aos comprovantes disponíveis.",
      "Organizamos a manifestação técnica ou os subsídios ambientais que serão usados na resposta.",
    ],
    deliverable: "Diagnóstico técnico do auto, relação de evidências e definição objetiva do que precisa ser respondido ou regularizado.",
    boundary: "Defesa, recurso e tese jurídica exigem advogado. A Envora responde pela parte ambiental contratada.",
    sources: [
      pmj("Apresentar defesa de infrações expedidas pela SAMA", "servicos/apresentar-defesa-de-infracoes-expedidas-pela-sama-auto-de-infracao-ambiental-auto-de-multa-e-auto-de-infracao/"),
      pmj("Consultar Processos Administrativos Ambientais", "servicos/consultar-processos-administrativos-ambientais-paas/"),
    ],
  },
  {
    slug: "diagnostico-e-enquadramento-ambiental",
    shortTitle: "Diagnóstico e enquadramento ambiental",
    title: "A obrigação ambiental depende da operação real.",
    eyebrow: "Atividade, porte, localização e situação documental",
    description: "Diagnóstico e enquadramento ambiental em Joinville para identificar a rota aplicável à atividade, ao porte e à localização da empresa.",
    intro: "CNAE é um ponto de partida. Processo produtivo, capacidade, equipamentos, resíduos, efluentes e localização completam a análise.",
    highlights: ["Atividade descrita", "Porte verificado", "Rota provável definida"],
    applies: "Quando a empresa ainda não sabe se precisa de licença, autorização, CCA, DANC ou outra providência ambiental. As listas oficiais classificam atividades e portes; a conclusão depende dos dados efetivos da operação.",
    process: [
      "Levantamos atividade, processo, capacidade, área, equipamentos e aspectos ambientais relevantes.",
      "Conferimos localização, histórico documental e listagens de atividades sujeitas ao licenciamento.",
      "Apontamos a rota provável e os dados que ainda precisam ser confirmados junto ao órgão competente.",
    ],
    deliverable: "Diagnóstico inicial com enquadramento provável, lacunas documentais e próximos passos organizados.",
    boundary: "O diagnóstico não substitui a decisão formal do órgão ambiental e pode exigir documentos ou estudos adicionais.",
    sources: [
      pmj("Serviços de licenciamento ambiental", "assunto/meio-ambiente/licenciamento/"),
      pmj("Licença para atividades industriais e diversas", "servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/"),
    ],
  },
  {
    slug: "danc",
    shortTitle: "DANC",
    title: "DANC comprova que a atividade não consta da listagem.",
    eyebrow: "Declaração de Atividade Não Constante",
    description: "Consultoria para requerimento de DANC em Joinville, com conferência da atividade e preparação da documentação do processo.",
    intro: "A DANC é emitida quando a atividade informada não integra a listagem de atividades sujeitas ao licenciamento ambiental.",
    highlights: ["Atividade conferida", "Dados organizados", "Requerimento preparado"],
    applies: "Segundo a Prefeitura de Joinville, a DANC declara que determinada atividade econômica não consta na listagem de atividades potencialmente causadoras de degradação ambiental. O documento também é conhecido como dispensa de licenciamento ambiental e seu requerimento não é obrigatório para o exercício da atividade.",
    process: [
      "Descrevemos a atividade efetivamente realizada, além da localização e da estrutura da operação.",
      "Conferimos a atividade nas listagens aplicáveis e reunimos os documentos exigidos para o requerimento.",
      "Protocolamos o pedido contratado e acompanhamos eventuais solicitações de complementação.",
    ],
    deliverable: "Requerimento de DANC coerente com as informações reais da atividade e acompanhado dos documentos previstos no escopo.",
    boundary: "A declaração não dispensa outras obrigações ambientais, urbanísticas, sanitárias ou profissionais aplicáveis ao estabelecimento.",
    sources: [pmj("Requerer Declaração de Atividade Não Constante", "servicos/requerer-declaracao-de-atividade-nao-constante-danc/")],
  },
  {
    slug: "cca",
    shortTitle: "CCA",
    title: "CCA certifica atividade abaixo do porte de licenciamento.",
    eyebrow: "Certidão de Conformidade Ambiental",
    description: "Consultoria para requerimento de CCA em Joinville, com verificação do porte da atividade e organização da documentação.",
    intro: "A CCA se aplica quando a atividade consta da listagem, mas seu porte permanece abaixo dos limites fixados para o licenciamento.",
    highlights: ["Atividade listada", "Porte calculado", "Processo organizado"],
    applies: "A Prefeitura de Joinville define a CCA como o documento que certifica que o porte de uma atividade está abaixo dos limites de licenciamento ambiental. O requerimento é facultativo, mas pode ser solicitado para demonstrar a situação ambiental da empresa.",
    process: [
      "Confirmamos a atividade e identificamos o parâmetro de porte usado pela listagem aplicável.",
      "Calculamos ou documentamos o porte real e reunimos as informações exigidas para o requerimento.",
      "Protocolamos o pedido contratado e acompanhamos a análise e possíveis complementações.",
    ],
    deliverable: "Requerimento de CCA fundamentado no porte informado e acompanhado da documentação prevista para o processo.",
    boundary: "Se a atividade alcançar o porte mínimo ou apresentar condição específica, poderá ser necessário outro procedimento ambiental.",
    sources: [pmj("Requerer Certidão de Conformidade Ambiental", "servicos/requerer-certidao-de-conformidade-ambiental-cca/")],
  },
  {
    slug: "licenciamento-ambiental",
    shortTitle: "Licenciamento ambiental",
    title: "Licenciamento ambiental começa pelo enquadramento correto.",
    eyebrow: "Atividade, porte, localização e órgão competente",
    description: "Consultoria para licenciamento ambiental em Joinville, com enquadramento da operação, documentação técnica, protocolo e acompanhamento.",
    intro: "A lista de documentos só faz sentido depois de confirmar qual atividade ocorre no local e qual procedimento se aplica.",
    highlights: ["Atividade real", "Modalidade aplicável", "Documentação técnica"],
    applies: "A licença ambiental estabelece condições, restrições e medidas de controle para as fases de projeto, instalação e operação. Conforme o caso, o procedimento pode envolver LAP, LAI, LAO ou Autorização Ambiental.",
    process: [
      "Levantamos processo produtivo, capacidade, áreas, equipamentos, resíduos, efluentes e localização.",
      "Conferimos o enquadramento e identificamos a modalidade e o órgão competente para o caso.",
      "Preparamos os documentos técnicos contratados, protocolamos e acompanhamos as exigências do processo.",
    ],
    deliverable: "Rota de licenciamento definida e processo organizado com as peças técnicas previstas no escopo contratado.",
    boundary: "A emissão da licença e o prazo de análise dependem do órgão ambiental e não podem ser garantidos pela consultoria.",
    sources: [
      pmj("Licença para atividades industriais e diversas", "servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/"),
      pmj("Serviços de licenciamento ambiental", "assunto/meio-ambiente/licenciamento/"),
    ],
  },
  {
    slug: "lap-lai-lao",
    shortTitle: "Obtenção de LAP, LAI e LAO",
    title: "Cada etapa do empreendimento exige a licença correspondente.",
    eyebrow: "Licenças Prévia, de Instalação e de Operação",
    description: "Consultoria para obtenção de LAP, LAI e LAO em Joinville, com documentação técnica, protocolo e acompanhamento do processo ambiental.",
    intro: "A LAP avalia a viabilidade ambiental; a LAI autoriza a instalação conforme os projetos aprovados; e a LAO autoriza a operação após a verificação das condições aplicáveis.",
    highlights: ["Etapa identificada", "Documentação preparada", "Processo acompanhado"],
    applies: "A Prefeitura de Joinville informa que a licença ambiental estabelece condições, restrições e medidas de controle nas fases de projeto, instalação e operação. A sequência aplicável depende da atividade, do porte e das características do empreendimento.",
    process: [
      "Identificamos a fase do empreendimento, a atividade, o porte, a localização e o órgão competente.",
      "Organizamos os requerimentos, estudos, projetos e documentos técnicos previstos para a modalidade contratada.",
      "Protocolamos e acompanhamos o processo, respondendo às solicitações técnicas incluídas no escopo.",
    ],
    deliverable: "Processo de LAP, LAI ou LAO estruturado para a etapa correta, com documentação técnica e acompanhamento definidos no contrato.",
    boundary: "A concessão da licença e o prazo de análise são decisões do órgão ambiental. Uma fase não autoriza automaticamente a execução da fase seguinte.",
    sources: [
      pmj("Licença para atividades industriais e diversas", "servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/"),
      pmj("Serviços de licenciamento ambiental", "assunto/meio-ambiente/licenciamento/"),
    ],
  },
  {
    slug: "autorizacao-ambiental-aua",
    shortTitle: "Obtenção de Autorização Ambiental (AuA)",
    title: "A AuA reúne o controle ambiental em um único ato.",
    eyebrow: "Autorização Ambiental para atividades enquadradas",
    description: "Consultoria para obtenção de Autorização Ambiental (AuA) em Joinville, com enquadramento, documentação, protocolo e acompanhamento.",
    intro: "A AuA é utilizada em situações previstas pela regulamentação, quando o controle ambiental ocorre por ato único em vez da sequência LAP, LAI e LAO.",
    highlights: ["Modalidade confirmada", "Documentos organizados", "Protocolo acompanhado"],
    applies: "A carta de serviços da Prefeitura de Joinville prevê a Autorização Ambiental como ato único para atividades enquadradas nessa modalidade. A aplicação depende da listagem vigente, do porte e das condições específicas da operação.",
    process: [
      "Confirmamos atividade, porte, localização, características operacionais e possibilidade de enquadramento em AuA.",
      "Reunimos os documentos administrativos e preparamos as peças técnicas previstas para o caso.",
      "Protocolamos o requerimento contratado e acompanhamos exigências e complementações do processo.",
    ],
    deliverable: "Processo de Autorização Ambiental organizado, com enquadramento e documentação técnica compatíveis com a situação informada.",
    boundary: "A modalidade precisa ser confirmada antes do protocolo; a emissão da AuA depende da análise e da decisão do órgão ambiental.",
    sources: [
      pmj("Licença para atividades industriais e diversas", "servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/"),
      pmj("Serviços de licenciamento ambiental", "assunto/meio-ambiente/licenciamento/"),
    ],
  },
  {
    slug: "renovacao-e-regularizacao",
    shortTitle: "Renovação e regularização",
    title: "Renovar exige comparar a licença com a operação atual.",
    eyebrow: "Licença, condicionantes e alterações da operação",
    description: "Renovação de licença e regularização ambiental em Joinville, com revisão de prazos, condicionantes e mudanças ocorridas na empresa.",
    intro: "Renovar não é apenas reapresentar a licença: a situação atual precisa ser comparada com o que foi autorizado.",
    highlights: ["Prazo verificado", "Condicionantes conferidas", "Operação atualizada"],
    applies: "Quando a licença está próxima do vencimento, quando a documentação não representa mais a atividade ou quando ocorreram mudanças de capacidade, equipamentos, processo ou estrutura. Alterações relevantes podem exigir procedimento próprio.",
    process: [
      "Revisamos a licença, o processo anterior, os prazos e as condicionantes aplicáveis.",
      "Comparamos o que foi autorizado com a operação atual e registramos as alterações relevantes.",
      "Definimos a rota de renovação ou regularização e preparamos as entregas técnicas contratadas.",
    ],
    deliverable: "Mapa de pendências e processo de renovação ou regularização coerente com a situação atual da empresa.",
    boundary: "Mudanças relevantes podem exigir procedimento diferente de uma renovação simples; isso é definido após a conferência documental.",
    sources: [
      pmj("Licença para atividades industriais e diversas", "servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/"),
      pmj("Unidade de Análise Técnica de Licenciamento Ambiental", "institucional/sama/uat/"),
    ],
  },
  {
    slug: "gestao-de-condicionantes",
    shortTitle: "Gestão de condicionantes",
    title: "Condicionante precisa de prazo, responsável e evidência.",
    eyebrow: "Controle das obrigações da licença ambiental",
    description: "Gestão de condicionantes ambientais em Joinville, com organização de prazos, responsáveis, documentos e evidências de atendimento.",
    intro: "A licença estabelece condições e medidas de controle que precisam ser acompanhadas durante sua vigência.",
    highlights: ["Obrigações mapeadas", "Prazos controlados", "Evidências organizadas"],
    applies: "Para empresas que possuem licença ou autorização com obrigações periódicas, relatórios, monitoramentos ou comunicações ao órgão ambiental. O controle deve refletir exatamente o texto e a periodicidade de cada documento.",
    process: [
      "Extraímos as condicionantes, os prazos, as frequências e os documentos exigidos na licença.",
      "Definimos responsáveis internos e relacionamos as evidências necessárias para cada obrigação.",
      "Organizamos calendário, registros e entregas técnicas previstas no escopo de acompanhamento.",
    ],
    deliverable: "Matriz de condicionantes com responsáveis, prazos, status e evidências necessárias para demonstrar o atendimento.",
    boundary: "O acompanhamento não substitui análises laboratoriais, projetos ou serviços especializados que não estejam incluídos no contrato.",
    sources: [
      pmj("Licença para atividades industriais e diversas", "servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/"),
      pmj("Unidade de Análise Técnica de Licenciamento Ambiental", "institucional/sama/uat/"),
    ],
  },
  {
    slug: "pgrs",
    shortTitle: "PGRS",
    title: "PGRS baseado nos resíduos que a empresa realmente gera.",
    eyebrow: "Plano de Gerenciamento de Resíduos Sólidos",
    description: "Elaboração e revisão de PGRS em Joinville, com caracterização dos resíduos, fluxos internos, responsáveis e destinação.",
    intro: "Um plano útil precisa corresponder à rotina da empresa e aos documentos que comprovam a destinação.",
    highlights: ["Fontes geradoras", "Fluxos de manejo", "Destinação comprovável"],
    applies: "A Portaria IMA nº 009/2026 define o PGRS no Sistema MTR para os geradores alcançados pelo art. 20 da Política Nacional de Resíduos Sólidos. O plano deve representar a geração, o manejo e a destinação efetivamente praticados.",
    process: [
      "Identificamos setores geradores, tipos de resíduos, volumes disponíveis e formas atuais de manejo.",
      "Conferimos acondicionamento, armazenamento, transportadores, receptores, MTRs e comprovantes.",
      "Estruturamos procedimentos, responsabilidades e registros que a empresa deverá manter.",
    ],
    deliverable: "PGRS compatível com a operação informada, acompanhado das rotinas e evidências necessárias para sua manutenção.",
    boundary: "Treinamento, implantação e acompanhamento periódico são etapas separadas quando não constarem no escopo.",
    sources: [
      ima("Portaria nº 009/2026 do Sistema MTR", "https://consultas.ima.sc.gov.br/portarias/visualizar/4202"),
      ima("Instruções Normativas", "https://in.ima.sc.gov.br/instrucaoNormativa/visualizar/331"),
    ],
  },
  {
    slug: "pgrss",
    shortTitle: "PGRSS",
    title: "PGRSS organiza todas as etapas dos resíduos de saúde.",
    eyebrow: "Plano de Gerenciamento de Resíduos de Serviços de Saúde",
    description: "Elaboração e atualização de PGRSS em Joinville para clínicas, laboratórios, farmácias, serviços veterinários e demais geradores.",
    intro: "O plano precisa corresponder aos procedimentos realizados, aos grupos de resíduos gerados e à estrutura do estabelecimento.",
    highlights: ["Grupos identificados", "Manejo descrito", "Protocolo organizado"],
    applies: "A Prefeitura de Joinville informa que o PGRSS é obrigatório para serviços de saúde e profissionais autônomos que geram resíduos dessas atividades. O documento contempla geração, segregação, acondicionamento, armazenamento, transporte, tratamento e disposição final.",
    process: [
      "Levantamos procedimentos, ambientes, volumes e resíduos dos grupos A, B, C, D e E que se aplicarem.",
      "Conferimos segregação, recipientes, armazenamento, coleta, tratamento, contratos e comprovantes.",
      "Estruturamos o plano na modalidade aplicável e organizamos sua emissão ou atualização.",
    ],
    deliverable: "PGRSS compatível com a atividade e com o volume informado, acompanhado das orientações de implementação previstas no escopo.",
    boundary: "O plano deve ser atualizado quando houver nova unidade, atividade, endereço ou alteração relevante do layout e da geração.",
    sources: [
      pmj("Elaborar Plano de Gerenciamento de Resíduos de Serviços de Saúde", "servicos/elaborar-plano-de-gerenciamento-de-residuos-de-servicos-de-saude/"),
      pmj("Unidade de Vigilância Sanitária", "institucional/ses/dvs/uvi/"),
    ],
  },
  {
    slug: "pgrcc",
    shortTitle: "PGRCC",
    title: "PGRCC para controlar os resíduos ao longo da obra.",
    eyebrow: "Resíduos da Construção Civil",
    description: "Elaboração de PGRCC em Joinville, com estimativa de geração, segregação, armazenamento, transporte e destinação dos resíduos da obra.",
    intro: "O plano define o fluxo antes da geração e estabelece quais registros deverão comprovar a destinação durante a execução.",
    highlights: ["Resíduos estimados", "Manejo no canteiro", "Destino documentado"],
    applies: "Para obras que precisam apresentar um plano ou organizar previamente seus resíduos. A gestão abrange redução, segregação, acondicionamento, armazenamento, transporte e destinação, com uso de transportadores regulares e documentação compatível.",
    process: [
      "Caracterizamos a obra e estimamos as classes de resíduos esperadas em cada etapa.",
      "Definimos segregação, acondicionamento, armazenamento temporário, coleta e transporte.",
      "Relacionamos transportadores, destinos e comprovantes que deverão ser mantidos durante a obra.",
    ],
    deliverable: "PGRCC com fluxos de gerenciamento e controle documental definidos para a obra informada.",
    boundary: "A execução diária do plano e a guarda dos comprovantes são responsabilidades da obra, salvo contratação específica de acompanhamento.",
    sources: [
      pmj("Transporte de resíduos de construção civil", "servicos/registrar-empresa-de-transporte-de-residuos-de-construcao-civil/"),
      pmj("Como descartar resíduos", "servicos/como-descartar-residuos/"),
    ],
  },
  {
    slug: "mtr-e-documentacao-de-residuos",
    shortTitle: "MTR e documentação de resíduos",
    title: "O transporte termina; a rastreabilidade precisa permanecer.",
    eyebrow: "MTR, DMR, CDF e comprovantes de destinação",
    description: "Organização de MTR, DMR, CDF e documentação de resíduos em Santa Catarina para controle de geração, transporte e destinação.",
    intro: "Cada documento cumpre uma função: acompanhar a carga, declarar movimentações ou certificar a destinação final.",
    highlights: ["Manifestos conferidos", "Destinos rastreados", "Declarações organizadas"],
    applies: "A Portaria IMA nº 009/2026 define o MTR como documento de controle de expedição e transporte emitido pelo gerador. Também disciplina DMR e CDF; o MTR ou relatório de recebimento não substitui o certificado emitido pelo destinador.",
    process: [
      "Conferimos cadastro, perfis, resíduos, transportadores e destinos utilizados pela empresa.",
      "Organizamos a emissão e o controle dos MTRs conforme as movimentações informadas.",
      "Verificamos recebimentos, CDFs e declarações periódicas aplicáveis ao perfil da operação.",
    ],
    deliverable: "Rotina documental de resíduos estruturada, com pendências identificadas e registros organizados para rastreabilidade.",
    boundary: "O gerador continua responsável pelas informações declaradas; o CDF só pode ser emitido pelo destinador que realizou a destinação.",
    sources: [
      ima("Portaria nº 009/2026 do Sistema MTR", "https://consultas.ima.sc.gov.br/portarias/visualizar/4202"),
      pmj("Transporte de resíduos de construção civil e MTR", "servicos/registrar-empresa-de-transporte-de-residuos-de-construcao-civil/"),
    ],
  },
  {
    slug: "laudo-e-controle-acustico",
    shortTitle: "Laudo e controle acústico",
    title: "Controle acústico começa pela fonte e pelo limite aplicável.",
    eyebrow: "Ruído de empreendimentos em Joinville",
    description: "Avaliação, laudo e controle acústico em Joinville para empreendimentos sujeitos a limites de emissão de ruído e exigências ambientais.",
    intro: "A análise considera atividade, fontes sonoras, horários, entorno e limites definidos para o local.",
    highlights: ["Fontes identificadas", "Critério aplicável", "Medidas orientadas"],
    applies: "A Prefeitura define a Declaração de Controle Acústico como o documento que certifica o atendimento aos limites máximos de ruído permitidos para empreendimentos no município. A poluição sonora também abrange sons, ruídos e vibrações de atividades que causem desconforto ou excedam limites.",
    process: [
      "Levantamos atividade, equipamentos, horários, receptores próximos e histórico de exigências ou reclamações.",
      "Definimos a necessidade de medição, laudo, projeto ou declaração conforme o caso e a norma aplicável.",
      "Organizamos a documentação técnica contratada e orientamos as medidas de controle identificadas.",
    ],
    deliverable: "Diagnóstico acústico e documentação técnica definida para a situação, com medidas de controle quando aplicáveis.",
    boundary: "Medições e laudos dependem de condições representativas de operação e de equipamentos e procedimentos adequados à norma técnica.",
    sources: [
      pmj("Declaração de Controle Acústico para Empreendimentos", "servicos/requerer-declaracao-de-controle-acustico-para-empreendimentos/"),
      pmj("Resoluções do COMDEMA", "publicacoes/resolucoes-conselho-municipal-do-meio-ambiente-comdema/"),
      pmj("Denunciar poluição sonora", "servicos/denunciar-poluicao-sonora/"),
    ],
  },
];

export const servicePageBySlug = new Map(servicePages.map((service) => [service.slug, service]));
