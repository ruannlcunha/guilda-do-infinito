import { MAPAS } from "../../../../../../../constants/images"
import CENA_1 from "./assets/CENA_1.png"
import APHELIOS_1 from "./assets/APHELIOS_1.png"
import KARAS_1 from "./assets/KARAS_1.png"
import { CENAS_TIPO } from "../../../../../../../constants"

export const UM_MERGULHO = {
    id: 6,
    title: "Episódio 6: Um Mergulho",
    description: `Karas convida Aphelios para dar um mergulho no lago pela manhã.`,
    previewImage: CENA_1,
    background: MAPAS.PRAIA,
    url: "/historia/guilda-de-orion/5/6/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Karas",
            perfil: KARAS_1,
            texto: "Você não sabe nadar?"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Aphelios",
            perfil: APHELIOS_1,
            texto: "Bom, eu nunca precisei, então não."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Karas",
            perfil: KARAS_1,
            texto: "Vamos lá, é simples, vou te ensinar."
        },
    ]
}