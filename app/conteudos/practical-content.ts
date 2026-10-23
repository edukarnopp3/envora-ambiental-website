import type { ContentArticle } from "./content-data";

const licensingSource = {
  label: "Prefeitura de Joinville — Licenciamento de atividades industriais e diversas",
  url: "https://www.joinville.sc.gov.br/servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/",
};

const municipalLicensingNorm = {
  label: "IN SAMA nº 009/2026 — licenciamento industrial, LAO, renovação e AuA",
  url: "https://sei.joinville.sc.gov.br/sei/publicacoes/controlador_publicacoes.php?acao=publicacao_visualizar&id_documento=10000033646817&id_orgao_publicacao=0",
};

export const practicalArticles: ContentArticle[] = [
  {
    slug: "como-obter-aua-joinville", category: "Autorização ambiental",
    title: "Como obter uma AuA em Joinville?",
    description: "Conheça o ponto de partida para avaliar a AuA da sua empresa e organizar o pedido em Joinville.",
    publishedAt: "2026-10-11", readingTime: "3 min", serviceSlug: "autorizacao-ambiental-aua",
    lead: "Comece pela atividade que acontece no local. Antes de pedir uma Autorização Ambiental, é preciso verificar se essa modalidade se aplica à operação.",
    sections: [
      { title: "O que informar na primeira conversa", paragraphs: [
        "Apresente o município, o endereço da unidade, os produtos ou serviços, as etapas do processo e a capacidade de operação. Informe também se a empresa está em implantação, já opera ou pretende ampliar.",
        "Separe os documentos ambientais anteriores, quando existirem. Uma autorização antiga ajuda a entender o histórico, mas alterações no processo precisam entrar na análise atual.",
      ] },
      { title: "Do enquadramento ao acompanhamento", paragraphs: [
        "A carta de serviço municipal prevê a AuA como ato único para os casos aplicáveis. A documentação deve seguir as instruções pertinentes à atividade e o procedimento do órgão competente.",
        "Na Envora, organizamos o levantamento inicial, definimos o escopo técnico e conduzimos a preparação e o acompanhamento do pedido contratado. Exigências complementares são avaliadas conforme o processo.",
      ] },
      { title: "O que considerar na proposta", paragraphs: [
        "Peça uma proposta que identifique as peças técnicas, as visitas previstas, o protocolo e os limites do acompanhamento. Taxas públicas, ART, laboratório e serviços de terceiros devem ter responsabilidades e valores discriminados quando aplicáveis.",
        "Para começar, envie a descrição da atividade e sua situação atual. A Envora avalia os próximos passos e os dados necessários para elaborar a proposta.",
      ] },
    ], sources: [licensingSource],
  },
  {
    slug: "como-renovar-lao-industria", category: "Renovação ambiental",
    title: "Como renovar a LAO da minha indústria?",
    description: "Saiba quais informações reunir para avaliar a renovação da LAO e as obrigações da sua indústria.",
    publishedAt: "2026-10-11", readingTime: "3 min", serviceSlug: "renovacao-e-regularizacao",
    lead: "A primeira providência é conferir a própria licença: validade, condicionantes e identificação da operação autorizada.",
    sections: [
      { title: "Leia o documento antes de estimar o prazo", paragraphs: [
        "Use a validade expressa na licença e confira o processo administrativo. Não estime o vencimento somando uma duração padrão à data de emissão: o documento da empresa é o ponto de partida.",
        "Organize o planejamento antes do vencimento, considerando a antecedência exigida para o caso, as entregas pendentes e o tempo necessário para reunir os elementos técnicos. A Envora verifica essas informações no diagnóstico.",
      ] },
      { title: "Compare a licença com a operação atual", paragraphs: [
        "Informe ampliações, novos equipamentos, mudanças de capacidade e alterações nos processos ou controles. Esse levantamento permite avaliar se a demanda pode seguir como renovação ou se precisa de outra providência.",
        "Reúna os registros de cumprimento das condicionantes, relatórios, análises e documentos já disponíveis. Indique também as pendências conhecidas, para que a proposta considere o trabalho real.",
      ] },
      { title: "Planeje a continuidade", paragraphs: [
        "O atendimento da Envora pode compreender revisão documental, peças técnicas, protocolo e acompanhamento, conforme o escopo. O diagnóstico define o que será necessário em cada unidade.",
        "Quando houver demanda recorrente, também estruturamos calendário de obrigações, organização das evidências e acompanhamento das entregas. A frequência e os custos externos são definidos no contrato.",
      ] },
    ], sources: [licensingSource],
  },
{
    slug: "industria-precisa-lao-ou-aua", category: "Enquadramento industrial",
    title: "Minha indústria precisa de LAO ou AuA em Joinville?",
    description: "Compare LAO e AuA em Joinville e veja quais dados da atividade definem o enquadramento e o procedimento ambiental.",
    publishedAt: "2026-10-11", updatedAt: "2026-10-23", readingTime: "3 min", serviceSlug: "lap-lai-lao",
    lead: "No licenciamento em fases, a LAO autoriza a operação após a verificação das exigências aplicáveis. A AuA reúne a autorização em um ato único para as atividades enquadradas nessa modalidade. A empresa não escolhe entre as duas apenas por preferência: atividade, porte, localização e regras do órgão definem o procedimento.",
    sections: [
      { title: "Qual é a diferença entre LAO e AuA?", paragraphs: [
        "A carta de serviço de Joinville diferencia as fases de planejamento, instalação e operação e a Autorização Ambiental por ato único. A tabela resume essa distinção; ela não substitui o enquadramento da unidade.",
      ], table: { headers: ["Ponto de comparação", "LAO", "AuA"], rows: [
        ["Função", "Autorizar a operação no licenciamento em fases.", "Autorizar por ato único quando essa modalidade se aplica."],
        ["O que verificar", "Implantação, controles ambientais e atendimento das exigências anteriores.", "Requisitos da atividade e documentos previstos para a autorização."],
        ["Referência municipal", "IN SAMA nº 009/2026, seção D; renovação na seção E.", "IN SAMA nº 009/2026, seção G, nos casos abrangidos pela norma."],
      ] } },
      { title: "Quais informações definem o enquadramento?", paragraphs: [
        "Descreva a operação real, inclusive etapas auxiliares. Uma denominação como indústria ou oficina não informa, sozinha, os processos e impactos que precisam ser avaliados.",
      ], bullets: [
        "produtos, matérias-primas e etapas de fabricação ou serviço;",
        "capacidade, equipamentos e área utilizada;",
        "endereço, instalações e situação atual: projeto, implantação, operação ou ampliação;",
        "geração de resíduos, efluentes e emissões e os controles existentes;",
        "licenças anteriores, condicionantes e alterações realizadas.",
      ] },
      { title: "E se a indústria já estiver funcionando?", paragraphs: [
        "Apresente o histórico documental e informe se houve instalação ou alteração sem a etapa ambiental correspondente. A regularização de uma operação existente precisa ser avaliada antes de definir o pedido.",
        "A IN SAMA nº 009/2026 possui seção própria para LAO corretiva. Isso não significa que qualquer empresa em operação deva requerê-la: é necessário examinar a atividade, o histórico e o procedimento aplicável. A carta municipal também remete a instruções específicas do IMA para os casos que não seguem a instrução municipal.",
      ] },
      { title: "Como a Envora começa a análise?", paragraphs: [
        "Você apresenta a atividade e os documentos disponíveis. A Envora avalia o enquadramento e define o escopo técnico antes da contratação: levantamentos, estudos, peças, protocolo e acompanhamento.",
        "Dados da operação e documentos existentes dependem do cliente. Taxas, laboratório e serviços de terceiros são discriminados quando necessários. A emissão e a decisão cabem ao órgão ambiental.",
      ] },
    ],
    relatedLinks: [
      { label: "LAP, LAI e LAO: o que cada etapa autoriza", href: "/conteudos/lap-lai-lao-entenda-as-etapas" },
      { label: "Renovação da LAO em Joinville", href: "/conteudos/como-renovar-lao-industria" },
      { label: "Atendimento para Autorização Ambiental (AuA)", href: "/servicos/autorizacao-ambiental-aua" },
      { label: "DANC, CCA, AuA ou licença: qual se aplica?", href: "/conteudos/licenca-ambiental-ou-autorizacao-ambiental" },
    ],
    sources: [licensingSource, municipalLicensingNorm],
  },
  {
    slug: "o-que-acompanhar-depois-licenca-ambiental", category: "Acompanhamento industrial",
    title: "Condicionantes da LAO: como acompanhar?",
    description: "Organize as condicionantes da LAO com prazos, responsáveis e evidências. Veja um exemplo de acompanhamento para a rotina da empresa.",
    publishedAt: "2026-10-11", updatedAt: "2026-10-23", readingTime: "3 min", serviceSlug: "gestao-de-condicionantes",
    lead: "Depois de obter a LAO, transforme cada condicionante em uma tarefa com prazo, responsável e evidência. O calendário deve partir do texto da licença e dos atos do processo, sem inventar uma frequência padrão de laudos ou relatórios para toda empresa.",
    sections: [
      { title: "Como montar o calendário da licença?", paragraphs: [
        "Leia a LAO completa e separe obrigações pontuais, periódicas e contínuas. Para cada item, registre a referência da condicionante, o que deve ser feito, a data ou frequência, o responsável e o documento que demonstra o atendimento.",
        "Quando houver exigência de entrega, acompanhe também o protocolo: possuir um laudo não comprova, sozinho, que ele foi apresentado ao órgão no canal e no prazo previstos.",
      ], bullets: [
        "Obrigação: transcreva o item da licença e sua referência.",
        "Prazo: use a data ou a frequência indicada no documento.",
        "Responsável: identifique quem fornece dados, executa, revisa e envia.",
        "Evidência: relacione relatório, resultado, registro e protocolo, conforme o item.",
      ] },
      { title: "Exemplo ilustrativo de acompanhamento", paragraphs: [
        "Os itens abaixo mostram como organizar uma rotina. Monitoramentos e documentos só entram quando forem exigidos para a unidade; use as condições da sua LAO para definir frequência e conteúdo.",
      ], table: { headers: ["Item a acompanhar", "Quando", "Evidência a organizar"], rows: [
        ["Monitoramento de efluentes, se exigido", "Na frequência indicada na licença ou no ato aplicável.", "Relatório de coleta, resultados e protocolo, quando exigido."],
        ["Registros de destinação de resíduos", "Conforme o fluxo e a obrigação aplicáveis.", "Comprovantes correspondentes à unidade e ao período, como CDF ou DMR, quando cabíveis."],
        ["Preparação da renovação da LAO", "Planejar antes do marco de 120 dias previsto no artigo 29 da IN SAMA nº 009/2026.", "Licença, RTC, anexos e comprovante do pedido."],
      ] } },
      { title: "O que fazer quando faltar uma evidência?", paragraphs: [
        "Registre a pendência e confira se o trabalho foi realizado e o arquivo precisa ser recuperado, se a entrega ainda deve ser executada ou se há dúvida sobre o alcance da obrigação. Não declare atendimento apenas com base em lembrança ou em documento de outra unidade.",
        "Se o item depende de coleta, laboratório ou outro prestador, programe a contratação e a entrega com antecedência. A responsabilidade de cada participante deve ficar definida no escopo do atendimento.",
      ] },
      { title: "Como isso se relaciona com a renovação?", paragraphs: [
        "Nos processos de renovação abrangidos pelo artigo 52 da IN SAMA nº 009/2026, o RTC deve comprovar o atendimento das condicionantes e trazer informações atualizadas do processo produtivo e dos controles. O Anexo IV detalha seu termo de referência.",
        "Manter as evidências organizadas permite identificar lacunas antes da preparação desse relatório. Ampliação ou alteração operacional também deve ser registrada e avaliada; renovar a LAO não dispensa analisar o que mudou.",
      ] },
      { title: "Como funciona o acompanhamento da Envora?", paragraphs: [
        "A Envora avalia a licença e a rotina atual e define o trabalho contratado: organização do calendário, peças técnicas, visitas e acompanhamento de entregas, conforme a proposta.",
        "A empresa fornece os dados e mantém as rotinas operacionais. Coleta, laboratório e outros serviços externos têm responsabilidades próprias quando necessários. Envie sua LAO para começarmos essa avaliação.",
      ] },
    ],
    relatedLinks: [
      { label: "Renovação de LAO em Joinville: documentos", href: "/conteudos/como-renovar-lao-industria" },
      { label: "LAO vencida: como conferir a situação", href: "/conteudos/licenca-ambiental-vencida-o-que-fazer" },
      { label: "Gestão de condicionantes pela Envora", href: "/servicos/gestao-de-condicionantes" },
      { label: "Licenciamento ambiental: atendimento", href: "/servicos/licenciamento-ambiental" },
    ],
    sources: [licensingSource, municipalLicensingNorm],
  },
  {
    slug: "quanto-custa-licenciamento-industria", category: "Planejamento do licenciamento",
    title: "Quanto custa o licenciamento de uma indústria?",
    description: "Entenda os componentes do orçamento e os dados necessários para solicitar uma proposta de licenciamento.",
    publishedAt: "2026-10-11", readingTime: "3 min", serviceSlug: "lap-lai-lao",
    lead: "Um orçamento útil precisa considerar a atividade, a etapa do empreendimento e as entregas técnicas necessárias.",
    sections: [
      { title: "Separe os componentes do orçamento", paragraphs: [
        "Os honorários da consultoria correspondem ao escopo contratado: levantamento, visitas, estudos ou peças técnicas, protocolo e acompanhamento definido. Complexidade, deslocamentos e documentação disponível afetam o trabalho.",
        "Além dos honorários, pode haver ART, taxas públicas, análises laboratoriais e serviços especializados. A carta municipal informa cobrança de preço público no procedimento; a proposta deve separar as responsabilidades por cada item.",
      ] },
      { title: "Informe o que muda o trabalho técnico", paragraphs: [
        "Para solicitar uma proposta, apresente município, atividade, capacidade, fase atual e a demanda: obtenção, renovação, alteração ou acompanhamento. Encaminhe documentos existentes e informe mudanças na operação.",
        "Com os dados iniciais, a Envora avalia a necessidade de levantamento complementar e define as etapas. O valor deve corresponder ao escopo que a unidade precisa executar.",
      ] },
      { title: "Defina os limites do atendimento", paragraphs: [
        "Confira se a proposta identifica entregas, número ou frequência de visitas, tratamento de exigências e itens externos. Acompanhamento recorrente da operação deve ter condições próprias quando solicitado.",
        "A Envora prepara a proposta a partir do caso concreto, com responsabilidades e condições de execução descritas. Conte sua atividade e o objetivo da contratação para iniciar essa avaliação.",
      ] },
    ], sources: [licensingSource],
  },
  {
    slug: "como-fazer-pgrss-consultorio", category: "Resíduos de serviços de saúde",
    title: "Como fazer PGRSS para um consultório?",
    description: "Conheça o levantamento inicial para elaborar ou revisar o PGRSS de um consultório em Joinville.",
    publishedAt: "2026-10-11", readingTime: "3 min", serviceSlug: "planos-de-gerenciamento-de-residuos",
    lead: "O plano deve partir dos procedimentos e da rotina do consultório. Uma descrição genérica pode deixar de representar os resíduos realmente gerados.",
    sections: [
      { title: "Comece pelos procedimentos e resíduos", paragraphs: [
        "Informe os atendimentos realizados ou previstos, a equipe, o estágio de abertura ou operação e a demanda aproximada. Identifique os resíduos e os pontos de geração, além dos materiais e produtos usados nos procedimentos.",
        "A orientação da Anvisa sobre a RDC 222/2018 trata das etapas de manejo, incluindo segregação, acondicionamento, armazenamento, coleta e destinação. O levantamento precisa representar essas etapas no estabelecimento.",
      ] },
      { title: "Relacione o plano à rotina do local", paragraphs: [
        "Na avaliação da Envora, levantamos os fluxos, os recipientes, os locais de armazenamento e os prestadores envolvidos. Planos anteriores e documentos de coleta ajudam a entender o cenário existente.",
        "Confirme com a Vigilância Sanitária local as exigências de apresentação e as regras do estabelecimento. O PGRSS e os procedimentos de licenciamento precisam ser avaliados conforme a atividade e o município.",
      ] },
      { title: "Solicite uma proposta com escopo definido", paragraphs: [
        "A proposta pode abranger levantamento, elaboração ou revisão do plano e orientação de implantação, conforme a demanda. O acompanhamento e as entregas documentais devem estar descritos nas condições do serviço.",
        "Coleta, transporte e destinação têm contratação própria quando não integram o escopo da consultoria. Para iniciar, envie os procedimentos, a localização e a situação atual do consultório.",
      ] },
    ], sources: [{ label: "Anvisa — Perguntas e respostas sobre a RDC 222/2018", url: "https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/gerenciamento-de-residuos/PerguntaseRespostasRDCn.2222018.pdf" }],
  },
];
