import PREVIEW from "./assets/PREVIEW.png"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MAPAS } from "../../../../../../../constants/images/mapas.constant"

export const TESTE_FINAL = {
    id: 5,
    title: "Episódio 5: O Teste Final",
    description: `Akinn enfrenta sua mestra. Este é o último teste que Akinn enfrentará em seu
    treinamento de anos. Saz'anna está pronta para ir com tudo pra cima de seu discípulo.`,
    previewImage: PREVIEW,
    background: MAPAS.MURO_DESERTO,
    url: "/historia/segredo-de-khaas/3/5/batalha",
    batalha: {
        titulo: "Episódio 5:",
        subtitulo: "O Teste Final",
        mapa: MAPAS.MURO_DESERTO,
        musica: null,
        aliados: [
            {
                ...basePessoal,
                personagemId: 19,
            },
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 26
            },
        ],
    }
}