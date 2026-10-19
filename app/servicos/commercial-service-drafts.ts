export type CommercialServiceDraft = {
  slug: string;
  shortTitle: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  action: string;
  message: string;
  situations: string[];
  whatIs: string[];
  audience: string[];
  deliverablesIntro: string;
  deliverables: string[];
  process: string[];
  clientIntro: string;
  clientItems: string[];
  dependencyIntro: string;
  dependencyItems: string[];
  notIncludedIntro: string;
  notIncludedItems: string[];
  questions: { question: string; answer: string }[];
  confirmations: string[];
  sources: { label: string; url: string }[];
  statusNote?: string;
};

export const commercialServiceDrafts: CommercialServiceDraft[] = [
  {
    slug: "assessoria-ctf-app-ibama",
    shortTitle: "Assessoria CTF/APP do Ibama",
    eyebrow: "Cadastro e enquadramento federal",
    metaTitle: "Assessoria CTF/APP IBAMA | Envora",
    metaDescription: "Apoio para avaliar enquadramento, cadastro e regularização no CTF/APP. A obrigação depende da atividade. Escopo definido caso a caso.",
    title: "A atividade define a obrigação.",
    intro: "O CTF/APP é um cadastro federal mantido pelo Ibama. A obrigação depende da atividade efetivamente exercida e do enquadramento aplicável — não se presume que toda empresa precise se cadastrar.",
    image: "/licenciamento-ambiental-visual.webp",
    imageAlt: "Área de operação industrial e vegetação ao redor, em imagem ilustrativa",
    action: "Explicar minha situação no WhatsApp",
    message: "Olá! Preciso de ajuda com CTF/APP do Ibama. Minha atividade é [atividade] e a empresa fica em [cidade/UF].",
    situations: ["Confirmar o enquadramento da atividade", "Avaliar cadastro inicial", "Entender uma pendência cadastral"],
    whatIs: [
      "O Cadastro Técnico Federal de Atividades Potencialmente Poluidoras e Utilizadoras de Recursos Ambientais — CTF/APP — reúne informações de pessoas físicas ou jurídicas que exercem atividades sujeitas ao cadastro, conforme as regras do Ibama.",
      "A obrigação e o escopo dependem da atividade e da situação concreta. A assessoria começa pela avaliação do enquadramento informado.",
    ],
    audience: [
      "Empresas e profissionais que exercem atividade potencialmente sujeita ao cadastro e querem conferir o enquadramento antes de definir o próximo passo.",
      "O nome da empresa, por si só, não confirma a obrigação. A avaliação deve considerar a atividade efetivamente exercida e os critérios aplicáveis.",
    ],
    deliverablesIntro: "A assessoria cobre cadastro e regularização, dentro do escopo descrito na proposta.",
    deliverables: [
      "Avaliação do enquadramento a partir da atividade informada.",
      "Apoio ao cadastro inicial ou à regularização cadastral contratada.",
      "[CONFIRMAR: comprovantes, relatórios ou etapas de acompanhamento entregues em cada modalidade.]",
    ],
    process: [
      "Entender a atividade real, as unidades envolvidas e a demanda apresentada.",
      "Conferir as informações cadastrais e avaliar o enquadramento aplicável.",
      "Definir e conduzir o apoio de cadastro ou regularização incluído na proposta.",
    ],
    clientIntro: "Para a conversa inicial, ajudam:",
    clientItems: [
      "CNPJ ou CPF e cidade/UF da unidade.",
      "Descrição objetiva da atividade efetivamente exercida.",
      "Situação do cadastro e documentos ou comunicações relacionados ao Ibama, se houver.",
    ],
    dependencyIntro: "O enquadramento e a situação cadastral dependem das informações declaradas, das regras e dos sistemas do Ibama.",
    dependencyItems: [
      "A Envora não decide se o Ibama reconhece o cadastro como regular.",
      "A análise depende da consistência dos dados fornecidos pela empresa e do processamento pelo órgão.",
      "RAPP é obrigação distinta e não deve ser presumida como parte da assessoria cadastral.",
    ],
    notIncludedIntro: "O escopo é definido na proposta, sem presumir serviços adicionais.",
    notIncludedItems: [
      "RAPP, salvo contratação separada após confirmação da oferta pela Envora.",
      "Licenciamento ambiental, defesa administrativa ou outras obrigações federais não descritas na proposta.",
      "Taxas ou pagamentos ao poder público, salvo previsão expressa.",
    ],
    questions: [
      { question: "Toda empresa precisa de CTF/APP?", answer: "Não. A obrigatoriedade depende da atividade exercida e do enquadramento nas categorias aplicáveis." },
      { question: "O CTF/APP substitui uma licença ambiental?", answer: "Não. Cadastro federal e licenciamento ambiental são instrumentos distintos." },
      { question: "A assessoria inclui RAPP?", answer: "[CONFIRMAR: A Envora oferece o RAPP como serviço separado? Se sim, descrever o escopo. Até a confirmação, não divulgar o RAPP como oferta.]" },
      { question: "A contratação garante que o cadastro ficará regular?", answer: "Não. A situação depende do enquadramento, das informações fornecidas e do processamento pelo Ibama." },
      { question: "O que envio para começar?", answer: "Uma descrição objetiva da atividade, a cidade/UF e a situação cadastral conhecida. Não envie senhas ou credenciais pelo WhatsApp." },
    ],
    confirmations: [
      "Quais ações cadastrais e de regularização a Envora oferece e quais entregáveis estão incluídos?",
      "[CONFIRMAR: a Envora oferece RAPP como serviço separado? Se sim, qual escopo?]",
      "Há responsável técnico ou habilitação vinculada ao serviço?",
      "Qual é a cobertura geográfica da assessoria?",
    ],
    sources: [
      { label: "Ibama — CTF/APP", url: "https://www.gov.br/ibama/pt-br/servicos/cadastros/ctf/ctf-app/ctf-app" },
      { label: "Ibama — RAPP", url: "https://www.gov.br/ibama/pt-br/servicos/relatorios/atividades-poluidoras" },
    ],
  },
  {
    slug: "inscricao-inicial-car",
    shortTitle: "Inscrição inicial no CAR",
    eyebrow: "Cadastro Ambiental Rural",
    metaTitle: "Inscrição no CAR | Apoio da Envora",
    metaDescription: "Apoio técnico para inscrição inicial no SICAR. O CAR é declaratório e não substitui licenças ou autorizações ambientais.",
    title: "Inscrição declaratória, com os dados do imóvel organizados.",
    intro: "O Cadastro Ambiental Rural reúne informações ambientais de imóveis rurais. A inscrição é declaratória: os dados são informados pelo proprietário ou possuidor, e o cadastro não equivale a licenciamento ambiental.",
    image: "/prad-visual.webp",
    imageAlt: "Área rural com vegetação e solo exposto, em imagem ilustrativa",
    action: "Conversar sobre a inscrição no CAR",
    message: "Olá! Preciso de apoio para inscrição inicial no CAR. O imóvel rural fica em [município/UF].",
    situations: ["Imóvel rural sem inscrição inicial", "Organizar informações para o SICAR", "Entender quais dados já estão disponíveis"],
    whatIs: [
      "O CAR é o cadastro eletrônico ambiental do imóvel rural no SICAR. A inscrição é uma obrigação relacionada ao imóvel rural; a contratação da Envora é uma opção de apoio para quem precisa organizar e realizar a inscrição inicial.",
      "O recibo do CAR não substitui licença ambiental nem autorização para atividade, intervenção ou supressão de vegetação. Também não comprova propriedade ou posse.",
    ],
    audience: [
      "Proprietários ou possuidores de imóvel rural que precisam avaliar uma inscrição inicial.",
      "Se já existe recibo ou cadastro, a demanda pode ser diferente de uma inscrição inicial e precisa de avaliação própria antes de contratar qualquer etapa.",
    ],
    deliverablesIntro: "O trabalho contratado fica delimitado à inscrição inicial e às atividades descritas na proposta.",
    deliverables: [
      "Organização das informações declaradas para a inscrição no SICAR.",
      "Identificação de dados que ainda precisam ser fornecidos ou esclarecidos.",
      "[CONFIRMAR: a Envora preenche e transmite a inscrição ou prepara as informações para o declarante inserir?]",
    ],
    process: [
      "Entender a localização do imóvel e verificar se a demanda é realmente de inscrição inicial.",
      "Organizar as informações declaradas e identificar dados ainda necessários.",
      "Definir como será feito o apoio à inscrição, conforme o escopo confirmado na proposta.",
    ],
    clientIntro: "Para a conversa inicial, ajudam:",
    clientItems: [
      "Município/UF e identificação do imóvel rural.",
      "Informações sobre propriedade ou posse e arquivos ou mapas existentes.",
      "Dados ambientais já conhecidos e recibo ou número de CAR anterior, se houver.",
    ],
    dependencyIntro: "A inscrição é declaratória. O proprietário ou possuidor responde pelos dados informados; a análise e validação cabem ao órgão estadual competente e aos sistemas do CAR.",
    dependencyItems: [
      "Pendências podem exigir informações ou complementações do declarante.",
      "Levantamentos, mapas ou produção de dados geoespaciais por terceiros dependem de escopo próprio.",
      "O recibo não corresponde a decisão de licenciamento ou autorização ambiental.",
    ],
    notIncludedIntro: "A inscrição no CAR é diferente de outros procedimentos ambientais ou fundiários.",
    notIncludedItems: [
      "Licença ou autorização ambiental para atividade, intervenção ou supressão.",
      "Título de propriedade, comprovação de posse ou regularização fundiária.",
      "Retificação, atualização ou resposta a pendências de CAR existente, salvo previsão expressa.",
    ],
    questions: [
      { question: "O recibo do CAR permite iniciar uma atividade?", answer: "Não. Ele não substitui licença ou autorização ambiental exigida para uma atividade ou intervenção." },
      { question: "O CAR comprova que sou proprietário do imóvel?", answer: "Não. O cadastro não é título de propriedade ou posse." },
      { question: "Já existe um CAR para o imóvel. Preciso fazer outro?", answer: "Não se deve iniciar outro cadastro sem entender a situação existente. Retificação ou atualização depende de escopo confirmado." },
      { question: "Quem responde pelas informações declaradas?", answer: "O proprietário ou possuidor que fornece os dados. A Envora pode apoiar o trabalho contratado, sem substituir a responsabilidade do declarante." },
      { question: "O que envio para começar?", answer: "Município/UF, identificação do imóvel, situação de propriedade ou posse e informações ou arquivos já disponíveis." },
    ],
    confirmations: [
      "A Envora preenche e transmite a inscrição no SICAR ou prepara as informações para o declarante inserir?",
      "O serviço inclui perímetro, mapas ou dados geoespaciais? Qual é o limite?",
      "A Envora atende retificação, atualização ou resposta a pendências de CAR existente?",
      "Qual é a cobertura geográfica do serviço?",
    ],
    sources: [
      { label: "CAR — inscrição no cadastro", url: "https://www.gov.br/car/pt-br/assuntos/etapas-do-car-e-regularizacao-ambiental/inscricao-no-car" },
      { label: "CAR — perguntas frequentes sobre inscrição", url: "https://www.gov.br/car/pt-br/canais_atendimento/perguntas-frequentes/inscricao-no-car" },
    ],
  },
  {
    slug: "avaliacao-de-passivo-ambiental",
    shortTitle: "Avaliação de passivo ambiental",
    eyebrow: "Avaliação técnica com escopo delimitado",
    metaTitle: "Avaliação de Passivo Ambiental | Envora",
    metaDescription: "Avaliação técnica do histórico e das informações disponíveis. Escopo, responsável técnico e necessidade de análises são definidos caso a caso.",
    title: "Antes de definir medidas, entenda o histórico da área.",
    intro: "A avaliação organiza informações e condições ambientais relacionadas a uma área ou atividade. Ela não é, por si só, remediação nem garantia de que não existam impactos.",
    image: "/auto-infracao-visual.webp",
    imageAlt: "Documentos e mapa sendo analisados, em imagem ilustrativa",
    action: "Conversar sobre a área",
    message: "Olá! Preciso conversar sobre avaliação de passivo ambiental. O imóvel fica em [cidade/UF] e a situação é [resumo].",
    situations: ["Organizar o histórico ambiental disponível", "Avaliar documentos e informações da área", "Entender se são necessários estudos adicionais"],
    whatIs: [
      "É uma avaliação técnica das informações e condições ambientais associadas a um imóvel ou atividade. O tipo de avaliação, a área de estudo e os procedimentos precisam ser definidos antes da contratação.",
      "A página fica como rascunho até confirmar quais modalidades a Envora oferece regularmente: [CONFIRMAR: análise documental, vistoria, avaliação preliminar de área contaminada, investigação confirmatória ou outras].",
    ],
    audience: [
      "Pode ser considerada quando há necessidade de entender o histórico ambiental, documentos disponíveis ou uma situação que demande avaliação técnica.",
      "[CONFIRMAR: em quais contextos e para quais perfis de cliente a Envora atende regularmente.]",
    ],
    deliverablesIntro: "O produto técnico e os métodos só podem ser definidos depois de confirmar quais modalidades a Envora oferece.",
    deliverables: [
      "Avaliação limitada às informações e condições previstas no escopo contratado.",
      "[CONFIRMAR: modalidades de avaliação e produto técnico entregue em cada uma.]",
      "[CONFIRMAR: responsável técnico e habilitação aplicável a cada escopo.]",
    ],
    process: [
      "Receber a descrição da área, os usos conhecidos e a questão que motivou a consulta.",
      "Delimitar o que pode ser avaliado com os dados disponíveis e identificar lacunas.",
      "Formalizar na proposta os métodos e o produto técnico correspondentes ao escopo confirmado.",
    ],
    clientIntro: "Para a conversa inicial, ajudam:",
    clientItems: [
      "Endereço ou identificação da área e uso atual e anterior, se conhecido.",
      "Relatórios, licenças, plantas e documentos ambientais existentes.",
      "Resumo da situação que motivou a avaliação e evidências disponíveis.",
    ],
    dependencyIntro: "Campo, amostragem e análise laboratorial dependem da necessidade identificada e do plano técnico contratado.",
    dependencyItems: [
      "Acesso à área e condições representativas de avaliação podem depender do cliente.",
      "Amostragem e análises laboratoriais são executadas por terceiros quando previstas; custos e resultados dependem desses prestadores.",
      "Conclusões de órgãos competentes, quando houver processo associado, não dependem da Envora.",
    ],
    notIncludedIntro: "A oferta desta página é de avaliação, não de execução de remediação.",
    notIncludedItems: [
      "Contenção, remoção de solo, tratamento, recuperação ou execução de medidas corretivas.",
      "Amostragem ou análise laboratorial sem previsão expressa na proposta.",
      "Parecer jurídico ou garantia de inexistência de passivo ambiental.",
    ],
    questions: [
      { question: "A avaliação confirma automaticamente que há contaminação?", answer: "Não. A conclusão depende do escopo, dos dados disponíveis e, quando aplicável, dos resultados de campo e laboratório." },
      { question: "A Envora executa remediação?", answer: "Não é o escopo desta oferta. A página trata de avaliação, sem sugerir execução de remediação." },
      { question: "A avaliação inclui coleta e análise de amostras?", answer: "Não automaticamente. A necessidade e a contratação de laboratório dependem do plano técnico e da proposta." },
      { question: "Qual produto técnico é entregue?", answer: "[CONFIRMAR: tipo de relatório ou produto técnico por modalidade.]" },
      { question: "Quem assina o trabalho?", answer: "[CONFIRMAR: responsável técnico e habilitação aplicável a cada escopo.]" },
    ],
    confirmations: [
      "A avaliação de passivo ambiental é uma oferta regular da Envora? Se não, a página não deve ser publicada.",
      "Quais modalidades e contextos são realmente atendidos?",
      "Qual produto técnico é entregue em cada modalidade?",
      "Quem é o responsável técnico e qual habilitação se aplica a cada escopo?",
      "A Envora coordena amostragem e laboratório ou apenas especifica essas etapas?",
      "Qual é a cobertura geográfica?",
    ],
    sources: [],
    statusNote: "Oferta comercial pendente de confirmação: não publicar esta página nem ativar anúncios antes de validar os pontos abaixo.",
  },
  {
    slug: "lac-transporte-produtos-perigosos",
    shortTitle: "LAC para transporte rodoviário de produtos perigosos",
    eyebrow: "Licenciamento estadual para transportadoras",
    metaTitle: "LAC para Transporte de Produtos Perigosos | Envora",
    metaDescription: "Avalie se a LAC prevista na IN IMA nº 77 se aplica à operação rodoviária da transportadora exclusivamente em Santa Catarina.",
    title: "Sua operação rodoviária acontece só em Santa Catarina?",
    intro: "A IN IMA nº 77 trata do licenciamento por adesão e compromisso para operações rodoviárias enquadradas e realizadas exclusivamente em Santa Catarina. A Envora avalia o enquadramento antes de definir o escopo.",
    image: "/mtr-documentacao-visual.webp",
    imageAlt: "Caminhão em área operacional, em imagem ilustrativa; a imagem não representa uma transportadora atendida pela Envora",
    action: "Avaliar minha operação",
    message: "Olá! Preciso conversar sobre LAC para transporte rodoviário de produtos perigosos em SC. Minha empresa transporta [produto] e a operação ocorre [exclusivamente em SC/outra situação].",
    situations: ["Transportadora com operação rodoviária em SC", "Verificar se a rota da IN IMA nº 77 se aplica", "Entender o escopo técnico antes da contratação"],
    whatIs: [
      "A LAC é uma modalidade estadual de licenciamento ambiental por adesão e compromisso. A IN IMA nº 77 trata do transporte rodoviário de produtos perigosos exclusivamente dentro de Santa Catarina, conforme os critérios aplicáveis.",
      "A página é voltada a empresas transportadoras. A operação e o enquadramento precisam ser avaliados; não se presume que todo transportador precise da mesma licença.",
    ],
    audience: [
      "Transportadoras que realizam operação rodoviária de produtos perigosos exclusivamente dentro de Santa Catarina e querem avaliar a aplicação da IN IMA nº 77.",
      "Esta rota não cobre, por si só, trechos de transporte fora do estado. Operações com resíduos ou rejeitos perigosos precisam de confirmação específica de escopo.",
    ],
    deliverablesIntro: "A Envora primeiro avalia o enquadramento da transportadora. As entregas seguintes dependem da habilitação e do escopo operacional confirmados.",
    deliverables: [
      "Análise inicial das rotas, produtos e informações fornecidas pela transportadora.",
      "Delimitação, em proposta, das etapas técnicas que a Envora efetivamente assumir.",
      "[CONFIRMAR: elaboração do RCE, protocolo e acompanhamento do processo fazem parte da oferta?]",
    ],
    process: [
      "Entender produtos, operação, frota e trajetos realizados.",
      "Avaliar se a operação descrita corresponde à hipótese e aos critérios da IN IMA nº 77.",
      "Definir na proposta as atividades técnicas e o apoio de processo que a Envora efetivamente oferecer.",
    ],
    clientIntro: "Para a avaliação inicial, ajudam:",
    clientItems: [
      "Razão social, CNPJ e descrição da atividade transportadora.",
      "Produtos transportados e rotas realizadas, informando se há trechos fora de SC.",
      "Frota, licenças ou processos ambientais existentes e documentos já disponíveis.",
    ],
    dependencyIntro: "O enquadramento, a análise e a decisão sobre licença cabem ao IMA.",
    dependencyItems: [
      "O processo depende das declarações e informações da transportadora, dos critérios do órgão e dos sistemas disponíveis.",
      "Documentos técnicos e responsabilidades precisam ser confirmados após delimitar o escopo.",
      "Se houver trechos fora de SC, outras rotas ou requisitos podem precisar de avaliação independente.",
    ],
    notIncludedIntro: "A LAC desta página tem limite territorial e de escopo.",
    notIncludedItems: [
      "Licenciamento de operações ou trechos fora de Santa Catarina.",
      "Outras autorizações e requisitos de transporte, segurança ou regularização veicular.",
      "Promessa de emissão ou aprovação da licença.",
    ],
    questions: [
      { question: "Toda transportadora de produtos perigosos precisa de LAC?", answer: "Não se deve presumir. É necessário avaliar a atividade, a operação e os critérios aplicáveis." },
      { question: "A IN IMA nº 77 cobre viagens para outros estados?", answer: "A rota tratada nesta página é a operação rodoviária exclusivamente dentro de Santa Catarina. Trechos fora do estado exigem avaliação própria." },
      { question: "A Envora garante a emissão da LAC?", answer: "Não. A análise e a decisão sobre a licença cabem ao IMA." },
      { question: "O que devo enviar para a conversa inicial?", answer: "Uma descrição dos produtos, das rotas e da frota, informando se há trechos fora de Santa Catarina." },
      { question: "A Envora atende transporte de resíduos perigosos?", answer: "[CONFIRMAR: a oferta inclui resíduos ou rejeitos perigosos, ou se limita a produtos perigosos.]" },
    ],
    confirmations: [
      "Qual responsável técnico, habilitação e escopo operacional a Envora oferece?",
      "O atendimento inclui protocolo e acompanhamento? Quais etapas entram na proposta?",
      "A oferta se limita a produtos perigosos ou também abrange resíduos/rejeitos perigosos?",
      "Quais documentos serão solicitados após a avaliação inicial?",
      "Quais custos de terceiros, se houver, ficam fora do escopo?",
    ],
    sources: [
      { label: "IMA/SC — Instrução Normativa nº 77", url: "https://in.ima.sc.gov.br/instrucaoNormativa/downloadPDF/54" },
      { label: "IMA/SC — modalidades de licenciamento", url: "https://in.ima.sc.gov.br/instrucaoNormativa/visualizar/331" },
    ],
  },
];

export const commercialServiceDraftBySlug = new Map(commercialServiceDrafts.map((page) => [page.slug, page]));
