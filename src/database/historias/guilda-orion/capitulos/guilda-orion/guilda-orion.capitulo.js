import { MAPAS } from "../../../../../constants/images";
import { ENFRENTANDO_SOMBRIUS } from "./episodios/enfrentando-sombrius/enfrentando-sombrius.episodio";
import { INICIO } from "./episodios/inicio/inicio.episodio";
import { SOMBRIUS_DEVORA } from "./episodios/sombrius-devora/sombrius-devora.episodio";

export const GUILDA_ORION_CAP = {
    id: 2,
    title: "Capítulo 1: A Guilda de Orion",
    description: `Um carroça é emboscada por um grupo de Sombrius que espreitavam uma estrada 
    próxima à capital de Granhelm. Até que um grupo de aventureiros misterioso surge para enfrentar 
    a ameaça. Conheça os membros daquela chamada de Guilda de Orion.`,
    previewImage: MAPAS.PLANICES,
    background: MAPAS.PLANICES,
    episodios: [
        INICIO,
        ENFRENTANDO_SOMBRIUS,
        SOMBRIUS_DEVORA,
    ]
}