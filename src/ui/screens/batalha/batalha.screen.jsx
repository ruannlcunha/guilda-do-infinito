import { useEffect, useState } from "react";
import { IniciarBatalhaScreen, JogarBatalha, FimDeBatalha, AudioContainer } from "../../components";
import "./batalha.style.css";
import { useInstanciarPersonagens } from "../../../hook/batalha";
import { useMusic } from "../../../hook";
import { useParams } from "react-router-dom";
import { CAMPANHAS_DATA } from "../../../database/campanhas/campanhas.data";

export function BatalhaScreen() {
  const [telas, setTelas] = useState({iniciarBatalha: true, jogarBatalha: false, fimBatalha: false})
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const [resultado, setResultado] = useState("")
  const [personagensInstanciados, setPersonagensInstanciados] = useState([]);
  const [musica, setMusica] = useState({src: null, loop: false})
  const { startMusic } = useMusic()
  const { campanha, idCapitulo, idEpisodio } = useParams()
  const [batalha, setBatalha] = useState(null)

  useEffect(()=>{
    fetchData()
  },[])

  useEffect(()=>{
    musica.src ? startMusic(musica.loop) : null
  },[musica])

  function fetchData() {
    const _campanha = CAMPANHAS_DATA.find(item => item.url === `/historia/${campanha}`)
    const _capitulo = _campanha.capitulos.find(item => item.id == idCapitulo)
    const _episodio = _capitulo.episodios.find(item => item.id == idEpisodio)
    const _aliados = _episodio.content.aliados
    const _inimigos = _episodio.content.inimigos
    setBatalha(_episodio.content)
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
