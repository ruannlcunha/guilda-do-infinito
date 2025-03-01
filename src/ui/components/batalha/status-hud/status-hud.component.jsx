import "./status-hud.style.css";
import { calcularPorcentagem } from "../../../../utils";
import pixelTexture from "../../../../assets/img/textures/BANNER_TEXTURE.png";
import { CATEGORIA_CONDICAO, TIPO_CONDICAO } from "../../../../constants/personagens/personagem.constant";
import { ICONS } from "../../../../constants/images";

export function StatusHUD({ personagem, jogadores }) {
  const styleInvertido = personagem.isInimigo && jogadores==1
                      ||jogadores==0
  const porcentagemVida = calcularPorcentagem(
    personagem.pv.atual,
    personagem.pv.maximo
  );
  const porcentagemMana = calcularPorcentagem(
    personagem.pm.atual,
    personagem.pm.maximo
  );

  return (
    <section
      className="hud-status"
      style={{
        alignItems: `${styleInvertido ? "self-start" : ""}`,
        borderRadius: `${styleInvertido ? "5px 0px 0px 0px" : ""}`,
        background: `url(${pixelTexture}) ${styleInvertido ? "left" : "right"},
        linear-gradient(${styleInvertido ? "to left" : "to right"}, 
        var(--${personagem.corTema}) 0%, var(--${personagem.corTema}) 90%, transparent 99%, transparent 100%)`
      }}
    >
      <img
        src={personagem.perfil}
        alt=""
        style={{
          animation: `${styleInvertido ?"hud-perfil-inimigo 1s alternate infinite ease-in-out": ""}`,
          right: `${styleInvertido ? 0 : ""}`,
          left: `${!styleInvertido ? 0 : ""}`,
        }}
      />

      <header
        style={
          styleInvertido
            ? { borderRadius: "0px 0px 0px 5px", flexDirection: "row" }
            : null
        }
      >
        <div>
          <h1 style={styleInvertido ? { marginLeft: "2rem" } : null}>
            {personagem.nome}
          </h1>
          <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt={`ícone do elemento ${personagem.elemento}`} />
        </div>
      </header>
      <section style={styleInvertido ? { marginLeft: "2rem" } : null}>
        <div>
          <h2>
            PV: {personagem.pv.atual}/{personagem.pv.maximo}
          </h2>
          {personagem.condicoes.map(condicao=>{
            if(condicao.categoria===CATEGORIA_CONDICAO.FISICA) {
              return <img
              src={condicao.icon}
              style={{backgroundColor: condicao.tipo===TIPO_CONDICAO.BUFF ? "var(--mid-green)" : "var(--mid-red)"}}
              alt={`ícone de ${condicao.nome}`}
              />
            }
            })
          }
        </div>

        <div
          className="batalha-hud-barra"
          style={{
            background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`,
          }}
        ></div>

        <div>
        <h2>
          PM: {personagem.pm.atual}/{personagem.pm.maximo}
        </h2>
        {personagem.condicoes.map(condicao=>{
            if(condicao.categoria===CATEGORIA_CONDICAO.MENTAL) {
              return <img
              src={condicao.icon}
              style={{backgroundColor: condicao.tipo===TIPO_CONDICAO.BUFF ? "var(--mid-green)" : "var(--mid-red)"}}
              alt={`ícone de ${condicao.nome}`}
              />
            }
          })
        }
        </div>

        <div
        className="batalha-hud-barra"
        style={{background: `linear-gradient(to right, var(--blue) ${porcentagemMana}%, var(--light-grey) 1%)`,}}
        >
        </div>
      </section>
    </section>
  );
}
