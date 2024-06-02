import { MUSICS } from "../../../../../../constants/audios/musics.constant";
import { IMAGES, MAPAS } from "../../../../../../constants/images";
import { PERSONAGENS_DATA } from "../../../../../personagens/personagens.data";

export const EPISODIO_TESTE_2 = {
    id: 2,
    title: "Episódio 2: Segundo Teste",
    description: `Um segundo episódio para testes.`,
    previewImage: MAPAS.DESERTO,
    background: MAPAS.DESERTO,
    url: "/historia/teste/1/2/batalha",
    content: {
        titulo: "Episódio 2:",
        subtitulo: "Segundo Teste",
        mapa: MAPAS.DESERTO,
        musica: MUSICS.BATTLE_1,
        aliados: [
            PERSONAGENS_DATA[0],
        ],
        inimigos: [
            PERSONAGENS_DATA[4],
        ],
    }
}