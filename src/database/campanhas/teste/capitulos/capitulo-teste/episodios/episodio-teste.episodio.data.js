import { MUSICS } from "../../../../../../constants/audios/musics.constant";
import { MAPAS } from "../../../../../../constants/images";

export const EPISODIO_TESTE = {
    id: 1,
    title: "Episódio 1: Teste Grupo Orion",
    description: `Um episódio para testar uma batalha de grupos: Aliados vs Inimigos`,
    previewImage: MAPAS.FLORESTA,
    background: MAPAS.FLORESTA,
    url: "/historia/teste/1/1/batalha",
    content: {
        titulo: "Episódio 1:",
        subtitulo: "Teste Grupo Orion",
        mapa: MAPAS.CASTELO_SOMBRIO_TAPETE,
        musica: null,
        aliados: [
            {
                personagemId: 1,
            },
            {
                personagemId: 6,
                skinAtiva: 1,
                level: 4,
                experienciaAtual: 10,
                inventario: {
                    equipamentos: [],
                    consumiveis: [
                        {
                        id: 1,
                        quantidade: 2,
                        }
                    ],
                }
            },
            {
                personagemId: 8,
                skinAtiva: 1,
                level: 4,
                experienciaAtual: 10,
                inventario: {
                    equipamentos: [],
                    consumiveis: [
                        {
                        id: 1,
                        quantidade: 2,
                        }
                    ],
                }
            },
            {
                personagemId: 7,
                skinAtiva: 1,
                level: 4,
                experienciaAtual: 10,
                inventario: {
                    equipamentos: [],
                    consumiveis: [
                        {
                        id: 1,
                        quantidade: 2,
                        }
                    ],
                }
            },
        ],
        inimigos: [
            {
                personagemId: 11,
                skinAtiva: 1,
                level: 8,
                experienciaAtual: 10,
                inventario: {
                    equipamentos: [],
                    consumiveis: [],
                }
            },
        ],
    }
}