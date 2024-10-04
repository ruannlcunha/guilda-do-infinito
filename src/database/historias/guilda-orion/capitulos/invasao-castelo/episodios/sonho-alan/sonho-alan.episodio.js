import { MUSICS } from "../../../../../../../constants/audios/musics.constant"
import { MAPAS } from "../../../../../../../constants/images"
import CENA_1 from "./assets/CENA_1.png"
import ALAN_2 from "./assets/ALAN_2.png"
import ALAN_1 from "../../../../../../personagens/alan/assets/ALAN_2_PERFIL.png"
import MOXXIE from "../../../../../../personagens/moxxie/assets/MOXXIE_1_PERFIL.png"
import NERO from "../../../../../../personagens/nero/assets/NERO_1_PERFIL.png"
import { CENAS_TIPO } from "../../../../../../../constants"

export const SONHO_ALAN = {
    id: 5,
    title: "Episódio 5: O Sonho de Alan",
    description: `O Grupo entra em mais um sonho, dessa vez o ambiente é calmo e feliz, mas
    será que eles terão coragem de contar para Alan que sua vida perfeita é uma mentira?`,
    previewImage: CENA_1,
    background: MAPAS.FLORESTA_CLAREIRA,
    url: "/historia/guilda-de-orion/5/5/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Alan",
            perfil: ALAN_1,
            texto: "Espera, você ta dizendo que toda minha vida é apenas um sonho?"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Moxxie",
            perfil: MOXXIE,
            texto: "Sei que é difícil para assimilar tudo isso, mas sim, isso é um sonho."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Alan",
            perfil: ALAN_2,
            texto: "Minha esposa... Filha... Tudo é uma mentira?"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Nero",
            perfil: NERO,
            texto: "Sim, até sua barba."
        },
    ]
}