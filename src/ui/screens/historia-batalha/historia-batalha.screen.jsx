import { useEffect, useState } from "react";
import { IniciarBatalhaScreen, JogarBatalha, FimDeBatalha, AudioContainer } from "../../components";
import "./historia-batalha.style.css";
import { useInstanciarPersonagens } from "../../../hook/batalha";
import { useMusic } from "../../../hook";
import { useNavigate, useParams } from "react-router-dom";
import { HISTORIAS_DATA } from "../../../database/historias/HISTORIAS.data";
import { MODOS_JOGO } from "../../../constants";
import useGlobalUser from "../../../context/global-user.context";

export function HistoriaBatalhaScreen() {
  const [telas, setTelas] = useState({iniciarBatalha: true, jogarBatalha: false, fimBatalha: false})
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const [resultado, setResultado] = useState("")
  const [personagensInstanciados, setPersonagensInstanciados] = useState([]);
  const [musica, setMusica] = useState({src: null, loop: false})
  const { startMusic } = useMusic()
  const { historia, idCapitulo, idEpisodio } = useParams()
  const [batalha, setBatalha] = useState(null)
  const navigate = useNavigate()
  const [user, setUser] = useGlobalUser()

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

  function handleConcluirEpisodio() {
      const _historia = HISTORIAS_DATA.find(item => item.url === `/historia/${historia}`)
      const _capitulo = _historia.capitulos.find(item => item.id == idCapitulo)
      const _episodio = _capitulo.episodios.find(item => item.id == idEpisodio)
      let novoModoHistoria = [...user.modos.historia]
      const _historiaUser = [...user.modos.historia].find(historia=>historia.historiaId===_historia.id)
      if(_historiaUser) {
          novoModoHistoria = novoModoHistoria.filter(historia=>historia.historiaId !=_historiaUser.historiaId)
          const capituloUser = _historiaUser.capitulos.find(capitulo=>capitulo.capituloId===_capitulo.id)
          if(capituloUser) {
              if(!capituloUser.episodios.find(episodio=>episodio===_episodio.id)) {
                  novoModoHistoria.push({
                      historiaId: _historiaUser.historiaId,
                      capitulos: [
                          ..._historiaUser.capitulos.filter(capitulo=>capitulo.capituloId !=capituloUser.capituloId),
                          {
                              capituloId: capituloUser.capituloId,
                              episodios: [...capituloUser.episodios, _episodio.id],
                          },
                      ],
                  })
              } else {
                  novoModoHistoria = [...user.modos.historia]
              }
          } else {
              novoModoHistoria.push({
                  historiaId: _historiaUser.historiaId,
                  capitulos: [
                      ..._historiaUser.capitulos,
                      {
                          capituloId: _capitulo.id,
                          episodios: [_episodio.id],
                      },
                  ],
              })
          }
      } else {
          novoModoHistoria.push({
              historiaId: _historia.id,
              capitulos: [
                  {
                      capituloId: _capitulo.id,
                      episodios: [_episodio.id],
                  },
              ],
          })
      }
      const novoUser = {
          ...user,
          modos: {
              ...user.modos,
              historia: novoModoHistoria
          }
      }
      setUser(novoUser)
      navigate(`/historia/${historia}`)
  }

  function handleFinalizarBatalha(texto) {
    handleConcluirEpisodio()
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
