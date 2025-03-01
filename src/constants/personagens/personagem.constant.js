import { ICONS } from "../images"

export const COR_TEMA = {
    AMARELO: "tema-amarelo",
    AZUL: "tema-azul",
    CIANO: "tema-ciano",
    ROXO: "tema-roxo",
    ROXO_ESCURO: "tema-roxo-escuro",
    ROSA: "tema-rosa",
    PRETO: "tema-preto",
    CINZA: "tema-cinza",
    BRANCO: "tema-branco",
    TURQUESA: "tema-turquesa",
    VERDE: "tema-verde",
    VERDE_ESCURO: "tema-verde-escuro",
    LARANJA: "tema-laranja",
    VERMELHO: "tema-vermelho",
}

export const ELEMENTOS = {
    FOGO: "FOGO",
    AGUA: "AGUA",
    ACIDO: "ACIDO",
    ELETRICO: "ELETRICO",
    AR: "AR",
    TERRA: "TERRA",
    GELO: "GELO",
    LUZ: "LUZ",
    TREVAS: "TREVAS",
    NULO: "NULO",
    ESSENCIA: "ESSENCIA",
    FISICO: "FISICO",
}

export const ELEMENTOS_REACOES = {
    FOGO: {vantagem: ELEMENTOS.GELO, desvantagem: ELEMENTOS.AGUA},
    AGUA: {vantagem: ELEMENTOS.FOGO, desvantagem: ELEMENTOS.ELETRICO},
    ACIDO: {vantagem: ELEMENTOS.TERRA, desvantagem: ELEMENTOS.AR},
    ELETRICO: {vantagem: ELEMENTOS.AGUA, desvantagem: ELEMENTOS.TERRA},
    AR: {vantagem: ELEMENTOS.ACIDO, desvantagem: ELEMENTOS.GELO},
    TERRA: {vantagem: ELEMENTOS.ELETRICO, desvantagem: ELEMENTOS.ACIDO},
    GELO: {vantagem: ELEMENTOS.AR, desvantagem: ELEMENTOS.FOGO},
    LUZ: {vantagem: ELEMENTOS.TREVAS, desvantagem: ELEMENTOS.TREVAS},
    TREVAS: {vantagem: ELEMENTOS.LUZ, desvantagem: ELEMENTOS.LUZ},
    ESSENCIA: {vantagem: null, desvantagem: null},
    FISICO: {vantagem: null, desvantagem: null},
}

export const TIPO_CONDICAO = {
    BUFF: "BUFF",
    DEBUFF: "DEBUFF",
}

export const CATEGORIA_CONDICAO = {
    FISICA: "FISICA",
    MENTAL: "MENTAL",
}

export const CONDICOES = {
    ENVENENADO: {
        nome: "Envenenado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        icon: ICONS.CONDICAO_ENVENENADO,
        turnos: 1,
    },
    QUEIMANDO: {
        nome: "Queimando",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        icon: ICONS.CONDICAO_QUEIMANDO,
    },
    CONGELADO: {
        nome: "Congelado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        icon: ICONS.CONDICAO_CONGELADO,
        dificuldade: 10,
    },
    PARALISADO: {
        nome: "Paralisado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        icon: ICONS.CONDICAO_PARALISADO,
        turnos: 1,
    },
    DORMINDO: {
        nome: "Dormindo",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        icon: ICONS.CONDICAO_DORMINDO,
        turnos: 1,
    },
}