import { IMAGES } from "../../../../../constants/images";
import { EPISODIO_TESTE_2 } from "./episodios/episodio-teste-2.episodio.data";
import { EPISODIO_TESTE } from "./episodios/episodio-teste.episodio.data"

export const CAPITULO_TESTE = {
    id: 1,
    title: "Capítulo X: Teste",
    description: `Apenas um capítulo de Teste`,
    previewImage: IMAGES.PREVIEW,
    background: null,
    episodios: [
        EPISODIO_TESTE,
        EPISODIO_TESTE_2,
    ]
}