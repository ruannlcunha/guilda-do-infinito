import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_DIALOGO } from "../../../../../_base"

export const TESTE_CENA_2 = {
    ...BASE_DIALOGO,
    id: 4,
    title: "Episódio 4: Teste Cena 2",
    description: `TESTE`,
    previewImage: MAPAS.COSMOS,
    background: MAPAS.COSMOS,
    tipo: EPISODIO_TIPO.DIALOGO,
    preRequisito: null,
    url: "/historia/testes/1/4/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 3",
            isFinish: true,
        },
    ],
}