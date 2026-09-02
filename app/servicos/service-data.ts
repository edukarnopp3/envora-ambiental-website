export type ServiceComparison = {
  title: string;
  text: string;
};

export type ServicePageData = {
  slug: string;
  shortTitle: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  highlights: string[];
  situations: string[];
  scope: string[];
  inputs: string[];
  deliverable: string;
  boundary: string;
  comparison?: ServiceComparison[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "auto-de-infracao-ambiental",
    shortTitle: "Auto de infração ambiental",
    title: "Recebeu um auto de infração ambiental?",
    eyebrow: "Resposta técnica e organização documental",
    description: "Análise técnica de auto de infração ambiental em Joinville, com organização de prazos, fatos, documentos e itens ambientais da resposta.",
    intro: "O primeiro passo é entender exatamente o que o órgão registrou, quais prazos constam no documento e que evidências ambientais precisam ser reunidas.",
    highlights: ["Leitura do documento", "Organização das evidências", "Escopo técnico definido"],
    situations: [
      "A empresa recebeu auto de infração, notificação ou exigência de órgão ambiental.",
      "O documento cita obrigações, fatos ou documentos técnicos que precisam ser esclarecidos.",
      "É necessário separar o conteúdo ambiental da estratégia jurídica antes de responder.",
    ],
    scope: [
      "Leitura técnica do documento e identificação dos pontos ambientais.",
      "Organização de prazos, fatos, licenças, comprovantes e histórico disponível.",
      "Definição dos documentos e esclarecimentos técnicos necessários dentro do escopo profissional.",
      "Preparação da parte técnica da resposta e interface com advogado quando houver matéria jurídica.",
    ],
    inputs: ["Auto de infração ou notificação completa", "Licenças e autorizações existentes", "Comprovantes, registros e comunicações anteriores", "Breve relato do ocorrido"],
    deliverable: "Uma leitura organizada do caso, com pendências identificadas, documentos a reunir e escopo técnico para a resposta.",
    boundary: "A atuação ambiental não substitui defesa jurídica. Quando o caso envolver impugnação, recurso ou tese legal, o trabalho deve ser complementado por advogado.",
  },
  {
    slug: "licenciamento-ambiental",
    shortTitle: "Licenciamento ambiental",
    title: "Licenciamento ambiental com uma rota clara desde o início.",
    eyebrow: "Enquadramento, documentação e acompanhamento",
    description: "Consultoria para licenciamento ambiental em Joinville: enquadramento da atividade, organização documental, protocolo e acompanhamento conforme o escopo.",
    intro: "Antes de listar documentos, é preciso confirmar atividade, porte, localização, características da operação e órgão competente.",
    highlights: ["Enquadramento inicial", "Documentação por escopo", "Acompanhamento do processo"],
    situations: [
      "A empresa vai iniciar uma atividade ou instalar uma nova operação.",
      "Haverá ampliação, alteração de processo, mudança de endereço ou regularização.",
      "Existe dúvida sobre modalidade, órgão competente ou documentação aplicável.",
    ],
    scope: [
      "Levantamento da atividade, porte, localização e características ambientais relevantes.",
      "Definição da rota provável e confirmação das exigências aplicáveis ao caso.",
      "Organização e elaboração dos documentos técnicos contratados.",
      "Protocolo e acompanhamento das etapas previstas no escopo.",
    ],
    inputs: ["CNPJ e atividades exercidas", "Endereço e dados do imóvel", "Descrição do processo e capacidade", "Licenças, plantas e documentos já existentes"],
    deliverable: "Escopo de licenciamento definido, relação objetiva de informações necessárias e condução das entregas contratadas.",
    boundary: "A modalidade e a documentação final dependem do enquadramento e da análise do órgão competente. A aprovação e o prazo de análise não podem ser garantidos pela consultoria.",
  },
  {
    slug: "renovacao-e-regularizacao",
    shortTitle: "Renovação e regularização",
    title: "Renove ou regularize sem perder de vista a operação real.",
    eyebrow: "Continuidade documental e controle de pendências",
    description: "Renovação de licença e regularização ambiental em Joinville, com revisão da situação documental, condicionantes e alterações da operação.",
    intro: "A renovação não deve ser tratada como uma simples repetição do processo anterior: licenças, condicionantes e mudanças da empresa precisam ser conferidas em conjunto.",
    highlights: ["Revisão da licença", "Conferência de condicionantes", "Atualização documental"],
    situations: [
      "A licença está próxima do vencimento ou o prazo de renovação gera dúvida.",
      "A operação mudou desde a emissão da licença atual.",
      "Há pendências documentais, condicionantes ou processo antigo a organizar.",
    ],
    scope: [
      "Revisão da licença vigente, processo disponível e prazos aplicáveis.",
      "Conferência das condicionantes e das evidências de atendimento existentes.",
      "Levantamento das alterações de atividade, porte, equipamentos ou estrutura.",
      "Preparação e acompanhamento da renovação ou regularização conforme o escopo.",
    ],
    inputs: ["Licença atual e processo anterior", "Relatórios e comprovantes de condicionantes", "Descrição das mudanças ocorridas", "Documentos cadastrais e técnicos atualizados"],
    deliverable: "Diagnóstico das pendências, rota de regularização e organização das entregas necessárias para o processo contratado.",
    boundary: "O procedimento adequado depende do histórico e das mudanças da operação. Protocolar sem essa conferência pode gerar exigências adicionais.",
  },
  {
    slug: "danc-e-cca",
    shortTitle: "DANC e CCA",
    title: "DANC ou CCA: qual documento se aplica à sua atividade?",
    eyebrow: "Enquadramento ambiental para atividades de menor impacto ou porte",
    description: "Análise de enquadramento para DANC e CCA em Joinville, considerando atividade, porte, localização e características da operação.",
    intro: "Os dois documentos não são equivalentes. A escolha depende da listagem da atividade, do porte e das condições verificadas no caso concreto.",
    highlights: ["Atividade verificada", "Porte conferido", "Documento compatível"],
    situations: [
      "A empresa precisa comprovar sua situação ambiental para funcionar ou contratar.",
      "Existe dúvida se a atividade consta da listagem sujeita ao licenciamento.",
      "A atividade pode estar abaixo do porte de licenciamento e precisa de análise formal.",
    ],
    comparison: [
      { title: "DANC", text: "Em linhas gerais, formaliza a análise de atividade que não consta da listagem sujeita ao licenciamento ambiental." },
      { title: "CCA", text: "Pode se aplicar quando a atividade consta da listagem, mas está abaixo do porte de licenciamento, conforme as condições do caso." },
    ],
    scope: [
      "Conferência das atividades efetivamente exercidas e dos dados cadastrais.",
      "Análise de porte, localização e características relevantes da operação.",
      "Definição do documento provável e confirmação das exigências aplicáveis.",
      "Preparação e acompanhamento do requerimento contratado.",
    ],
    inputs: ["CNPJ, CNAEs e descrição das atividades", "Endereço e inscrição imobiliária", "Capacidade, área e equipamentos", "Documentos ambientais anteriores, se existirem"],
    deliverable: "Conclusão de enquadramento fundamentada nas informações disponíveis e preparação do documento aplicável dentro do escopo.",
    boundary: "CNAE isolado não resolve o enquadramento. A atividade real, o porte, a localização e os critérios do órgão precisam ser analisados em conjunto.",
  },
  {
    slug: "pgrs",
    shortTitle: "PGRS",
    title: "PGRS conectado à rotina real da empresa.",
    eyebrow: "Plano de Gerenciamento de Resíduos Sólidos",
    description: "Elaboração e revisão de PGRS em Joinville, com diagnóstico dos resíduos, responsabilidades, armazenamento e comprovação de destinação.",
    intro: "O plano precisa representar os resíduos realmente gerados e indicar como cada etapa será controlada — da segregação à destinação.",
    highlights: ["Resíduos mapeados", "Responsabilidades definidas", "Evidências organizadas"],
    situations: [
      "A empresa precisa elaborar ou atualizar seu plano de gerenciamento.",
      "O PGRS existente não acompanha mais a operação ou os resíduos atuais.",
      "Manifestos, comprovantes e rotinas de segregação estão dispersos.",
    ],
    scope: [
      "Levantamento das atividades, setores e resíduos gerados.",
      "Organização das informações de segregação, acondicionamento, armazenamento, coleta e destinação.",
      "Definição de responsabilidades, registros e rotinas de controle.",
      "Elaboração ou revisão do PGRS conforme o escopo e os dados fornecidos.",
    ],
    inputs: ["Descrição do processo e setores", "Relação de resíduos e quantidades disponíveis", "Contratos, MTRs e comprovantes de destinação", "Fotos ou informações das áreas de armazenamento"],
    deliverable: "PGRS organizado para a realidade informada da empresa, acompanhado da relação de controles e evidências que precisam ser mantidos.",
    boundary: "A qualidade do plano depende de dados coerentes sobre geração e destinação. Inventário, visitas, treinamentos ou implantação operacional devem constar expressamente no escopo contratado.",
  },
  {
    slug: "pgrcc",
    shortTitle: "PGRCC",
    title: "PGRCC para organizar os resíduos antes e durante a obra.",
    eyebrow: "Plano de Gerenciamento de Resíduos da Construção Civil",
    description: "Elaboração de PGRCC em Joinville, com previsão de resíduos, segregação, acondicionamento, transporte e comprovação de destinação.",
    intro: "O planejamento antecipado reduz improvisos no canteiro e facilita a comprovação de transporte e destinação dos resíduos da construção.",
    highlights: ["Geração prevista", "Fluxos de destinação", "Comprovantes organizados"],
    situations: [
      "A obra precisa apresentar PGRCC para aprovação, contratação ou controle interno.",
      "É necessário definir previamente segregação, armazenamento e destinação.",
      "A documentação de transportadores e receptores precisa ser organizada.",
    ],
    scope: [
      "Caracterização da obra e estimativa das classes de resíduos esperadas.",
      "Definição das diretrizes de segregação, acondicionamento e armazenamento temporário.",
      "Organização das rotas de transporte, destinação e documentos comprobatórios.",
      "Elaboração do PGRCC conforme as informações e o escopo contratado.",
    ],
    inputs: ["Dados, endereço e fase da obra", "Projeto, áreas e cronograma disponível", "Estimativas ou histórico de resíduos", "Transportadores e destinos previstos, quando definidos"],
    deliverable: "PGRCC com fluxos de gerenciamento definidos e orientação sobre os registros necessários durante a execução.",
    boundary: "O plano não substitui a execução e a fiscalização diária das rotinas no canteiro. A comprovação depende dos documentos emitidos ao longo da obra.",
  },
];

export const servicePageBySlug = new Map(servicePages.map((service) => [service.slug, service]));
