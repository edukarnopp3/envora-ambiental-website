import type { ContentArticle } from "./content-data";

const licensingSource = {
  label: "Prefeitura de Joinville — Licenciamento de atividades industriais e diversas",
  url: "https://www.joinville.sc.gov.br/servicos/requerer-licenca-ambiental-para-atividades-industriais-e-atividades-diversas/",
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
    title: "Minha indústria precisa de LAO ou AuA?",
    description: "Entenda quais dados apresentar para avaliar a modalidade ambiental da sua indústria em Joinville.",
    publishedAt: "2026-10-11", readingTime: "3 min", serviceSlug: "lap-lai-lao",
    lead: "A escolha depende da operação concreta. O nome da empresa e a sigla procurada no Google não resolvem o enquadramento.",
    sections: [
      { title: "Descreva como a indústria funciona", paragraphs: [
        "Explique as etapas de fabricação ou prestação de serviço, matérias-primas, capacidade, equipamentos e controles existentes. Informe resíduos, efluentes e emissões associados à rotina.",
        "O endereço e a fase do empreendimento também entram na avaliação. Uma unidade em implantação apresenta uma situação diferente de uma operação existente que pretende ampliar.",
      ] },
      { title: "Identifique a modalidade aplicável", paragraphs: [
        "Joinville apresenta as fases de licença prévia, instalação e operação, além da Autorização Ambiental por ato único para os casos previstos. A definição considera o enquadramento e as regras aplicáveis.",
        "Se existe um documento anterior, apresente-o junto com as mudanças realizadas. Evite contratar um pacote de estudos antes de definir a modalidade e o órgão competente.",
      ] },
      { title: "Transforme a análise em um escopo claro", paragraphs: [
        "A Envora avalia as informações da unidade para definir o atendimento necessário. A proposta identifica entregas, etapas, responsabilidades e itens externos.",
        "Envie o município, a atividade, a situação atual e os documentos disponíveis. Com esse ponto de partida, podemos organizar o diagnóstico e a proposta do serviço.",
      ] },
    ], sources: [licensingSource],
  },
  {
    slug: "o-que-acompanhar-depois-licenca-ambiental", category: "Acompanhamento industrial",
    title: "O que acompanhar depois da licença ambiental?",
    description: "Veja como organizar condicionantes, prazos, registros e entregas técnicas da rotina industrial.",
    publishedAt: "2026-10-11", readingTime: "3 min", serviceSlug: "gestao-de-condicionantes",
    lead: "Depois da emissão, a empresa precisa transformar os compromissos do documento em uma rotina de acompanhamento.",
    sections: [
      { title: "Crie um calendário com responsáveis", paragraphs: [
        "Nossa recomendação é levantar cada obrigação constante nos documentos da unidade e registrar prazo, responsável, evidência necessária e situação. Diferencie entregas periódicas, providências pontuais e verificações da operação.",
        "Defina quem fornece os dados internos e quem prepara ou revisa as peças técnicas. Um calendário só ajuda quando há responsáveis e documentos organizados para demonstrar as entregas.",
      ] },
      { title: "Planeje os monitoramentos do caso", paragraphs: [
        "O levantamento deve identificar quais verificações e monitoramentos se aplicam à operação. A programação depende dos documentos, dos controles existentes e da demanda técnica da unidade.",
        "Discrimine visitas, coleta de amostras, equipamentos, laboratório e laudos na proposta. Frequência e custo precisam corresponder ao serviço definido para a empresa.",
      ] },
      { title: "Tenha uma visão das pendências", paragraphs: [
        "No acompanhamento contratado, a Envora pode organizar o calendário, as evidências, as visitas e a coordenação das entregas, com relatórios de situação e próximos passos.",
        "Apresente os documentos ambientais e explique quem acompanha a rotina hoje. A partir desse levantamento, definimos responsabilidades e frequência do atendimento.",
      ] },
    ], sources: [licensingSource],
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
