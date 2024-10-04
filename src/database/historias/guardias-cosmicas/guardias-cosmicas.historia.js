import PREVIEW from "./assets/PREVIEW.png"
import { DESTRUIDORA_MUNDOS } from "./capitulos/destruidora-mundos/destruidora-mundos.capitulo"

export const GUARDIAS_COSMICAS = {
    id: 3,
    title: "Guardiãs Cósmicas",
    description: `A história sobre a one-shot de Guardiãs Cósmicas.`,
    previewImage: PREVIEW,
    background: PREVIEW,
    url: `/historia/guardias-cosmicas`,
    capitulos: [
        DESTRUIDORA_MUNDOS,
    ]
}