// Dados públicos da Envora usados no rodapé e no schema.
// CNPJ e CREA só aparecem no site quando preenchidos.
export const BUSINESS = {
  name: "Envora Consultoria Ambiental",
  phoneDisplay: "(47) 98494-0063",
  phoneHref: "tel:+5547984940063",
  phoneSchema: "+55 47 98494-0063",
  email: "envoraambiental@gmail.com",
  responsible: "Eduardo Karnopp",
  responsibleTitle: "Engenheiro Ambiental e Sanitarista",
  crea: "", // ex.: "CREA-SC 000000-0"
  cnpj: "", // ex.: "00.000.000/0001-00"
  citiesServed: ["Joinville", "Jaraguá do Sul", "Araquari", "São Francisco do Sul", "Garuva", "Guaramirim", "Itapoá", "Barra Velha"],
} as const;
