import PREVIEW from "./assets/PREVIEW.png"
import { GUILDA_ORION_CAP } from "./capitulos/guilda-orion/guilda-orion.capitulo";
import { PROLOGO } from "./capitulos/prologo/prologo.capitulo";

export const GUILDA_ORION = {
    id: 1,
    title: "A Guilda de Orion",
    description: `A história sobre a historia de A Guilda de Orion`,
    previewImage: PREVIEW,
    background: PREVIEW,
    url: `/historia/guilda-de-orion`,
    capitulos: [
        PROLOGO,
        GUILDA_ORION_CAP,
    ]
}