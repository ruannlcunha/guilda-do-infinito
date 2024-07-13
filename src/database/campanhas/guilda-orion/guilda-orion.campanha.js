import PREVIEW from "./assets/PREVIEW.png"
import { INICIO_JORNADA } from "./capitulos/inicio-jornada/inicio-jornada.capitulo";
import { INVASAO_CASTELO } from "./capitulos/invasao-castelo/invasao-castelo.capitulo";

export const GUILDA_ORION = {
    id: 1,
    title: "A Guilda de Orion",
    description: `A história sobre a campanha de A Guilda de Orion`,
    previewImage: PREVIEW,
    background: PREVIEW,
    url: `/historia/guilda-de-orion`,
    capitulos: [
        INVASAO_CASTELO,
        INICIO_JORNADA,
    ]
}