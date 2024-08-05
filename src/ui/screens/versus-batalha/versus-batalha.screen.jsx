import { useEffect, useState } from "react";
import { IniciarBatalhaScreen, JogarBatalha, FimDeBatalha, AudioContainer, FimBatalhaVersus } from "../../components";
import "./versus-batalha.style.css";
import { useInstanciarPersonagens } from "../../../hook/batalha";
import { useMusic } from "../../../hook";
import useGlobalUser from "../../../context/global-user.context";

export function VersusBatalhaScreen() {
  const [telas, setTelas] = useState({iniciarBatalha: true, jogarBatalha: false, fimBatalha: false})
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const [resultado, setResultado] = useState("")
  const [personagensInstanciados, setPersonagensInstanciados] = useState([]);
  const [musica, setMusica] = useState({src: null, loop: false})
  const { startMusic } = useMusic()
  const [user] = useGlobalUser()
  const [batalha, setBatalha] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    musica.src ? startMusic(musica.loop) : null
  },[musica])

  function fetchData() {
    const _aliados = user.modos.versus.aliados
    const _inimigos = user.modos.versus.inimigos
    const _batalha = {
      titulo: "Batalha Versus:",
      subtitulo: user.modos.versus.mapa.nome,
      mapa: user.modos.versus.mapa.img,
      musica: user.modos.versus.mapa.musica,
      jogadores: user.modos.versus.jogadores,
    }
    setBatalha(_batalha)
    setPersonagensInstanciados(instanciarPersonagens(_aliados, _inimigos));
  }

  function handleIniciar() {
    setTelas({iniciarBatalha: false, jogarBatalha: true, fimBatalha: false})
  }

  function handleFinalizarBatalha(texto) {
    setTelas({iniciarBatalha: false, jogarBatalha: true, fimBatalha: true})
    setResultado(texto)
  }
  

  return personagensInstanciados.length>0 && batalha ? (
    <>
    <AudioContainer audio={musica.src}/>
    {telas.iniciarBatalha ?
    <IniciarBatalhaScreen
    batalha={batalha}
    aliados={personagensInstanciados.filter((item) => item.isInimigo === false)}
    inimigos={personagensInstanciados.filter((item) => item.isInimigo === true)}
    iniciarFunction={handleIniciar}
    />
    : null}
    {telas.jogarBatalha ?
    <JogarBatalha
    batalha={batalha}
    setMusica={setMusica}
    personagensInstanciados={personagensInstanciados}
    handleFinalizarBatalha={handleFinalizarBatalha}
    />
    : null}
    {telas.fimBatalha ?
    <FimBatalhaVersus
    resultado={resultado}
    setMusica={setMusica}
    />
    : null}
    </>
  ) : null

}
