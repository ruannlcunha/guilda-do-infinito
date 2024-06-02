import { MUSICS } from "../../../../../../constants/audios/musics.constant";
import { IMAGES, MAPAS } from "../../../../../../constants/images";
import { PERSONAGENS_DATA } from "../../../../../personagens/personagens.data";

export const EPISODIO_TESTE = {
    id: 1,
    title: "Episódio 1: Teste",
    description: `Um episódio para testes.`,
    previewImage: MAPAS.FLORESTA,
    background: MAPAS.FLORESTA,
    url: "/historia/teste/1/1/batalha",
    content: {
        titulo: "Episódio 1:",
        subtitulo: "Teste",
        mapa: MAPAS.FLORESTA,
        musica: MUSICS.BATTLE_1,
        aliados: [
            PERSONAGENS_DATA[0],
            PERSONAGENS_DATA[1],
            PERSONAGENS_DATA[2],
            PERSONAGENS_DATA[3],
        ],
        inimigos: [
            PERSONAGENS_DATA[4],
            PERSONAGENS_DATA[4],
            PERSONAGENS_DATA[4],
            PERSONAGENS_DATA[4],
        ],
    }
}