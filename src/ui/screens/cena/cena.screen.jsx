import "./cena.style.css"
import { Cena, ContainerScreen } from "../../components";
import { MAPAS, PERFIL } from "../../../constants/images";
import { CENAS_TIPO } from "../../../constants";

export function CenaScreen() {

    const DIALOGOS = [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: MAPAS.FLORESTA_CLAREIRA,
            perfil: PERFIL.SOL,
            nome: "Sol",
            texto: "Como assim você tem dinheiro? Achei que ele estava todo comigo."
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: MAPAS.FLORESTA_CLAREIRA,
            perfil: PERFIL.MINUS,
            nome: "Minus",
            texto: "Não sei, achei aqui no meu bolso. '-'"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: MAPAS.DESERTO,
            nome: "Narrador",
            texto: "E de repente em um deserto longe dali..."
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: MAPAS.DESERTO,
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: MAPAS.FLORESTA,
            perfil: PERFIL.LOBO_PERFIL,
            nome: "Lobo",
            texto: "WOOF WOOF"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: MAPAS.FLORESTA_CLAREIRA,
            perfil: PERFIL.MINUS,
            nome: "Minus",
            texto: "Concordo.",
            onClick: ()=>{console.log("FOISE")}
        },
    ]

    return (
        <ContainerScreen>
            <Cena dialogosArray={DIALOGOS}/>
        </ContainerScreen>
    )

}