import type { ContentArticle } from "./content-data";

export const carbonArticles: ContentArticle[] = [
  {
    slug: "creditos-de-carbono-como-avaliar",
    category: "Mercado de carbono",
    title: "Créditos de carbono: o que verificar antes de comprar?",
    description: "Entenda o que representa um crédito de carbono e como avaliar projeto, metodologia, registro e alegações climáticas antes da compra.",
    publishedAt: "2026-10-15",
    readingTime: "5 min",
    lead: "Comprar créditos não substitui medir e reduzir as emissões da empresa. Antes da aquisição, é preciso saber qual resultado está sendo financiado e se o crédito sustenta a alegação pretendida.",
    sections: [
      {
        title: "O que representa um crédito de carbono?",
        paragraphs: [
          "A Lei nº 15.042/2024 define crédito de carbono como um ativo que representa a retenção, redução ou remoção efetiva de uma tonelada de dióxido de carbono equivalente (tCO₂e), obtida por projeto ou programa submetido a metodologia com critérios de mensuração, relato e verificação. O CO₂e permite expressar diferentes gases de efeito estufa em uma unidade comum.",
          "A mesma lei instituiu o Sistema Brasileiro de Comércio de Emissões (SBCE), cuja implementação é gradual. Crédito de carbono, Cota Brasileira de Emissões e Certificado de Redução ou Remoção Verificada de Emissões têm definições e usos próprios na legislação; não devem ser tratados como sinônimos. A compra de créditos, por si só, também não comprova que uma empresa cumpriu toda obrigação ambiental ou climática aplicável."
        ]
      },
      {
        title: "Avalie a integridade do projeto",
        paragraphs: [
          "O nome ou o tipo de projeto — florestal, energético ou de resíduos, por exemplo — não basta para demonstrar a qualidade de um crédito. É necessário consultar a metodologia, os documentos do projeto e o registro que identifica as unidades emitidas. Referenciais de integridade, como os Core Carbon Principles do ICVCM, destacam rastreabilidade, transparência, verificação independente, adicionalidade, quantificação robusta, permanência e prevenção de dupla contagem.",
          "Na prática, a análise deve responder a perguntas como estas:"
        ],
        bullets: [
          "Qual metodologia foi usada e qual cenário de referência foi adotado?",
          "Como se demonstra que a redução ou remoção é adicional ao que ocorreria sem o projeto?",
          "Quem validou e verificou os resultados, e onde estão os relatórios?",
          "Qual é o risco de reversão, vazamento de emissões ou dupla contagem?",
          "O registro identifica cada unidade e permite conferir emissão, titularidade e cancelamento?",
          "Há salvaguardas socioambientais e clareza sobre direitos e participação das comunidades envolvidas?"
        ]
      },
      {
        title: "Defina a alegação antes da aquisição",
        paragraphs: [
          "Antes de escolher um crédito, delimite o que a organização pretende comunicar: qual empresa, unidade, produto ou evento está abrangido; qual período foi avaliado; que quantidade foi emitida; e que parte das emissões foi reduzida diretamente ou compensada. A alegação precisa corresponder aos dados e às unidades efetivamente canceladas para aquele uso.",
          "Expressões amplas, como “empresa carbono neutro”, exigem critérios claros, inventário compatível e comprovação para o escopo anunciado. Um projeto que remove carbono não torna automaticamente neutra toda a operação de quem comprou créditos. A comunicação deve informar limites, período, método e papel dos créditos, sem sugerir que a compra eliminou as emissões na fonte."
        ]
      },
      {
        title: "Créditos são uma ferramenta complementar",
        paragraphs: [
          "Uma sequência tecnicamente mais consistente começa por identificar e quantificar as emissões, buscar reduções operacionais e acompanhar os resultados. Créditos podem integrar uma estratégia climática definida, mas não substituem o inventário nem as medidas viáveis de redução. O enquadramento de uma obrigação regulatória ou de uma alegação pública deve ser conferido segundo a regra e o padrão aplicáveis ao caso.",
          "No Brasil, a Lei nº 15.042/2024 prevê implementação gradual do SBCE. Por isso, não se deve presumir que toda empresa esteja sujeita às mesmas obrigações ou que qualquer crédito voluntário sirva para cumprir uma obrigação regulada. Antes de firmar contrato ou divulgar uma meta, verifique a natureza do ativo, o registro, as regras de uso e a evidência que será mantida."
        ]
      }
    ],
    conclusion: "Primeiro defina o escopo da alegação e conheça as emissões da operação. Depois, avalie metodologia, verificação, registro e cancelamento do crédito. Essa ordem reduz o risco de comprar uma unidade incompatível com a finalidade ou divulgar um resultado que os documentos não sustentam.",
    faq: [
      {
        question: "Uma empresa precisa comprar créditos de carbono?",
        answer: "Não existe uma resposta universal. A necessidade depende de obrigações regulatórias aplicáveis, compromissos assumidos e da estratégia de cada organização. Créditos não devem ser comprados apenas porque uma empresa atua em determinado setor."
      },
      {
        question: "Comprar créditos torna a empresa carbono neutra?",
        answer: "Não automaticamente. A alegação precisa ter limites, período, inventário e unidades canceladas compatíveis. A compra não apaga as emissões geradas nem substitui medidas de redução."
      },
      {
        question: "Crédito de projeto florestal é sempre de alta qualidade?",
        answer: "Não. O tipo de projeto não comprova, sozinho, adicionalidade, quantificação, permanência, rastreabilidade ou salvaguardas. Esses critérios precisam ser avaliados na documentação e na metodologia usadas."
      }
    ],
    relatedLinks: [
      { label: "Inventário de GEE: primeiro medir, depois compensar", href: "/conteudos/inventario-de-gee-primeiro-medir" }
    ],
    sources: [
      { label: "Planalto — Lei nº 15.042/2024, que institui o SBCE", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15042.htm" },
      { label: "Ministério da Fazenda — Secretaria Extraordinária do Mercado de Carbono", url: "https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono" },
      { label: "ICVCM — Core Carbon Principles", url: "https://icvcm.org/core-carbon-principles/" }
    ]
  },
  {
    slug: "inventario-de-gee-primeiro-medir",
    category: "Gestão de emissões",
    title: "Inventário de GEE: primeiro medir, depois compensar",
    description: "Veja como um inventário de gases de efeito estufa organiza fontes, limites e dados para orientar decisões de redução e avaliar créditos de carbono.",
    publishedAt: "2026-10-15",
    readingTime: "5 min",
    lead: "Sem conhecer as fontes e os limites da operação, metas podem deixar emissões relevantes de fora — e a compra de créditos não mostra onde reduzir.",
    sections: [
      {
        title: "O que um inventário mostra",
        paragraphs: [
          "O inventário de gases de efeito estufa (GEE) estima e organiza as emissões de uma organização dentro de limites definidos. O resultado costuma ser expresso em toneladas de dióxido de carbono equivalente (tCO₂e), unidade que permite somar diferentes gases conforme seus potenciais de aquecimento global.",
          "O GHG Protocol organiza as emissões corporativas em três escopos. Essa divisão ajuda a separar o que ocorre em fontes próprias ou controladas daquilo que está ligado à energia comprada e à cadeia de valor."
        ],
        table: {
          headers: ["Escopo", "O que abrange", "Exemplos usuais"],
          rows: [
            ["1", "Emissões diretas de fontes próprias ou controladas", "Combustão em equipamentos e veículos da empresa; vazamentos de gases refrigerantes"],
            ["2", "Emissões indiretas associadas à energia adquirida", "Eletricidade comprada e consumida pela organização"],
            ["3", "Outras emissões indiretas da cadeia de valor", "Compras, transporte contratado, viagens, resíduos e uso ou destinação de produtos, conforme relevância e metodologia"]
          ]
        }
      },
      {
        title: "Comece por limites e dados rastreáveis",
        paragraphs: [
          "Antes de calcular, defina quais empresas, unidades, operações e fontes entram no inventário e qual período será analisado. A organização também precisa registrar os critérios de consolidação e explicar exclusões relevantes. Sem esses limites, comparar um ano com outro pode levar a conclusões erradas.",
          "Depois, reúna dados de atividade que possam ser rastreados: consumo de combustíveis, eletricidade, gases refrigerantes, transporte, viagens, compras e resíduos, entre outros conforme o perfil da operação. Cada dado deve ter unidade, período, origem e responsável. A estimativa combina esses dados com fatores de emissão apropriados; método, versão das fontes, premissas e incertezas precisam ficar documentados para permitir revisão e atualização."
        ],
        bullets: [
          "Escolha e documente o ano-base e os limites organizacionais.",
          "Identifique fontes diretas, energia adquirida e categorias relevantes da cadeia de valor.",
          "Guarde faturas, registros operacionais e critérios usados para tratar lacunas.",
          "Mantenha fatores de emissão, cálculos, exclusões e justificativas junto ao inventário.",
          "Revise mudanças em instalações, atividade, capacidade, dados e metodologia antes de comparar períodos."
        ]
      },
      {
        title: "Da linha de base às medidas de redução",
        paragraphs: [
          "O valor total é apenas um começo. A análise por fonte e escopo ajuda a localizar os principais pontos de emissão, testar oportunidades de eficiência, definir responsáveis e acompanhar se as medidas adotadas produziram redução. Uma empresa pode, por exemplo, avaliar consumo de combustível, perdas de refrigerante ou requisitos de dados para fornecedores, conforme os resultados do próprio inventário.",
          "Repetir o levantamento de forma consistente permite observar tendências e explicar alterações de atividade ou de limites. O inventário, por si só, não reduz emissões, não equivale a uma certificação e não prova neutralidade. Seu valor está em tornar a informação verificável e útil para decisões."
        ]
      },
      {
        title: "Onde entram os créditos de carbono",
        paragraphs: [
          "Créditos e inventários respondem a perguntas diferentes. O inventário contabiliza emissões organizacionais dentro de um limite e período; o crédito representa uma redução ou remoção atribuída a uma atividade, conforme metodologia e sistema de registro. Por isso, não se deve simplesmente subtrair créditos do total inventariado e apresentar o saldo como se a organização tivesse deixado de emitir aquela quantidade.",
          "Se a empresa decidir usar créditos em uma estratégia ou alegação, deve definir previamente o escopo, documentar a redução direta, avaliar a integridade do projeto e manter evidência de cancelamento das unidades usadas. A comunicação precisa explicar claramente o papel da compensação e não pode substituir um plano de redução na operação."
        ]
      },
      {
        title: "A obrigação depende do enquadramento aplicável",
        paragraphs: [
          "Um inventário pode ser voluntário, solicitado por clientes ou financiadores, ou estar relacionado a uma exigência específica. A Lei nº 15.042/2024 instituiu o Sistema Brasileiro de Comércio de Emissões e prevê sua implementação gradual; a aplicação de obrigações depende das regras vigentes e do enquadramento da instalação ou do operador. Não se deve concluir que toda empresa precisa reportar emissões ao SBCE sem verificar os critérios aplicáveis.",
          "O Programa Brasileiro GHG Protocol, coordenado pelo FGVces, oferece metodologia, ferramentas e orientações para inventários corporativos no contexto brasileiro. A escolha da abordagem deve considerar a finalidade do inventário, o padrão requerido e a capacidade da organização de manter dados consistentes ao longo do tempo."
        ]
      }
    ],
    conclusion: "Um inventário útil começa com limites claros, dados rastreáveis e metodologia documentada. Use os resultados para identificar fontes prioritárias e planejar reduções; avalie créditos apenas depois de entender o que foi medido e qual alegação se pretende sustentar.",
    faq: [
      {
        question: "Toda empresa precisa elaborar um inventário de GEE?",
        answer: "Não é possível afirmar uma obrigação geral para todas as empresas. A necessidade pode vir de uma regra aplicável, de contratos, de exigências de clientes ou de uma decisão voluntária. Verifique o enquadramento e a finalidade antes de definir o escopo."
      },
      {
        question: "O inventário precisa incluir o Escopo 3?",
        answer: "O Escopo 3 reúne emissões indiretas da cadeia de valor e pode representar fontes relevantes. Sua avaliação depende do objetivo, do padrão adotado, da disponibilidade de dados e da materialidade das categorias. Exclusões precisam ser justificadas e documentadas."
      },
      {
        question: "Créditos de carbono substituem o inventário?",
        answer: "Não. O inventário mede emissões dentro de limites organizacionais; créditos são unidades associadas a reduções ou remoções de projetos. Uma estratégia pode tratar ambos, mas deve manter contabilização e comunicação transparentes."
      }
    ],
    relatedLinks: [
      { label: "Créditos de carbono: o que verificar antes de comprar?", href: "/conteudos/creditos-de-carbono-como-avaliar" }
    ],
    sources: [
      { label: "GHG Protocol — padrões para inventários corporativos e cadeia de valor", url: "https://ghgprotocol.org/standards" },
      { label: "FGV EAESP — Programa Brasileiro GHG Protocol", url: "https://eaesp.fgv.br/centros/centro-estudos-sustentabilidade/projetos/programa-brasileiro-ghg-protocol" },
      { label: "Planalto — Lei nº 15.042/2024, que institui o SBCE", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15042.htm" }
    ]
  }
];
