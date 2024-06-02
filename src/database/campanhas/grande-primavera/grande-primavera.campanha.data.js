import PREVIEW from "./assets/PREVIEW.png"
import { INTRODUCAO } from "./capitulos/introducao/introducao.capitulo.data";
import { TORNEIO } from "./capitulos/introducao copy/torneio.capitulo.data"

export const GRANDE_PRIMAVERA =  {
    id: 1,
    title: "A Grande Primavera",
    description: `O festival da Grande Primavera se inicia mais uma vez, contando com diversas presenças
    populares, inclusive do rei de Nova Traeryn e seus amigos.`,
    previewImage: PREVIEW,
    background: null,
    url: `/historia/grande-primavera`,
    capitulos: [
        INTRODUCAO,
        TORNEIO,
    ]
}