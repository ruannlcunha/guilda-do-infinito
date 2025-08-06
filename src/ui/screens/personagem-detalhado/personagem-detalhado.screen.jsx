import { useEffect, useState } from "react";
import { BackButton, ContainerScreen, RaridadeEstrelas } from "../../components";
import "./personagem-detalhado.style.css";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalUser from "../../../context/global-user.context";
import { calcularPorcentagem, instanciarPersonagem } from "../../../utils";
import { ICONS } from "../../../constants/images";
import { EQUIPAMENTOS_DATA } from "../../../database";
import { useSound } from "../../../hook";
import { cheatTodosPersonagens } from "../../../utils/cheats-testes.util";
import { BONUS_DADO, ELEMENTOS_NOMES } from "../../../constants/personagens/personagem.constant";

export function PersonagemDetalhadoScreen({ personagemBatalha, onBack, setTela }) {
  const { personagemId } = useParams();
  const [_user] = useGlobalUser();
  const { playHover, playClick } = useSound();
  const [personagem, setPersonagem] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(cheatTodosPersonagens(_user));
  }, []);

  useEffect(() => {
    if (user) {
      let personagemInstanciado = null;
      if (personagemBatalha) {
        personagemInstanciado = personagemBatalha;
      } else {
        const _personagem = user.personagens.find((item) => item.personagemId == personagemId);
        personagemInstanciado = instanciarPersonagem(_personagem);
      }
      setPersonagem(personagemInstanciado);
      const porcentagemExp = calcularPorcentagem(personagemInstanciado.experiencia.atual, personagemInstanciado.experiencia.maximo);
      document.documentElement.style.setProperty("--resultadoExp", `${porcentagemExp}%`);
      document.documentElement.style.setProperty("--fundo-tema", `var(--${personagemInstanciado.corTema})`);
    }
  }, [user]);

  function renderLosangulo() {
    return <div className="losangulo"></div>;
  }

  function handleNavigate(page) {
    playClick(1);
    navigate(`/perfil/personagens/${personagemId}/${page}`);
  }

  function renderOpcoes(texto, url) {
    return (
      <li
        onMouseEnter={() => playHover(1)}
        onClick={
          setTela
            ? () => {
              setTela(url.toUpperCase());
            }
            : () => handleNavigate(url)
        }
      >
        {renderLosangulo()} {texto}
      </li>
    );
  }

  function renderBonusLista() {
    let bonusAtaque = 0
    let bonusConjuração = 0
    let bonusDano = 0
    let bonusCura = 0
    personagem.bonusDado.map(bonus=> {
      if(bonus.tipo === BONUS_DADO.ATAQUE) bonusAtaque = bonusAtaque + bonus.modificador
      if(bonus.tipo === BONUS_DADO.CONJURACAO) bonusConjuração = bonusConjuração + bonus.modificador
      if(bonus.tipo === BONUS_DADO.DANO) bonusDano = bonusDano + bonus.modificador
      if(bonus.tipo === BONUS_DADO.CURA) bonusCura = bonusCura + bonus.modificador
    })
    
    const novosBonus = []
    if(bonusAtaque !== 0) novosBonus.push({nome: "Ataque", valor: bonusAtaque})
    if(bonusConjuração !== 0) novosBonus.push({nome: "Conjuração", valor: bonusConjuração})
    if(bonusDano !== 0) novosBonus.push({nome: "Dano", valor: bonusDano})
    if(bonusCura !== 0) novosBonus.push({nome: "Cura", valor: bonusCura})

    return (
      <ul>
        {novosBonus.map((bonus) => {
          return (
            <li>
              <div>
                <img src={ICONS.BONUS_DADO} alt="Ícone do atributo bônus" />{bonus.nome}:
              </div>
              +{bonus.valor}
            </li>
          );
        })}
      </ul>
    )
  }

  function renderResistenciaLista() {
    let novasResistencias = []
    personagem.resistenciaDano.map(resistencia=> {
      const resistenciaElemento = novasResistencias.find(novaResistencia=> novaResistencia.elemento===resistencia.elemento)
      if(resistenciaElemento) {
        novasResistencias = [
          ...novasResistencias.filter(novaResistencia=> novaResistencia.elemento !==resistencia.elemento),
          {...resistenciaElemento, valor: resistenciaElemento.valor + resistencia.valor}
        ]
      }
      else {
        novasResistencias = [...novasResistencias, {...resistencia}]
      }
    })

    return (
      <ul>
        {novasResistencias.map((resistencia) => {
          return (
            <li>
              <div>
                <img src={ICONS[`ELEMENTO_${resistencia.elemento}`]} alt={`Ícone do elemento ${resistencia.elemento}`} />{ELEMENTOS_NOMES[resistencia.elemento]}:
              </div>
              {resistencia.valor}
            </li>
          );
        })}
      </ul>
    )
  }

  function renderCardEquipamento(itemId, iconDefault, tipo) {
    const itemData = EQUIPAMENTOS_DATA.find((item) => item.id === itemId);
    return (
      <div
        onClick={
          setTela
            ? () => {
              setTela("EQUIPAMENTOS");
            }
            : () => handleNavigate(`equipamentos/${tipo}`)
        }
      >
        {itemId ? (
          <img className="item-equipado" src={itemData.sprite} alt={`Ícone de `} />
        ) : (
          <>
            <img src={iconDefault} alt="Ícone do item" />
            {!personagemBatalha ? <h1>+</h1> : null}
          </>
        )}
      </div>
    );
  }

  return (
    <ContainerScreen>
      <BackButton
        onClick={
          onBack
            ? () => {
              onBack();
            }
            : null
        }
      />
      <div className="personagem-detalhado">
        {personagem ? (
          <>
            <section className="personagem-menu">
              <ul>
                {!personagemBatalha ? renderOpcoes("Evoluir", "evoluir") : null}
                {renderOpcoes("Equipamento", "equipamentos")}
                {renderOpcoes("Consumíveis", "consumiveis")}
                {renderOpcoes("Ações", "acoes")}
                {renderOpcoes("Talentos", "talentos")}
                {!personagemBatalha ? renderOpcoes("Visuais", "visuais") : null}
              </ul>
            </section>
            <img src={personagem.sprite} alt="Sprite do personagem" />
            <section className="personagem-info">
              <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt="Ícone do elemento" className="elemento" />

              <h1>{personagem.nome}</h1>
              <h2>{personagem.titulo}</h2>
              <div>
                <RaridadeEstrelas quantidade={personagem.raridade} />
              </div>
              <h3>
                Level {personagem.level}
                <span>/20</span>
              </h3>
              <div className="barra-experiencia">
                <h1>Exp.</h1>
                <h1>
                  {personagem.experiencia.atual}
                  <span>/{personagem.experiencia.maximo}</span>
                </h1>
              </div>
              <ul>
                <li>
                  <div>
                    <img src={ICONS.PV} alt="Ícone de Vida" />
                    Pontos de Vida:
                  </div>
                  {personagem.pv.atual}/{personagem.pv.maximo}
                </li>
                <li>
                  <div>
                    <img src={ICONS.PM} alt="Ícone de Mana" />
                    Pontos de Mana:
                  </div>
                  {personagem.pm.atual}/{personagem.pm.maximo}
                </li>
                <li>
                  <div>
                    <img src={ICONS.DEFESA} alt="Ícone de Defesa" />
                    Defesa:
                  </div>
                  {personagem.defesa}
                </li>
                
                {personagem.resistenciaDano.length > 0 ?
                  <li className="bonus-lista">
                    <div>
                      <img src={ICONS.CONDICAO_PROTECAO_ARCANA} alt="Ícone de Resistência a Dano." />
                      Resistências a Dano:
                    </div>
                    {renderResistenciaLista()}
                  </li>
                  : null}

                <li>
                  <div>
                    <img src={ICONS.FORCA} alt="Ícone de Força" />
                    Força:
                  </div>
                  {personagem.atributos.forca}
                </li>
                <li>
                  <div>
                    <img src={ICONS.AGILIDADE} alt="Ícone de Agilidade" />
                    Agilidade:
                  </div>
                  {personagem.atributos.agilidade}
                </li>
                <li>
                  <div>
                    <img src={ICONS.MAGIA} alt="Ícone de Magia" />
                    Magia:
                  </div>
                  {personagem.atributos.magia}
                </li>
                <li>
                  <div>
                    <img src={ICONS.VIGOR} alt="Ícone de Vigor" />
                    Vigor:
                  </div>
                  {personagem.atributos.vigor}
                </li>

                {personagem.bonusDado.length > 0 ?
                  <li className="bonus-lista">
                    <div>
                      <img src={ICONS.BONUS_DADO} alt="Ícone de Bônus no dado." />
                      Bônus:
                    </div>
                    {renderBonusLista()}
                  </li>
                  : null}
              </ul>
              <section className="equipamentos">
              <h3>Equipamentos:</h3>
              <ul>
                {renderCardEquipamento(personagem.equipamentos.arma, ICONS.ARMA, "ARMA")}
                {renderCardEquipamento(personagem.equipamentos.armadura, ICONS.ARMADURA, "ARMADURA")}
                {renderCardEquipamento(personagem.equipamentos.acessorio1, ICONS.ANEL, "ACESSORIO_1")}
                {renderCardEquipamento(personagem.equipamentos.acessorio2, ICONS.ANEL, "ACESSORIO_2")}
              </ul>
              </section>
            </section>
          </>
        ) : null}
      </div>
    </ContainerScreen>
  );
}
