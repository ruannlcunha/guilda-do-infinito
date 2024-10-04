import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { BASE_DIALOGO } from "../../../../../_base"
import { MUSICS } from "../../../../../../../constants/audios/musics.constant"
import CENA_1 from "../guerra-divina/assets/CENA_10.png"
import CENA_2 from "./assets/CENA_2.png"
import CENA_3 from "./assets/CENA_3.png"
import CENA_4 from "./assets/CENA_4.png"
import CENA_5 from "./assets/CENA_5.png"
import CENA_6 from "./assets/CENA_6.png"
import CENA_7 from "./assets/CENA_7.png"
import CENA_8 from "./assets/CENA_8.png"
import CENA_9 from "./assets/CENA_9.png"
import CENA_10 from "./assets/CENA_10.png"
import CENA_11 from "./assets/CENA_11.png"

export const MUNDO_POS = {
    ...BASE_DIALOGO,
    id: 3,
    title: "Episódio 3: O Mundo Após a Guerra",
    description: `Após o fim da Grande Guerra Divina, os sobreviventes buscam maneiras de reconstruir 
    o mundo destruído por Cypher. A paz em Arian dura por séculos, mas chega ao seu fim com o surgimento 
    de uma nova ameaça.`,
    previewImage: CENA_7,
    background: CENA_7,
    tipo: EPISODIO_TIPO.DIALOGO,
    preRequisito: null,
    url: "/historia/guilda-de-orion/1/3/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Narrador",
            texto: `Após a Grande Guerra Divina, Arian entrou em um período de reconstrução.`,
            musica: MUSICS.TOWN,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_2,
            nome: "Narrador",
            texto: `Para trazer de volta a vegetação destruída, Vulpecula, a Deusa da Natureza, jogou sementes 
            mágicas em diversos locais do mundo. Essas sementes eventualmente se tornariam as Árvores Anciãs, 
            que trariam energia pra suprir florestas inteiras.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Narrador",
            texto: `Com a extinção de raças humanóides, Lepus, a Deusa da Vida, se juntou a Vulpecula para 
            criar uma nova raça que misturasse a esperança e a determinação dos humanos com a força e a 
            diversidade dos animais. E foi assim que surgiu a raça dos Híbridos, seres meio humanos e meio 
            animais.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_4,
            nome: "Narrador",
            texto: `Hydrus, que teve seu reino submerso na guerra, começou a comandar os mares direto do 
            fundo do oceano.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_5,
            nome: "Narrador",
            texto: `Os povos que perderam seus deuses agora precisavam se reiventar, 
            criando novas culturas e saberes.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_6,
            nome: "Narrador",
            texto: `Aqueles que estavam do lado de Cipher na guerra foram banidos para um continente isolado, 
            que foi chamado de território Sombrio.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_7,
            nome: "Narrador",
            texto: `E pouco a pouco, Arian ia voltando a se tornar o mundo em paz que ele era antes da guerra.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_8,
            nome: "Narrador",
            texto: `Mas a paz não dura pra sempre. Centenas de anos depois do fim da guerra, Cypher consegue 
            abrir uma fenda no Plano das Sombras e se manifestar no Plano Material.`,
            musica: MUSICS.SUSPENSE_1,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: CENA_8,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_8,
            nome: "Narrador",
            texto: `Através dessa fenda ele traz criaturas do Plano das Sombras que são feitas puramente de 
            energia negativa. Esses seres sombrios trazem caos para o mundo, destruindo e matando tudo que 
            vêem no caminho, trazendo diversão para Cypher enquanto ele aguarda o momento de finalmente se 
            libertar do selo. `,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_8,
            nome: "Narrador",
            texto: `As criaturas trazidas por Cypher, nomeadas de Sombrius, começam a causar inúmeras tragédias 
            ao redor de Arian, pois uma pessoa comum é incapaz de matar um Sombrius. Mesmo ferindo muito essas 
            criaturas, elas sempre parecem voltar das sombras, como se fossem imortais. `,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_8,
            nome: "Narrador",
            texto: `A notícia de criaturas imortais e sanguinárias foi um susto para todos os reinos, que não 
            sabiam lidar com essa ameaça.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_9,
            nome: "Narrador",
            texto: `Mas tudo mudou quando em uma batalha contra um bando de Sombrius, o único sobrevivente de 
            uma tropa de cavaleiros se mantém em pé, mesmo prestes a morrer ele continua a lutar.`,
            musica: MUSICS.FELIZ_1,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_9,
            nome: "Narrador",
            texto: `Até que uma luz intensa tomou conta do lugar, o homem sentiu um poder dentro de si nunca 
            antes visto, e uma voz ecoou em sua cabeça: "Continue lutando.".`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_10,
            nome: "Narrador",
            texto: `Quando o homem abriu os olhos, ele viu em sua mão um amuleto dourado brilhante que 
            emanava uma aura graciosa. E no centro do amuleto, um simbolo, o simbolo de Orion.`,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: CENA_10,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_11,
            nome: "Narrador",
            texto: `Ao voltar pro combate, o cavaleiro consegue matar os Sombrius.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_11,
            nome: "Narrador",
            texto: `E então a humanidade volta a ter esperança de acabar com essa nova ameaça.`,
            isFinish: true,
        },
    ],
}