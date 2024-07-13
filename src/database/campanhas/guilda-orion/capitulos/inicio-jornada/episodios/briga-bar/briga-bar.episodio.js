
import CENA_1 from "./assets/CENA_1.png"
import DIANA_1 from "../../../../../../personagens/diana/assets/DIANA_1_PERFIL.png"
import AYLA_1 from "../../../../../../personagens/ayla/assets/AYLA_1_PERFIL.png"
import { CENAS_TIPO } from "../../../../../../../constants"

export const BRIGA_BAR = {
    id: 3,
    title: "Episódio 3: Briga de Bar",
    description: `A mercenária Diana desafia o grupo para uma briga de bar. Porém essa briga
    parece ser diferente das comuns.`,
    previewImage: CENA_1,
    background: CENA_1,
    url: "/historia/guilda-de-orion/1/3/cena",
    content: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Diana",
            perfil: DIANA_1,
            texto: "E aí? Aceitam o desafio?"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Ayla",
            perfil: AYLA_1,
            texto: "Uma briga de bar? Não acho que isso irá resolver."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Diana",
            perfil: DIANA_1,
            texto: "Fica tranquila, nós fazemos isso de uma maneira diferente por aqui."
        },
    ]
}