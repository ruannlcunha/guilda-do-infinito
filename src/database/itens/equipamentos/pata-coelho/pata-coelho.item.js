import PATA_COELHO_SPRITE from "./PATA_COELHO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { HABILIDADES } from "../../../habilidades"
import { TALENTOS } from "../../../talentos"

export const PATA_COELHO = {
    id: 28,
    nome: "Pata de Coelho",
    descricao: `Um pingente contendo uma pata de coelho que traz grande sorte ao portador. Essa pata de coelho foi abençoada pelo próprio Deus da Sorte, em um ritual onde 
    um clérigo molha o objeto em um chá feito com 7 trevos de 4 folhas, e o aponta para uma estrela cadente enquanto cruza os dedos de suas mãos.`,
    sprite: PATA_COELHO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
    acoes: {
        ataques: [],
        habilidades: [{habilidadeId: HABILIDADES.CHAMAR_SORTE.id, variantes: []}],
        talentos: [TALENTOS.SORTE_DIVINA],
    },
    bonus: []
}