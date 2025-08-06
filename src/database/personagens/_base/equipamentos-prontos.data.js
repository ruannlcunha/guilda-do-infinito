import { CONSUMIVEIS } from "../../itens/consumiveis";
import { EQUIPAMENTOS } from "../../itens/equipamentos";

export const equipamentosProntosData = [
  {
    id: 1,
    nome: "Nenhum",
    arma: null,
    armadura: null,
    acessorio1: null,
    acessorio2: null,
    consumiveis: []
  },
  {
    id: 2,
    nome: "Kit de Combatente 3*",
    arma: EQUIPAMENTOS.ESPADA_FERRO.id,
    armadura: EQUIPAMENTOS.ARMADURA_FERRO.id,
    acessorio1: EQUIPAMENTOS.ESCUDO_MADEIRA.id,
    acessorio2: null,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 }
    ]
  },
  {
    id: 3,
    nome: "Kit de Combatente 4*",
    arma: EQUIPAMENTOS.ESPADA_CRISTAL.id,
    armadura: EQUIPAMENTOS.ARMADURA_ADAMANTE.id,
    acessorio1: EQUIPAMENTOS.ESCUDO_FERRO.id,
    acessorio2: EQUIPAMENTOS.ANEL_DRAGAO.id,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO_MAIOR.id, quantidade: 1 }
    ]
  },
  {
    id: 4,
    nome: "Kit de Combatente 5*",
    arma: EQUIPAMENTOS.DEVORADORA_ALMAS.id,
    armadura: EQUIPAMENTOS.ARMADURA_DIVINA.id,
    acessorio1: EQUIPAMENTOS.ESCUDO_SOLAR.id,
    acessorio2: EQUIPAMENTOS.ANEL_DRAGAO.id,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_SUPREMA, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_SUPREMA.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_SUPREMO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.TREVO_SORTE.id, quantidade: 1 }
    ]
  },
  {
    id: 5,
    nome: "Kit de Atirador 3*",
    arma: EQUIPAMENTOS.ARCO_MADEIRA.id,
    armadura: null,
    acessorio1: EQUIPAMENTOS.ANEL_VIGOR.id,
    acessorio2: null,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 }
    ]
  },
  {
    id: 6,
    nome: "Kit de Atirador 4*",
    arma: EQUIPAMENTOS.ARCO_CRISTAL.id,
    armadura: EQUIPAMENTOS.ARMADURA_FERRO.id,
    acessorio1: EQUIPAMENTOS.ANEL_VIGOR_PRATA.id,
    acessorio2: EQUIPAMENTOS.ANEL_SERPENTE.id,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO_MAIOR.id, quantidade: 1 }
    ]
  },
  {
    id: 7,
    nome: "Kit de Atirador 5*",
    arma: EQUIPAMENTOS.ANJO_CAIDO.id,
    armadura: EQUIPAMENTOS.ARMADURA_FLORESTA.id,
    acessorio1: EQUIPAMENTOS.BOTAS_MENSAGEIRO.id,
    acessorio2: EQUIPAMENTOS.ANEL_VIGOR_DOURADO.id,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_SUPREMA, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_SUPREMA.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_SUPREMO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.TREVO_SORTE.id, quantidade: 1 }
    ]
  },
  {
    id: 8,
    nome: "Kit de Conjurador 3*",
    arma: EQUIPAMENTOS.CAJADO_MADEIRA.id,
    armadura: EQUIPAMENTOS.MANTO_VELHO.id,
    acessorio1: EQUIPAMENTOS.COLAR_AMETISTA.id,
    acessorio2: null,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 }
    ]
  },
  {
    id: 9,
    nome: "Kit de Conjurador 4*",
    arma: EQUIPAMENTOS.CAJADO_CRISTAL.id,
    armadura: EQUIPAMENTOS.MANTO_ELFICO.id,
    acessorio1: EQUIPAMENTOS.COLAR_AMETISTA.id,
    acessorio2: EQUIPAMENTOS.ANEL_GELO.id,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO_MAIOR.id, quantidade: 1 }
    ]
  },
  {
    id: 10,
    nome: "Kit de Conjurador 5*",
    arma: EQUIPAMENTOS.CAJADO_SOMBRIO.id,
    armadura: EQUIPAMENTOS.MANTO_LUXUOSO.id,
    acessorio1: EQUIPAMENTOS.COLAR_DEMONIACO.id,
    acessorio2: EQUIPAMENTOS.COLAR_CELESTIAL.id,
    consumiveis: [
      { itemId: CONSUMIVEIS.POCAO_CURA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_CURA_SUPREMA, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.POCAO_MANA_SUPREMA.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MENOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.ELIXIR_SUPREMO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.VENENO_MAIOR.id, quantidade: 1 },
      { itemId: CONSUMIVEIS.TREVO_SORTE.id, quantidade: 1 }
    ]
  }
];
