import { CENAS_TIPO, PRONOMES } from "../../../constants";
import UNIVERSO_BACKGROUND from "../../../assets/img/backgrounds/UNIVERSO_BACKGROUND.jpg"
import GUILDA_BACKGROUND from "../../../assets/img/backgrounds/GUILDA_BACKGROUND.jpg"
import ENTRANDO_GUILDA from "./assets/ENTRANDO_GUILDA.png"
import PERFIL_1 from "./assets/VISUAL_1_PERFIL.png"
import PERFIL_2 from "./assets/VISUAL_2_PERFIL.png"
import PERFIL_3 from "./assets/VISUAL_3_PERFIL.png"
import CENA_1 from "./assets/CENA_1.png"
import CENA_2 from "./assets/CENA_2.png"
import CENA_3 from "./assets/CENA_3.png"
import CENA_4 from "./assets/CENA_4.png"
import CENA_5 from "./assets/CENA_5.png"
import CENA_6 from "./assets/CENA_6.png"
import CENA_7 from "./assets/CENA_7.png"
import CENA_8 from "./assets/CENA_8.png"
import SELINA_PERFIL from "./assets/SELINA_PERFIL.png"
import TITULO_BACKGROUND from "./assets/TITULO_BACKGROUND.png"
import { useNavigate } from "react-router-dom";
import { MUSICS } from "../../../constants/audios/musics.constant";

export function novoJogoCenas(visualId, pronomes, nome,
                            setVisualModal, setPronomesModal, setNomeModal, setConfirmarModal) {
    const AVENTUREIRO_PERFIL = { PERFIL_1, PERFIL_2, PERFIL_3 }
    const navigate = useNavigate()

    return [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            musica: MUSICS.COSMOS,
            nome: "Narrador",
            texto: "Esse é o Cosmos, o lugar onde todos os universos se encontram."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_2,
            nome: "Narrador",
            texto: `Mesmo cada universo sendo único, eles possuem características semelhantes entre si.`
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Narrador",
            texto: `O que ocasiona no fenômeno que chamamos de "versões alternativas" de nossa realidade.
            Por isso em diversos universos podemos ver versões diferentes de uma mesma figura.`
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_4,
            nome: "Narrador",
            texto: `Dentre os inúmeros universos, existe um localizado próximo ao centro do Cosmos.`
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_5,
            nome: "Narrador",
            texto: `Ele está sempre se expandindo e se adaptando aos universos ao seu redor.
            Por este motivo, esse universo foi apelidado de "Universo Infinito".`
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: CENA_6,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_7,
            nome: "Narrador",
            texto: `Um universo repleto de grandes histórias, incluindo uma que está prestes a começar...`
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: ENTRANDO_GUILDA,
            musica: MUSICS.TOWN,
            nome: "Narrador",
            texto: `Enquanto isso, alguém entra pela primeira vez na Guilda dos Aventureiros.`,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: GUILDA_BACKGROUND,
            onEnter: ()=>setVisualModal(true),
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: AVENTUREIRO_PERFIL[`PERFIL_${visualId}`],
            nome: "???",
            texto: `Olá, eu gostaria de me cadastrar na Guilda.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: SELINA_PERFIL,
            nome: "Recepcionista",
            texto: `Claro! Vamos começar o seu cadastro.`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: SELINA_PERFIL,
            nome: "Recepcionista",
            texto: `Para começar eu preciso que você responda algumas perguntas.`,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: GUILDA_BACKGROUND,
            onEnter: ()=>setPronomesModal(true),
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: SELINA_PERFIL,
            nome: "Recepcionista",
            texto: `Obrigada, senhor${PRONOMES[pronomes.tipo].minusculo_3}, próxima pergunta!`,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: GUILDA_BACKGROUND,
            onEnter: ()=>setNomeModal(true),
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: SELINA_PERFIL,
            nome: "Selina",
            texto: `Muito prazer, ${nome}, meu nome é Selina!`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: SELINA_PERFIL,
            nome: "Selina",
            texto: `Vamos apenas confirmar seus dados do cadastro.`,
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: GUILDA_BACKGROUND,
            onEnter: ()=>setConfirmarModal(true),
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: GUILDA_BACKGROUND,
            perfil: SELINA_PERFIL,
            nome: "Selina",
            texto: `Seu cadastro está pronto, seja bem vind${PRONOMES[pronomes.tipo].minusculo_2} à
            Guilda dos Aventureiros!`,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_8,
            nome: "Narrador",
            texto: `E foi assim que mais uma história se iniciou neste infinito universo.`
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: TITULO_BACKGROUND,
            musica: MUSICS.START,
            onClick: ()=>{navigate("/home")},
        },
    ]
}