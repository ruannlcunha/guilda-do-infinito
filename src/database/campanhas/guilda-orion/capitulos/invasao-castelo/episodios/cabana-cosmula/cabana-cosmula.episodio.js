
import CENA_1 from "./assets/CENA_1.png"
import COSMULA_1 from "../../../../../../personagens/cosmula/assets/COSMULA_1_PERFIL.png"
import APHELIOS_1 from "../../../../../../personagens/aphelios/assets/APHELIOS_1_PERFIL.png"
import ALAN_1 from "../../../../../../personagens/alan/assets/ALAN_1_PERFIL.png"
import { CENAS_TIPO } from "../../../../../../../constants"

export const CABANA_COSMULA = {
    id: 2,
    title: "Episódio 2: A Cabana de Cosmula",
    description: `O grupo encontra uma cabana para se abrigar do frio. Porém esse lugar não parece estar
    abandonado.`,
    previewImage: CENA_1,
    background: CENA_1,
    url: "/historia/guilda-de-orion/5/2/cena",
    content: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Cósmula",
            perfil: COSMULA_1,
            texto: "Sejam bem-vindos à minha casa, aceitam um cházinho?"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Alan",
            perfil: ALAN_1,
            texto: "Sim, aceitamos!"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Aphelios",
            perfil: APHELIOS_1,
            texto: "Não! Nós temos outras coisas pra fazer, Alan, não podemos nos distrair."
        },
    ]
}