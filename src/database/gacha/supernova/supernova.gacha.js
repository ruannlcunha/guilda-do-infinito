import SUPERNOVA_PREVIEW from "./assets/SUPERNOVA_PREVIEW.png"
import SUPERNOVA_BANNER from "./assets/SUPERNOVA_BANNER.png"
import { ICONS } from "../../../constants/images"
import { RECOMPENSAS_TIPO } from "../../../constants"
import { EQUIPAMENTOS_DATA } from "../../itens/equipamentos"
import { instanciarPersonagem } from "../../../utils"
import personagemBase from "../../personagens/_base/_base-pessoal.personagem.json"

const personagensDisponiveis = {
    AYLA: instanciarPersonagem({...personagemBase, personagemId: 2}),
    ANDY: instanciarPersonagem({...personagemBase, personagemId: 12}),
}

export const SUPERNOVA = {
    id: 1,
    nome: "Ápice da Supernova",
    preview: SUPERNOVA_PREVIEW,
    banner: SUPERNOVA_BANNER,
    possibilidades: [
        {
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
            raridade: 5,
            probMin: 1,
            probMax: 5,
        },
        {
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 5,
            probMin: 6,
            probMax: 10,
        },
        {
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
            raridade: 4,
            probMin: 11,
            probMax: 30,
        },
        {
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 4,
            probMin: 31,
            probMax: 50,
        },
        {
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 3,
            probMin: 51,
            probMax: 100,
        },
    ],
    recompensas: [
        {
            nome: "Ayla",
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
            raridade: 5,
            brilho: ICONS.BRILHO_AMARELO,
            recompensa: personagensDisponiveis.AYLA,
        },
        {
            nome: "Andy",
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
            raridade: 4,
            brilho: ICONS.BRILHO_ROXO,
            recompensa: personagensDisponiveis.ANDY,
        },
        {
            nome: "Matadora de Dragões",
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 5,
            brilho: ICONS.BRILHO_AMARELO,
            recompensa: EQUIPAMENTOS_DATA.MATADORA_DRAGOES,
        },
        {
            nome: "Espada de Adamante",
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 4,
            brilho: ICONS.BRILHO_ROXO,
            recompensa: EQUIPAMENTOS_DATA.ESPADA_ADAMANTE,
        },
        {
            nome: "Espada de Ferro",
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 3,
            brilho: ICONS.BRILHO_AZUL,
            recompensa: EQUIPAMENTOS_DATA.ESPADA_FERRO,
        },
    ]
}