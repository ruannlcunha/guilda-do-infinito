
import { CENAS_TIPO, EPISODIO_TIPO } from "../../../constants"

export const BASE_DIALOGO = {
    id: 0,
    title: "Episódio 0: ",
    description: `Teste`,
    previewImage: null,
    background: null,
    tipo: EPISODIO_TIPO.DIALOGO,
    preRequisito: null,
    url: "/historia/{historiaNome}/{capituloId}/{episodioId}/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase",
            musica: null,
            navigateTo: "/",
            onEnter: ()=>{},
            onClick: ()=>{},
            isFinish: true,
        },
    ],
}