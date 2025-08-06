import "./jogar-batalha.style.css";
import { CampoDeBatalha, Turnos, ContainerScreen, BatalhaHUD, OpcoesBatalha, Banners, LogsBatalha } from "../../components";
import { useFinalizarTurno, useIniciarBatalha } from "../../../hook/batalha/";
import { useEffect, useState } from "react";
import { useBanners, useSound } from "../../../hook";

export function JogarBatalha({ batalha, setMusica, handleFinalizarBatalha, logsBatalha, setLogsBatalha, personagensInstanciados }) {
  const { banners, setBanners, ativarBannerTexto, ativarBannerAtaque, ativarBannerInimigo, ativarBannerRolagem } = useBanners();
  const [personagens, setPersonagens] = useState([]);
  const [personagemAtivo, setPersonagemAtivo] = useState({ idCombate: null });
  const [acaoAtiva, setAcaoAtiva] = useState({
    personagem: null,
    acao: null,
    alvos: [],
    tipoAcao: null
  });
  const [jogadaAutomatica, setJogadaAutomatica] = useState(false);
  const [acaoEmAndamento, setAcaoEmAndamento] = useState(false);
  const [turnos, setTurnos] = useState({
    atual: 0,
    maximo: 0,
    ordemIniciativa: []
  });
  const { iniciarBatalha } = useIniciarBatalha(banners);
  const { finalizarTurno } = useFinalizarTurno();
  const { playSound } = useSound();
  const [zoom, setZoom] = useState(100);
  const [functions, setFunctions] = useState(null);

  const [animacoes, setAnimacoes] = useState({
    isDadosAtivos: false,
    hudAtivo: false,
    iniciativaTerminou: false,
    escolhendoAlvo: false,
    batalhaTerminou: false
  });

  useEffect(() => {
    setMusica({ src: batalha.musica, loop: true });

    const todasFuncoes = {
      setAcaoAtiva,
      setAnimacoes,
      setPersonagens,
      setTurnos,
      setBanners,
      ativarBannerTexto,
      ativarBannerInimigo,
      ativarBannerRolagem,
      ativarBannerAtaque,
      playSound,
      setPersonagemAtivo,
      setZoom,
      handleFinalizarBatalha,
      adicionarLog,
      setJogadaAutomatica,
      setAcaoEmAndamento
    };
    setFunctions(todasFuncoes);
    const ordemIniciativa = instanciarOrdemIniciativa(personagensInstanciados);
    setPersonagens(personagensInstanciados);
    iniciarBatalha(personagensInstanciados, ordemIniciativa, todasFuncoes);
  }, []);

  useEffect(() => {
    functions ? finalizarTurno(personagens, turnos, functions) : null;
  }, [turnos, personagens, functions]);

  function instanciarOrdemIniciativa(personagensInstanciados) {
    let _personagens = [...personagensInstanciados];
    for (let i = 0; i < personagensInstanciados.length; i++) {
      let _turnos = personagensInstanciados[i].multiplicadores.turnos - 1;
      while (_turnos > 0) {
        _personagens.push(personagensInstanciados[i]);
        _turnos = _turnos - 1;
      }
    }

    const ordemInicial = _personagens
      .sort(function (a, b) {
        return a.idCombate - b.idCombate;
      })
      .map((personagem, i) => {
        return {
          idCombate: personagem.idCombate,
          ordemIniciativa: i,
          index: i
        };
      });

    setTurnos({
      atual: 0,
      maximo: _personagens.length,
      ordemIniciativa: ordemInicial
    });
    return ordemInicial;
  }

  function adicionarLog(novoLog) {
    setLogsBatalha((old) => {
      return [...old, novoLog];
    });
  }

  console.log(animacoes);

  return functions ? (
    <ContainerScreen>
      <div className="batalha-screen">
        <OpcoesBatalha animacoes={animacoes} zoom={zoom} jogadaAutomatica={jogadaAutomatica} acaoEmAndamento={acaoEmAndamento} personagemAtivo={personagemAtivo} functions={functions} />

        <Banners banners={banners} setBanners={setBanners} functions={functions} />

        {personagens.length > 0 && personagemAtivo ? (
          <>
            <LogsBatalha logs={logsBatalha} />

            <Turnos animacoes={animacoes} ordemIniciativa={turnos.ordemIniciativa} idAtivo={personagemAtivo.idCombate} personagens={personagens} turnos={turnos} />

            <CampoDeBatalha
              idAtivo={personagemAtivo.idCombate}
              aliados={personagens.filter((item) => item.isInimigo === false)}
              inimigos={personagens.filter((item) => item.isInimigo === true)}
              animacoes={animacoes}
              acaoAtiva={acaoAtiva}
              zoom={zoom}
              batalha={batalha}
              functions={functions}
            />

            <BatalhaHUD personagens={personagens} personagemAtivo={personagemAtivo} animacoes={animacoes} batalha={batalha} acaoEmAndamento={acaoEmAndamento} jogadaAutomatica={jogadaAutomatica} functions={functions} />
          </>
        ) : null}
      </div>
    </ContainerScreen>
  ) : null;
}
