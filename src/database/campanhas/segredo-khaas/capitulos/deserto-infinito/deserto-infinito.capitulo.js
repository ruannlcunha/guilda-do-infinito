import { MAPAS } from "../../../../../constants/images/mapas.constant"
import { DEMONIO_AREIAS } from "./episodios/demonio-areias/demonio-areias.episodio"
import { O_SEGREDO } from "./episodios/o-segredo/o-segredo.episodio"

export const DESERTO_INFINITO = {
    id: 4,
    title: "Capítulo 4: O Deserto Infinito",
    description: `O grupo está passando pelo Deserto Infinito, o lugar onde o calor extremo e os perigos
    são difíceis obstáculos durante sua jornada. O que eles irão encontrar nessa paisagem vazia?`,
    previewImage: MAPAS.DESERTO,
    background: null,
    episodios: [
        DEMONIO_AREIAS,
        O_SEGREDO,
    ]
}