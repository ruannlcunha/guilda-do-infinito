import { PERFIL, SPRITES } from "../../../constants/images";

export const _BASE_ORIGINAL = {
    id: 1,
    nome: "Base",
    elemento: "FOGO",
    arma: "PESADA",
    comportamento: "ATACANTE",
    corTema: "tema-amarelo",
    estrelas: 5,
    visuais:[
        {
            visualId: 1,
            sprite: SPRITES.AYLA,
            perfil: PERFIL.AYLA,
        },
    ],
    status: {
        pvBase: 0,
        pmBase: 0,
        pvBonus: 0,
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 100,
            pv: 15,
            pm: 10,
            atributos: {
                forca: 4,
                agilidade: 1,
                magia: 2,
                vigor: 3,
            },
            talentos: [],
            ataques: [1],
            habilidades: [1],
        }
    ],
    equipamentosProntos: [
        {
            id: 1,
            nome: "Nenhum",
            arma: null,
            armadura: null,
            acessorio1: null,
            acessorio2: null,
            consumiveis: [],
        },
        {
            id: 2,
            nome: "Kit de Combatente 3*",
            arma: 4,
            armadura: 7,
            acessorio1: 9,
            acessorio2: null,
            consumiveis: [
                {itemId: 12, quantidade: 1},
            ],
        },
        {
            id: 3,
            nome: "Kit de Combatente 4*",
            arma: 21,
            armadura: 30,
            acessorio1: 10,
            acessorio2: 46,
            consumiveis: [
                {itemId: 12, quantidade: 1},
                {itemId: 13, quantidade: 1},
            ],
        },
        {
            id: 4,
            nome: "Kit de Combatente 5*",
            arma: 6,
            armadura: 8,
            acessorio1: 11,
            acessorio2: 36,
            consumiveis: [
                {itemId: 12, quantidade: 1},
                {itemId: 13, quantidade: 1},
                {itemId: 14, quantidade: 1},
            ],
        },
        {
            id: 5,
            nome: "Kit de Atirador 3*",
            arma: 18,
            armadura: 7,
            acessorio1: 9,
            acessorio2: null,
            consumiveis: [
                {itemId: 12, quantidade: 1},
            ],
        },
        {
            id: 6,
            nome: "Kit de Atirador 4*",
            arma: 17,
            armadura: 30,
            acessorio1: 10,
            acessorio2: 37,
            consumiveis: [
                {itemId: 12, quantidade: 1},
                {itemId: 13, quantidade: 1},
            ],
        },
        {
            id: 7,
            nome: "Kit de Atirador 5*",
            arma: 57,
            armadura: 8,
            acessorio1: 11,
            acessorio2: 56,
            consumiveis: [
                {itemId: 12, quantidade: 1},
                {itemId: 13, quantidade: 1},
                {itemId: 14, quantidade: 1},
            ],
        },
        {
            id: 8,
            nome: "Kit de Conjurador 3*",
            arma: 20,
            armadura: 50,
            acessorio1: 9,
            acessorio2: null,
            consumiveis: [
                {itemId: 12, quantidade: 1},
            ],
        },
        {
            id: 9,
            nome: "Kit de Conjurador 4*",
            arma: 47,
            armadura: 51,
            acessorio1: 10,
            acessorio2: 53,
            consumiveis: [
                {itemId: 12, quantidade: 1},
                {itemId: 13, quantidade: 1},
            ],
        },
        {
            id: 10,
            nome: "Kit de Conjurador 5*",
            arma: 48,
            armadura: 52,
            acessorio1: 11,
            acessorio2: 54,
            consumiveis: [
                {itemId: 12, quantidade: 1},
                {itemId: 13, quantidade: 1},
                {itemId: 14, quantidade: 1},
            ],
        },
    ]
}