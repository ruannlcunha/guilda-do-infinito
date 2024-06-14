import { MUSICS } from "../../../../../../constants/audios/musics.constant";
import { MAPAS } from "../../../../../../constants/images";
import { PERSONAGENS_DATA } from "../../../../../";

export const EPISODIO_TESTE_2 = {
    id: 2,
    title: "Episódio 2: Teste Duelo Orion",
    description: `Um segundo episódio para testar uma batalha com 2 personagens aliados.`,
    previewImage: MAPAS.DESERTO,
    background: MAPAS.DESERTO,
    url: "/historia/teste/1/2/batalha",
    content: {
        titulo: "Episódio 2:",
        subtitulo: "Teste Duelo Orion",
        mapa: MAPAS.ESTRADA_GELADA,
        musica: MUSICS.BATTLE_1,
        aliados: [
            PERSONAGENS_DATA.AYLA,
        ],
        inimigos: [
            PERSONAGENS_DATA.APHELIOS,
        ],
    }
}