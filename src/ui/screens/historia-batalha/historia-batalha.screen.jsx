import { useEffect, useState } from "react";
import { IniciarBatalhaScreen, JogarBatalha, FimDeBatalha, AudioContainer } from "../../components";
import "./historia-batalha.style.css";
import { useInstanciarPersonagens } from "../../../hook/batalha";
import { useMusic } from "../../../hook";
import { useParams } from "react-router-dom";
import { HISTORIAS_DATA } from "../../../database/historias/HISTORIAS.data";
import { MODOS_JOGO } from "../../../constants";

export function HistoriaBatalhaScreen() {
  const [telas, setTelas] = useState({iniciarBatalha: true, jogarBatalha: false, fimBatalha: false})
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const [resultado, setResultado] = useState("")
  const [personagensInstanciados, setPersonagensInstanciados] = useState([]);
  const [musica, setMusica] = useState({src: null, loop: false})
  const { startMusic } = useMusic()
  const { historia, idCapitulo, idEpisodio } = useParams()
  const [batalha, setBatalha] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    musica.src ? startMusic(musica.loop) : null
  },[musica])

  function fetchData() {
    const _campanha = HISTORIAS_DATA.find(item => item.url === `/historia/${historia}`)
    const _capitulo = _campanha.capitulos.find(item => item.id == idCapitulo)
    const _episodio = _capitulo.episodios.find(item => item.id == idEpisodio)
    const _aliados = _episodio.batalha.aliados.map(aliado=>{return {...aliado, isExtra: true}})
    const _inimigos = _episodio.batalha.inimigos
    setBatalha(_episodio.batalha)
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
    functions={{handleIniciar, setPersonagensInstanciados}}
    modo={MODOS_JOGO.HISTORIA}
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
    <FimDeBatalha
    batalha={batalha}
    personagens={personagensInstanciados}
    resultado={resultado}
    setMusica={setMusica}
    />
    : null}
    </>
  ) : null

}
