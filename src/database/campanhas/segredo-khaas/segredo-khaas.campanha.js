import PREVIEW from "./assets/PREVIEW.png"
import { DESERTO_INFINITO } from "./capitulos/deserto-infinito/deserto-infinito.capitulo";
import { FUGA_CIDADE } from "./capitulos/fuga-cidade/fuga-cidade.capitulo";
import { QUEDA_RAMMETH } from "./capitulos/queda-rammeth/queda-rammeth.capitulo";

export const SEGREDO_KHAAS = {
    id: 2,
    title: "O Segredo de Khaas",
    description: `A história sobre a campanha de O Segredo de Khaas`,
    previewImage: PREVIEW,
    background: PREVIEW,
    url: `/historia/segredo-de-khaas`,
    capitulos: [
        FUGA_CIDADE,
        DESERTO_INFINITO,
        QUEDA_RAMMETH,
    ]
}