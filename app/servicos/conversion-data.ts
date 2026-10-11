export type ConversionContent = {
  title: string; lead: string; action: string; image: string; imageAlt: string;
  situations: { title: string; text: string }[];
  deliverables: string[]; documents: string[]; boundary: string;
  questions: { question: string; answer: string }[];
  contactPrompt?: string;
  continuity?: { title: string; text: string; items: string[] };
};

export const conversionPages: Record<string, ConversionContent> = {
  "lap-lai-lao": {
    title: "LAO e licenciamento ambiental para indústrias em Joinville",
    lead: "Precisa obter a licença da sua indústria? A Envora analisa a atividade e a etapa do empreendimento, organiza a documentação técnica e acompanha o processo ambiental.",
    action: "Conversar sobre a licença da minha indústria", image: "/licenciamento-ambiental-visual.webp",
    imageAlt: "Ilustração de empreendimento industrial e documentação ambiental",
    contactPrompt: "Município: __. Atividade da indústria: __. Etapa ou situação atual: __.",
    situations: [
      { title: "Preciso de LAO para operar", text: "Avaliar a fase da operação e organizar a documentação para a licença aplicável." },
      { title: "Vou implantar ou ampliar", text: "Identificar as etapas de projeto e instalação antes de avançar." },
      { title: "Ainda não sei qual licença pedir", text: "Analisar atividade, porte, localização e documentos existentes." },
    ],
    deliverables: ["Análise da atividade e da etapa do empreendimento.", "Definição da rota de licenciamento aplicável ao caso.", "Preparação das peças técnicas e do protocolo contratados.", "Acompanhamento do processo e das complementações previstas no escopo."],
    documents: ["Atividade e município da indústria", "Etapa atual: projeto, instalação ou operação", "Licenças, processo ou exigências existentes, se houver"],
    boundary: "A concessão e o prazo de análise dependem do órgão ambiental. As etapas, estudos, despesas e responsabilidades são definidos na proposta.",
    continuity: {
      title: "Depois da licença, o acompanhamento continua.",
      text: "A Envora também estrutura o acompanhamento de condicionantes, documentos e prazos conforme a operação e o escopo contratado.",
      items: ["Calendário de obrigações e responsáveis.", "Organização das evidências e entregas técnicas.", "Planejamento dos monitoramentos aplicáveis à operação."],
    },
    questions: [
      { question: "Preciso de LAP, LAI ou LAO?", answer: "A etapa depende da situação do empreendimento. A LAP trata da fase de planejamento, a LAI da instalação e a LAO da operação. A Envora analisa a atividade, a fase e os documentos antes de definir o procedimento aplicável." },
      { question: "Minha indústria já funciona. Posso contratar?", answer: "Sim. Informe a situação atual e os documentos existentes. A análise define a rota e o escopo necessários para o caso concreto." },
      { question: "O acompanhamento depois da licença está incluído?", answer: "Pode ser contratado como uma frente de continuidade. Frequência de visitas, gestão de condicionantes e monitoramentos são definidos na proposta, conforme a operação." },
    ],
  },
  "autorizacao-ambiental-aua": {
    title: "Autorização Ambiental (AuA) para sua empresa",
    lead: "A Envora verifica se a modalidade se aplica à sua atividade, prepara a documentação contratada e acompanha o pedido de AuA em Joinville e região.",
    action: "Avaliar a AuA da minha empresa", image: "/aua-visual.webp",
    imageAlt: "Ilustração de análise técnica de autorização ambiental",
    contactPrompt: "Município: __. Atividade da empresa: __. Situação atual: __.",
    situations: [
      { title: "Preciso solicitar uma AuA", text: "Confirmar o enquadramento e preparar a documentação aplicável." },
      { title: "Já tenho uma autorização", text: "Conferir validade, condições e mudanças na operação." },
      { title: "Não sei se AuA é a modalidade", text: "Analisar a operação antes de escolher o procedimento." },
    ],
    deliverables: ["Análise de atividade, porte e localização.", "Conferência da possibilidade de enquadramento em AuA.", "Documentação técnica e protocolo previstos na contratação.", "Acompanhamento das exigências incluídas no escopo."],
    documents: ["Atividade e município da empresa", "Características da operação", "Autorização ou processo anterior, se houver"],
    boundary: "A modalidade precisa ser confirmada antes do protocolo. A emissão da autorização depende da análise do órgão competente.",
    continuity: { title: "Organize também as obrigações da operação.", text: "Após a autorização, a Envora pode acompanhar as condições, os documentos e os prazos previstos para sua empresa.", items: ["Levantamento das condições do documento.", "Calendário de prazos e entregas.", "Acompanhamento técnico conforme o contrato."] },
    questions: [
      { question: "Toda empresa pode obter AuA?", answer: "Não. O procedimento depende da atividade, do porte, da localização e das condições aplicáveis. A análise do enquadramento vem antes da escolha da modalidade." },
      { question: "Vocês preparam e acompanham o pedido?", answer: "Sim, conforme o escopo contratado. A proposta define documentos, protocolo, acompanhamento e despesas antes do início." },
      { question: "Posso renovar a autorização com a Envora?", answer: "Envie o documento e informe o que mudou na operação. A conferência da validade e das condições permite definir o procedimento necessário." },
    ],
  },
  "renovacao-e-regularizacao": {
    title: "Renovação ambiental com a licença e a operação conferidas",
    lead: "Conferimos o documento atual, suas condicionantes e as mudanças da operação para organizar a renovação e as entregas técnicas necessárias em Joinville e região.",
    action: "Conversar sobre a renovação", image: "/renovacao-regularizacao-visual.webp",
    imageAlt: "Ilustração de conferência da operação e de documentos ambientais",
    contactPrompt: "Município: __. Atividade: __. Documento existente e validade: __.",
    situations: [
      { title: "Minha licença está vencendo", text: "Conferir a validade e organizar a demanda de renovação." },
      { title: "A operação mudou", text: "Comparar o que foi autorizado com a atividade atual." },
      { title: "Preciso revisar condicionantes", text: "Relacionar obrigações, registros e pendências do documento." },
    ],
    deliverables: ["Conferência do documento, dos prazos e das condicionantes.", "Análise das alterações da operação.", "Definição da rota de renovação ou regularização.", "Preparação e acompanhamento das entregas contratadas."],
    documents: ["Licença ou autorização atual", "Validade que consta no documento", "Mudanças da atividade e registros de atendimento das condições"],
    boundary: "Validade e prazos são conferidos no documento e nas regras aplicáveis ao caso. Alterações da operação podem exigir outro procedimento.",
    continuity: { title: "Renove e organize o próximo ciclo.", text: "O acompanhamento contínuo pode ser contratado para manter prazos, registros e entregas ambientais organizados durante a operação.", items: ["Matriz de obrigações e responsáveis.", "Programação de visitas e verificações.", "Organização dos monitoramentos previstos no documento."] },
    questions: [
      { question: "Como saber quando minha licença vence?", answer: "Confira a validade no documento completo. A Envora analisa a licença ou autorização e as regras aplicáveis antes de definir os próximos passos; não presume vencimento apenas pela data de emissão." },
      { question: "Mudei equipamentos ou capacidade. É só renovar?", answer: "A alteração precisa ser analisada. Mudanças relevantes podem exigir um procedimento próprio, conforme a atividade e a documentação existente." },
      { question: "Posso contratar acompanhamento além da renovação?", answer: "Sim. O escopo pode incluir gestão de condicionantes, prazos, registros e coordenação de monitoramentos, com frequência e custos discriminados na proposta." },
    ],
  },
  "gestao-de-condicionantes": {
    title: "Acompanhamento ambiental para a rotina da sua indústria",
    lead: "A Envora organiza condicionantes, documentos, prazos e entregas técnicas da operação, com responsabilidades e frequência de acompanhamento definidas.",
    action: "Avaliar o acompanhamento da minha indústria", image: "/condicionantes-visual.webp",
    imageAlt: "Ilustração de organização de prazos e evidências ambientais",
    contactPrompt: "Município: __. Atividade da indústria: __. Necessidade de acompanhamento: __.",
    situations: [
      { title: "Quero acompanhamento contínuo", text: "Definir uma rotina de gestão das obrigações ambientais." },
      { title: "Preciso organizar condicionantes", text: "Extrair prazos, responsáveis e evidências do documento." },
      { title: "Tenho monitoramentos a realizar", text: "Planejar as entregas previstas para a operação." },
    ],
    deliverables: ["Levantamento das obrigações dos documentos ambientais.", "Calendário de prazos e responsáveis.", "Organização de evidências e registros.", "Programação de visitas e verificações conforme o contrato.", "Planejamento e acompanhamento dos monitoramentos aplicáveis.", "Relatório de situação, pendências e próximos passos."],
    documents: ["Atividade e município da indústria", "Licenças, autorizações e condicionantes", "Registros, relatórios e monitoramentos disponíveis"],
    boundary: "Análises laboratoriais, coleta de amostras, equipamentos, laudos específicos, ART e terceiros devem ser discriminados na proposta. A rotina da empresa e a frequência de acompanhamento definem o escopo.",
    questions: [
      { question: "O acompanhamento pode ser recorrente?", answer: "Sim. A proposta define a frequência, as visitas, os registros e as entregas conforme as obrigações e a operação da indústria." },
      { question: "Todo monitoramento está incluído?", answer: "O documento e a operação determinam quais monitoramentos precisam ser considerados. Execução de amostragens, análises e serviços especializados são discriminados na proposta, com os respectivos responsáveis e custos." },
      { question: "Como começa o atendimento?", answer: "Informe a atividade, o município e a necessidade principal. Depois, a Envora solicita os documentos necessários para avaliar o escopo do acompanhamento." },
    ],
  },
  "licenciamento-ambiental": {
    title: "Licenciamento ambiental em Joinville",
    lead: "Sua atividade precisa de licença, renovação ou regularização? Conte o que está acontecendo e entenda o caminho técnico para sua empresa.",
    action: "Explicar minha situação", image: "/licenciamento-ambiental-visual.webp",
    imageAlt: "Ilustração de empreendimento e levantamento técnico de sua implantação",
    situations: [
      { title: "Vou abrir ou regularizar", text: "Identificar o enquadramento da atividade e a documentação necessária para começar." },
      { title: "Preciso renovar a licença", text: "Conferir a licença existente e o que mudou na operação antes de preparar o processo." },
      { title: "Recebi uma exigência", text: "Entender o documento recebido e organizar a complementação técnica aplicável." },
    ],
    deliverables: ["Enquadramento da atividade e definição da rota ambiental.", "Organização e elaboração da documentação técnica contratada.", "Protocolo e acompanhamento, quando incluídos na proposta.", "Orientação sobre exigências e próximos passos do processo."],
    documents: ["Atividade da empresa e endereço", "Licença ou processo anterior, se houver", "Exigência recebida ou dúvida principal"],
    boundary: "A modalidade depende da atividade, do porte e da localização. A emissão da licença e o prazo de análise são decisões do órgão competente.",
    questions: [
      { question: "Ainda não sei se minha empresa precisa de licença. Posso entrar em contato?", answer: "Sim. Comece explicando a atividade e onde ela funciona. A análise considera a operação real e os documentos disponíveis, não apenas o nome da empresa ou o CNAE." },
      { question: "Vocês atendem empresas que já estão funcionando?", answer: "Sim. A situação existente precisa ser avaliada para definir o escopo de regularização ou renovação, conforme o caso." },
      { question: "Preciso reunir todos os documentos antes de conversar?", answer: "Não. Informe a atividade, o município e sua necessidade. Depois, a Envora indica quais documentos são necessários para avaliar e elaborar a proposta." },
      { question: "O serviço inclui protocolo e acompanhamento?", answer: "Essas etapas podem integrar a contratação. A proposta define entregas, responsabilidades, despesas e limites de acompanhamento antes do início do trabalho." },
    ],
  },
  "planos-de-gerenciamento-de-residuos": {
    title: "PGRS, PGRSS e PGRCC em Joinville",
    lead: "Um plano de resíduos precisa refletir sua rotina. Elaboração ou revisão da documentação para empresas, serviços de saúde e construção civil.",
    action: "Conversar sobre meu plano", image: "/residuos-visual.webp",
    imageAlt: "Ilustração de área de armazenamento e organização de resíduos em uma operação",
    situations: [
      { title: "PGRS para minha empresa", text: "Organizar a geração, o armazenamento e a destinação dos resíduos da atividade." },
      { title: "PGRSS para serviço de saúde", text: "Estruturar ou revisar o plano conforme os resíduos e a rotina do estabelecimento." },
      { title: "PGRCC para construção civil", text: "Planejar o gerenciamento dos resíduos de construção conforme o empreendimento." },
    ],
    deliverables: ["Levantamento da rotina e dos resíduos gerados.", "Elaboração ou atualização do plano aplicável à atividade.", "Organização das informações de armazenamento e destinação.", "Orientação para aplicação do plano, conforme o escopo contratado."],
    documents: ["Tipo de atividade e município", "Plano atual, se já existir", "Informações sobre resíduos e destinação"],
    boundary: "A Envora presta consultoria e elabora documentação técnica. Este atendimento não é um serviço de coleta de lixo nem uma central de faturas de coleta municipal.",
    questions: [
      { question: "Já tenho um plano. Preciso fazer outro?", answer: "Não necessariamente. Primeiro é preciso verificar se ele corresponde à atividade atual. A proposta pode abranger revisão, atualização ou apoio à implementação, em vez de um plano novo." },
      { question: "Qual é a diferença entre PGRS, PGRSS e PGRCC?", answer: "São planos voltados ao gerenciamento de resíduos. O PGRSS trata de resíduos de serviços de saúde; o PGRCC, de construção civil. O plano aplicável deve ser confirmado a partir da atividade e de suas exigências." },
      { question: "O serviço inclui visita e treinamento?", answer: "Visitas, treinamento e acompanhamento podem ser avaliados na definição do escopo. Não são considerados incluídos automaticamente: a proposta discrimina as etapas contratadas." },
      { question: "Vocês fazem a coleta dos resíduos?", answer: "O atendimento desta página é de consultoria e documentação técnica. Para coleta ou segunda via de fatura, procure a empresa responsável pelo serviço." },
    ],
  },
  "auto-de-infracao-ambiental": {
    title: "Recebeu auto, notificação ou exigência ambiental?",
    lead: "Organize os documentos e entenda os próximos passos técnicos antes de responder. Atendimento de consultoria ambiental em Joinville.",
    action: "Solicitar análise técnica", image: "/auto-infracao-visual.webp",
    imageAlt: "Ilustração de análise de documentos, mapas e evidências ambientais",
    situations: [
      { title: "Recebi um auto de infração", text: "Relacionar o fato apontado aos documentos e às evidências ambientais disponíveis." },
      { title: "Recebi uma notificação", text: "Conferir o que foi solicitado e quais informações técnicas precisam ser organizadas." },
      { title: "Tenho uma exigência no processo", text: "Estruturar os subsídios técnicos para a complementação solicitada pelo órgão." },
    ],
    deliverables: ["Leitura técnica do documento e levantamento das informações necessárias.", "Organização do histórico e das evidências ambientais disponíveis.", "Definição das providências técnicas e das lacunas documentais.", "Elaboração dos subsídios ou da manifestação técnica contratada."],
    documents: ["Documento completo recebido", "Data e forma de recebimento", "Processo, licença e evidências disponíveis"],
    boundary: "A atuação da Envora é técnica ambiental, conforme a contratação. Não substitui assessoria jurídica nem garante cancelamento de multa. Prazos precisam ser conferidos no caso concreto.",
    questions: [
      { question: "Tenho prazo para responder. O que envio primeiro?", answer: "Informe que existe um prazo e encaminhe o documento completo, com a data e a forma de recebimento. A disponibilidade para atendimento precisa ser confirmada; não aguarde uma resposta pelo WhatsApp para cuidar de um prazo em curso." },
      { question: "Vocês fazem defesa jurídica?", answer: "Esta página oferece análise e documentação técnica ambiental. Quando houver questões jurídicas, a atuação deve ser articulada com assessoria jurídica, com responsabilidades separadas." },
      { question: "A análise pode ser feita só com uma foto do auto?", answer: "Uma imagem legível pode iniciar a conversa, mas não necessariamente permite uma análise completa. Podem ser necessários o documento integral, anexos, processo e evidências do fato." },
      { question: "O primeiro contato já é a análise completa?", answer: "Não. O primeiro contato serve para entender a demanda, verificar os documentos necessários e definir o escopo. O trabalho técnico e suas entregas são formalizados na proposta." },
    ],
  },
};
