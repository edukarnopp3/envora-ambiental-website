export type ConversionContent = {
  title: string; lead: string; action: string; image: string; imageAlt: string;
  situations: { title: string; text: string }[];
  deliverables: string[]; documents: string[]; boundary: string;
  questions: { question: string; answer: string }[];
};

export const conversionPages: Record<string, ConversionContent> = {
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
