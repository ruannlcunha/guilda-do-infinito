import COLAR_DEMONIACO_SPRITE from "./COLAR_DEMONIACO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant"

export const COLAR_DEMONIACO = {
    id: 55,
    nome: "Colar Demoníaco",
    descricao: `Um colar forjado nos fogos do inferno com o sangue cristalizado de um demônio.
    Para ativar os efeitos do colar o usuário precisa doar seu próprio sangue, assim formando uma espécie de pacto com ele, amaldiçoando o seu próprio sangue e tornando-o demoníaco.`,
    sprite: COLAR_DEMONIACO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Vigor", "vigor", 1),
        createBonusItem("Resistência a Dano (Trevas)", RESISTENCIA_DANO.TREVAS, 5),
        createBonusItem("Resistência a Dano (Fogo)", RESISTENCIA_DANO.FOGO, 5),
    ]
}