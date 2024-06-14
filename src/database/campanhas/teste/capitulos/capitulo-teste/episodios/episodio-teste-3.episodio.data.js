import { MUSICS } from "../../../../../../constants/audios/musics.constant";
import { MAPAS } from "../../../../../../constants/images";
import { PERSONAGENS_DATA } from "../../../../..";

export const EPISODIO_TESTE_3 = {
    id: 3,
    title: "Episódio 3: Teste Warui",
    description: `Um terceiro episódio para testar os personagens de warui.`,
    previewImage: MAPAS.CASTELO_TAPETE,
    background: MAPAS.CASTELO_TAPETE,
    url: "/historia/teste/1/3/batalha",
    content: {
        titulo: "Episódio 3:",
        subtitulo: "Teste Warui",
        mapa: MAPAS.CASTELO_TAPETE,
        musica: MUSICS.BATTLE_1,
        aliados: [
            PERSONAGENS_DATA.SOL,
            PERSONAGENS_DATA.MINUS,
            PERSONAGENS_DATA.MAYA,
            PERSONAGENS_DATA.OTAVIA,
        ],
        inimigos: [
            PERSONAGENS_DATA.LOBO,
            PERSONAGENS_DATA.LOBO,
            PERSONAGENS_DATA.LOBO,
        ],
    }
}