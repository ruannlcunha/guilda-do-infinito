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
    MENTAL: "MENTAL",
}
export const ELEMENTOS_NOMES = {
    FOGO: "Fogo",
    AGUA: "Água",
    ACIDO: "Ácido",
    ELETRICO: "Elétrico",
    AR: "Ar",
    TERRA: "Terra",
    GELO: "Gelo",
    LUZ: "Luz",
    TREVAS: "Trevas",
    NULO: "Nulo",
    ESSENCIA: "Essência",
    FISICO: "Físico",
    MENTAL: "Mental",
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
    ACAO: "ACAO",
}

export const RESISTENCIA_DANO = {
    FOGO: "RESISTENCIA_FOGO",
    AGUA: "RESISTENCIA_AGUA",
    ACIDO: "RESISTENCIA_ACIDO",
    ELETRICO: "RESISTENCIA_ELETRICO",
    AR: "RESISTENCIA_AR",
    TERRA: "RESISTENCIA_TERRA",
    GELO: "RESISTENCIA_GELO",
    LUZ: "RESISTENCIA_LUZ",
    TREVAS: "RESISTENCIA_TREVAS",
    ESSENCIA: "RESISTENCIA_ESSENCIA",
    FISICO: "RESISTENCIA_FISICO",
    MENTAL: "RESISTENCIA_MENTAL",
}

export const BONUS_DADO = {
    ATAQUE: "ATAQUE",
    CONJURACAO: "CONJURACAO",
    DANO: "DANO",
    CURA: "CURA",
    RESISTENCIA_FORCA: "RESISTENCIA_FORCA",
    RESISTENCIA_AGILIDADE: "RESISTENCIA_AGILIDADE",
    RESISTENCIA_MAGIA: "RESISTENCIA_MAGIA",
    RESISTENCIA_VIGOR: "RESISTENCIA_CURA",
}

export const COMPORTAMENTOS = {
    ATACANTE_FEROZ: "ATACANTE_FEROZ",
    ATACANTE_ESPERTO: "ATACANTE_ESPERTO",
    SUPORTE_ESPERTO: "SUPORTE_ESPERTO",
    SUPORTE_MEDICO: "SUPORTE_MEDICO",
}

export const IMUNIDADE_TIPO = {
    DANO: "DANO",
    CONDICAO: "CONDICAO",
}

export const CONDICOES = {
    ENVENENADO: {
        nome: "Envenenado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Recebe 1d4 de dano por rodada até acabar o número de rodadas do efeito, ou então usar um item de antídoto.",
        icon: ICONS.CONDICAO_ENVENENADO,
        duracao: 1,
        duracaoTitulo: "Turnos",
    },
    QUEIMANDO: {
        nome: "Queimando",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Recebe 1d6 de dano por rodada até usar uma ação para apagar o fogo.",
        icon: ICONS.CONDICAO_QUEIMANDO,
    },
    CONGELADO: {
        nome: "Congelado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Não pode se mover, ah não ser que em seu turno ele consiga quebrar o gelo ou sofra dano de Fogo.",
        icon: ICONS.CONDICAO_CONGELADO,
        dificuldade: 10,
    },
    PARALISADO: {
        nome: "Paralisado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Não pode agir, mas só dura 1 turno.",
        icon: ICONS.CONDICAO_PARALISADO,
        duracao: 1,
        duracaoTitulo: "Turnos",
    },
    DORMINDO: {
        nome: "Dormindo",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Não pode fazer nada no turno. Duração por turnos. Caso seja atacado ele acorda",
        icon: ICONS.CONDICAO_DORMINDO,
        duracao: 1,
        duracaoTitulo: "Turnos",
    },
    ATORDOADO: {
        nome: "Atordoado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Tem 25% de chance de não conseguir realizar a ação.",
        icon: ICONS.CONDICAO_ATORDOADO,
        duracao: 1,
        duracaoTitulo: "Turnos",
        acaoBloqueada: false,
    },
    LENTO: {
        nome: "Lento",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Personagem sofre -1 em Agilidade e tem seu turno atrasado.",
        icon: ICONS.CONDICAO_LENTO,
        duracao: 1,
        duracaoTitulo: "Turnos",
    },
    VELOZ: {
        nome: "Veloz",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Personagem recebe +1 em Agilidade e tem seu turno adiantado.",
        icon: ICONS.CONDICAO_VELOZ,
        duracao: 1,
        duracaoTitulo: "Turnos",
    },
    ARMADURA_MAGICA: {
        nome: "Armadura Mágica",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Personagem recebe +2 em Defesa até o fim do combate.",
        icon: ICONS.CONDICAO_ARMADURA_MAGICA,
    },
    DUPLICATAS: {
        nome: "Duplicatas",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Sob efeito da habilidade Duplicata Ilusória. Recebe +6 de Defesa, mas perde 2 do bônus a cada tentativa de golpe sofrido.",
        icon: ICONS.CONDICAO_DUPLICATAS,
        duracao: 3,
        duracaoTitulo: "Clones",
    },
    ABENCOADO: {
        nome: "Abençoado",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Sob efeito da habilidade Benção Divina. Recebe +1 em Ataque, Conjuração e Dano.",
        icon: ICONS.CONDICAO_ABENCOADO,
    },
    AMALDICOADO: {
        nome: "Amaldiçoado",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Sob efeito da habilidade Lançar Maldição. Recebe -1 em Ataque, Conjuração e Dano.",
        icon: ICONS.CONDICAO_AMALDICOADO,
    },
    ATAQUE_ESPECIAL: {
        nome: "Ataque Especial",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "Sob efeito da habilidade Ataque Especial. Recebe +4 em Ataque.",
        icon: ICONS.CONDICAO_ATAQUE_ESPECIAL,
        duracao: 1,
        duracaoTitulo: "Turnos",
    },
    SORTUDO: {
        nome: "Sortudo",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.FISICA,
        descricao: "A sorte está ao seu favor. Personagem recebe +1 em Defesa, Ataque, Conjuração e testes de resistência.",
        icon: ICONS.CONDICAO_SORTUDO,
        duracao: 4,
        duracaoTitulo: "Turnos",
    },
    PROTEGIDO: {
        nome: "Protegido",
        tipo: TIPO_CONDICAO.BUFF,
        categoria: CATEGORIA_CONDICAO.ACAO,
        descricao: ".",
        icon: ICONS.CONDICAO_PROTEGIDO,
        protetorId: null,
    },
    PROTEGENDO: {
        nome: "Protegendo",
        tipo: TIPO_CONDICAO.DEBUFF,
        categoria: CATEGORIA_CONDICAO.ACAO,
        descricao: ".",
        icon: ICONS.CONDICAO_PROTEGENDO,
        protegidoId: null,
    },
}
