
import CENA_1 from "./assets/CENA_1.png"
import AKINN_1 from "../../../../../../personagens/akinn/assets/AKINN_1_PERFIL.png"
import JJC_1 from "../../../../../../personagens/jjc/assets/JJC_1_PERFIL.png"
import { CENAS_TIPO } from "../../../../../../../constants"

export const O_SEGREDO = {
    id: 7,
    title: "Episódio 7: O Segredo de Khaas",
    description: `O grupo descobre o que é o Segredo de Khaas`,
    previewImage: CENA_1,
    background: CENA_1,
    url: "/historia/segredo-de-khaas/4/7/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Narrador",
            texto: "E então aquele ser põe sua enorme e pesada mão sobre o baú reluzente."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Akinn",
            perfil: AKINN_1,
            texto: "Quem... Quem é você de verdade?"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "JJC",
            perfil: JJC_1,
            texto: "Eu? Eu sou JJC..."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "JJC",
            perfil: JJC_1,
            texto: "O Juri, o Juiz e o Carrasco."
        },
    ]
}