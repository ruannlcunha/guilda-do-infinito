import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_DIALOGO } from "../../../../../_base"

export const TESTE_CENA = {
    ...BASE_DIALOGO,
    id: 1,
    title: "Episódio 1: Teste Cena",
    description: `TESTE`,
    previewImage: MAPAS.COSMOS,
    background: MAPAS.COSMOS,
    tipo: EPISODIO_TIPO.DIALOGO,
    preRequisito: null,
    url: "/historia/testes/1/1/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 1"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 2"
        },
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