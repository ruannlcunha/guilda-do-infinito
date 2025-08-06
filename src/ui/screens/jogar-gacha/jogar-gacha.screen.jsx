import "./jogar-gacha.style.css";
import { AudioContainer, BotaoPrimario, ContainerScreen } from "../../components";
import { ICONS, IMAGES } from "../../../constants/images";
import { RECOMPENSAS_TIPO } from "../../../constants";
import { useEffect, useState } from "react";
import useGlobalUser from "../../../context/global-user.context";
import { useNavigate, useParams } from "react-router-dom";
import { getRandomInt } from "../../../utils";
import { GACHA_DATA } from "../../../database";
import { useMusic, useSound } from "../../../hook";
import { MUSICS } from "../../../constants/audios/musics.constant";
import { SOUNDS } from "../../../constants/audios/sounds.constant";
import personagemBase from "../../../database/personagens/_base/_base-pessoal.personagem.json";

export function JogarGachaScreen() {
  const [cenaId, setCenaId] = useState(1);
  const { idBanner, quantidade } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useGlobalUser();
  const [timeoutId, setTimeoutId] = useState([]);
  const [possuiBencao, setPossuiBencao] = useState(false);
  const [recompensas, setRecompensas] = useState([]);
  const [recompensaAtivo, setRecompensaAtivo] = useState(false);
  const [recompensaAtualId, setRecompensaAtualId] = useState(0);
  const { playSound, playClick } = useSound();
  const { startMusic } = useMusic();

  useEffect(() => {
    startMusic(true);
    if (user.bencaos >= quantidade || true) {
      playSound(SOUNDS.GACHA_1);
      const _gacha2Sound = setTimeout(() => {
        playSound(SOUNDS.GACHA_2);
      }, 2100);
      setTimeoutId([...timeoutId, _gacha2Sound]);
      setPossuiBencao(true);
      const banner = GACHA_DATA.find((item) => item.id == idBanner);
      const _recompensas = instanciarRecompensas(banner);
      setRecompensas(_recompensas);
      const _cena2Sound = setTimeout(() => {
        setCenaId(2);
      }, 5500);
      setTimeoutId([...timeoutId, _cena2Sound]);
    }
  }, []);

  useEffect(() => {
    if (cenaId === 2) {
      playSound(SOUNDS.GACHA_3);
      const _gacha4Sound = setTimeout(() => {
        playSound(SOUNDS.GACHA_4);
      }, 4000);
      setTimeoutId([...timeoutId, _gacha4Sound]);
    }
  }, [cenaId, recompensaAtualId]);

  useEffect(() => {
    if (recompensas[recompensaAtualId]) {
      const _recompensa = recompensas[recompensaAtualId];
      document.documentElement.style.setProperty("--brilho-gacha", `url(${ICONS[`BRILHO_${_recompensa.recompensa.raridade}`]})`);
      document.documentElement.style.setProperty("--fundo-estrelas", `url(${IMAGES[`GACHA_${_recompensa.recompensa.raridade}_ESTRELAS`]})`);
      setRecompensaAtivo(true);
    }
  }, [recompensaAtualId, recompensas]);

  function instanciarRecompensas(banner) {
    const recompensas = [];
    for (let i = 0; i < quantidade; i++) {
      const possibilidadeAleatoria = getRandomInt(1, 100);
      const possibilidadeEscolhida = banner.possibilidades.find((item) => possibilidadeAleatoria >= item.probMin && possibilidadeAleatoria <= item.probMax);
      const recompensasPossiveis = banner.recompensas.filter((item) => item.recompensa.raridade === possibilidadeEscolhida.raridade && item.tipo === possibilidadeEscolhida.tipo);
      const recompensaIndex = getRandomInt(0, recompensasPossiveis.length - 1);
      recompensas.push(recompensasPossiveis[recompensaIndex]);
    }
    obterRecompensas(recompensas);
    return recompensas;
  }

  function obterRecompensas(recompensasObtidas) {
    const novoInventario = [...user.inventario];
    const novosPersonagens = [...user.personagens];

    recompensasObtidas.map((item) => {
      if (item.tipo === RECOMPENSAS_TIPO.ARMA) {
        novoInventario.push({
          itemId: item.recompensa.id,
          quantidade: 1
        });
      }
      if (item.tipo === RECOMPENSAS_TIPO.PERSONAGEM) {
        if (!novosPersonagens.find((personagem) => personagem.personagemId == item.recompensa.id)) {
          const _personagem = {
            ...personagemBase,
            personagemId: item.recompensa.id
          };
          novosPersonagens.push(_personagem);
        } else {
          {
            console.log("Parabéns você ganhou +5 Bençãos.");
          }
          {
            /*Ele dá uma recompensa por causa da duplicidade do personagem já obtido.*/
          }
        }
      }
    });
    // setUser({...user,
    //     bencaos: (user.bencaos)-quantidade,
    //     inventario: novoInventario,
    //     personagens: novosPersonagens,
    // })
  }

  function handleContinuar() {
    playClick(2);
    timeoutId.map((soundId) => {
      clearTimeout(soundId);
    });
    if (cenaId === 3) {
      navigate(-1);
    } else if (recompensaAtualId < recompensas.length - 1) {
      setRecompensaAtivo(false);
      setRecompensaAtualId(recompensaAtualId + 1);
    } else {
      setCenaId(3);
    }
  }

  function handlePular() {
    playClick(2);
    setCenaId(3);
    timeoutId.map((soundId) => {
      clearTimeout(soundId);
    });
  }

  function renderEstrelas(item) {
    const estrelasArray = [];
    for (let i = 0; i < item.raridade; i++) {
      estrelasArray.push(i);
    }

    return (
      <>
        {estrelasArray.map((item) => {
          return <img src={ICONS.ESTRELA} key={item} alt="Estrela" />;
        })}
      </>
    );
  }

  function renderCena1() {
    return recompensas.length > 0 ? (
      <div className="gacha-cena-1">
        <img src={ICONS.BENCAO} alt="Benção de Orion" className="bencao" />
        {recompensas.map((item, i) => {
          return <img src={ICONS[`BRILHO_${item.recompensa.raridade}`]} alt="Brilho" className={`brilho-${i + 1}`} />;
        })}
      </div>
    ) : null;
  }

  function renderCena2() {
    return recompensaAtivo ? (
      <>
        <div className="gacha-cena-2">
          <div
            className="gacha-fundo"
            style={{
              backgroundImage: `url(${recompensas[recompensaAtualId].recompensa.santuario ? recompensas[recompensaAtualId].recompensa.santuario : IMAGES[`SANTUARIO_${recompensas[recompensaAtualId].recompensa.raridade}_ESTRELAS`]})`
            }}
          >
            <div className="gacha-detalhes">
              <header>
                {recompensas[recompensaAtualId].recompensa.elemento ? <img src={ICONS[`ELEMENTO_${recompensas[recompensaAtualId].recompensa.elemento}`]} alt="ícone" /> : null}
                <h1>{recompensas[recompensaAtualId].recompensa.nome}</h1>
              </header>
              <div className="estrelas">{renderEstrelas(recompensas[recompensaAtualId])}</div>
              <h2>{recompensas[recompensaAtualId].tipo === RECOMPENSAS_TIPO.ARMA ? recompensas[recompensaAtualId].recompensa.tipo : recompensas[recompensaAtualId].recompensa.titulo}</h2>
            </div>
            <img src={recompensas[recompensaAtualId].recompensa.sprite} alt="Sprite" className="sprite" />
          </div>
        </div>
        <button className="continuar-button" onClick={handleContinuar}>
          Próximo
          <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
        </button>
      </>
    ) : null;
  }

  function renderCena3() {
    return (
      <div className="gacha-cena-3">
        <h1>Recompensas Obtidas</h1>
        <ul>
          {recompensas.map((item, i) => {
            return (
              <li
                className="gacha-recompensa"
                key={i}
                style={{
                  backgroundImage: `url(${item.recompensa.santuario ? item.recompensa.santuario : IMAGES[`SANTUARIO_${recompensas[i].recompensa.raridade}_ESTRELAS`]}),
                                url(${ICONS[`BRILHO_${item.recompensa.raridade}`]})`
                }}
              >
                <div className="sprite-recompensa">
                  <img style={item.tipo === RECOMPENSAS_TIPO.ARMA ? { width: "75%" } : null} src={item.recompensa.sprite} alt="" />
                </div>

                <div className="gacha-detalhes">
                  <header>
                    {item.recompensa.elemento ? <img src={ICONS[`ELEMENTO_${item.recompensa.elemento}`]} alt="ícone" /> : null}
                    <h1>{item.recompensa.nome}</h1>
                  </header>
                  <div className="estrelas">{renderEstrelas(item)}</div>
                  <h2>{item.tipo === RECOMPENSAS_TIPO.ARMA ? item.recompensa.tipo : item.recompensa.titulo}</h2>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="continuar-button" onClick={handleContinuar}>
          Voltar
          <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
        </button>
      </div>
    );
  }

  return (
    <ContainerScreen>
      <AudioContainer audio={MUSICS.COSMOS} />
      <div className="jogar-gacha-screen">
        {cenaId !== 3 && possuiBencao ? (
          <button className="pular-button" onClick={handlePular}>
            Pular
          </button>
        ) : null}

        {!possuiBencao ? (
          <>
            <h1>Você não possui bençãos o suficiente.</h1>
            <BotaoPrimario onClick={() => navigate(-1)}>Voltar</BotaoPrimario>
          </>
        ) : null}

        {cenaId === 1 && possuiBencao ? renderCena1() : null}

        {cenaId === 2 && possuiBencao ? renderCena2() : null}

        {cenaId === 3 && possuiBencao ? renderCena3() : null}
      </div>
    </ContainerScreen>
  );
}
