import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { BASE_DIALOGO } from "../../../../../_base"
import { MUSICS } from "../../../../../../../constants/audios/musics.constant"
import CENA_1 from "./assets/CENA_1.png"
import CENA_2 from "./assets/CENA_2.png"
import CENA_3 from "./assets/CENA_3.png"
import CENA_4 from "./assets/CENA_4.png"
import CENA_5 from "./assets/CENA_5.png"
import CENA_6 from "./assets/CENA_6.png"
import CENA_7 from "./assets/CENA_7.png"
import CENA_8 from "./assets/CENA_8.png"
import CENA_9 from "./assets/CENA_9.png"
import CENA_10 from "./assets/CENA_10.png"

export const GUERRA_DIVINA = {
    ...BASE_DIALOGO,
    id: 2,
    title: "Episódio 2: A Grande Guerra Divina",
    description: `Cypher ao ver seu irmão e os outros deuses se divertirem com suas criações, sentiu inveja
    do poder deles. Já que ele não poderia criar, ele decidiu destruir. E assim se iniciou a maior guerra 
    da história de Arian, "A Grande Guerra Divina"`,
    previewImage: CENA_1,
    background: CENA_1,
    tipo: EPISODIO_TIPO.DIALOGO,
    preRequisito: null,
    url: "/historia/guilda-de-orion/1/2/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Narrador",
            texto: `O mundo vivia em paz, até que um dia Cypher, o Deus da Destruição cansou de apenas observar 
            Orion e os outros deuses criarem e se divertirem com suas criações.`,
            musica: MUSICS.SUSPENSE_1,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Narrador",
            texto: `Ele também queria criar, também queria se divertir, mas não podia, pois ele não criava, 
            apenas destruía.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Narrador",
            texto: `E com inveja do poder de seu irmão, Cypher tomou uma decisão. Já que ele não poderia criar, 
            então ele iria destruir.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_2,
            nome: "Narrador",
            texto: `E assim ele causou caos no mundo, juntando aliados que tinham o mesmo objetivo que ele, 
            conquistar o mundo através da destruição. Esse evento na história foi chamado de "A Grande Guerra 
            Divina"`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_2,
            nome: "Narrador",
            texto: `Nesta guerra que não envolvia apenas os mortais, como também as divindades, alguns deuses 
            ficaram do lado de Cypher, enquanto outros ficaram ao lado de Orion.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Narrador",
            texto: `Essa guerra causou a morte de milhões de seres vivos, a extinção de algumas raças, e 
            até mesmo a morte de divindades.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_4,
            nome: "Narrador",
            texto: `Centenas de anos após o início da guerra, Orion encontra um modo de acabar com ela.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_4,
            nome: "Narrador",
            texto: `Junto de Andrômeda, ele conseguiu criar uma magia capaz de selar seu irmão em um novo Plano 
            de Existência.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_5,
            nome: "Narrador",
            texto: `O Plano das Sombras.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_6,
            nome: "Narrador",
            texto: `Assim, Orion e os deuses decidem reunir guerreiros poderosos para receberem suas bençãos e 
            assim serem capaz de enfrentar os poderosos inimigos que protegiam Cypher.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_6,
            nome: "Narrador",
            texto: `Esses guerreiros foram chamados de Escolhidos dos Deuses, 
            e seriam os principais soldados do lado de Orion na Grande Guerra.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_7,
            nome: "Narrador",
            texto: `Após muita luta, Orion finalmente consegue chegar até Cypher, e assim conjurar a 
            magia Selo de Andrômeda.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_7,
            nome: "Narrador",
            texto: `Mas antes dele ser selado, Cipher conta uma profecia:`,
            musica: MUSICS.COSMOS,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_7,
            nome: "Narrador",
            texto: `"Eu irei retornar. Os selos serão reunidos em um só lugar, e quando isso acontecer, 
            o mundo inteiro será meu. Todos aqueles que lutarem ao meu lado irão se tornar os seres mais 
            poderosos de todos. Todos temerão o dia do Ragnarok."`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_8,
            nome: "Narrador",
            texto: `Cipher então é selado através de 7 selos, e a Grande Guerra Divina acaba.`,
            musica: MUSICS.HOME,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_9,
            nome: "Narrador",
            texto: `Porém algo acontece... Orion usou muito de sua força, e sua forma material começa a se 
            esvair, se tornando cada vez mais jovem, mesmo que o Tempo não o afetasse. Mas antes de 
            desaparecer por completo, ele diz:`,
            musica: MUSICS.FELIZ_2,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_9,
            nome: "Narrador",
            texto: `"Mesmo que Cypher retorne, ou que qualquer outro ser maligno apareça, eu irei dar minha 
            força para ajudá-los. Afinal todos vocês são meus filhos, e é meu dever protegê-los."`,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: CENA_9,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_9,
            nome: "Narrador",
            texto: `E assim Orion some, e desde então não existe quase nenhuma informação sobre seu estado.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_10,
            nome: "Narrador",
            texto: `O céu que antes era escuro como em uma noite eterna, agora se torna um céu azul e 
            ensolarado. Os deuses e os mortais sobreviventes agora se juntam para reconstruir o mundo 
            destruído pela guerra, iniciando mais uma era de paz.`,
            isFinish: true,
        },
    ],
}