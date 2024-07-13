import { MAPAS } from "../../../../../constants/images/mapas.constant"
import { OFERTA_TRABALHO } from "./episodios/oferta-trabalho/oferta-trabalho.episodio"
import { TESTE_FINAL } from "./episodios/teste-final/teste-final.episodio"

export const FUGA_CIDADE = {
    id: 3,
    title: "Capítulo 3: Fuga da Cidade",
    description: `O grupo precisa fugir da cidade para ir em busca do tesouro perdido. Será que
    eles vão conseguir escapar dos guardas reais?`,
    previewImage: MAPAS.MURO_DESERTO,
    background: null,
    episodios: [
        OFERTA_TRABALHO,
        TESTE_FINAL,
    ]
}