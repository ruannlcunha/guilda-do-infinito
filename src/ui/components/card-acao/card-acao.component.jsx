import { ACAO_CATEGORIA, ACAO_EXECUCAO } from "../../../constants/acoes/acoes.constant";
import { ICONS } from "../../../constants/images";
import { RaridadeEstrelas } from "../raridade-estrelas/raridade-estrelas.component";
import "./card-acao.style.css";

export function CardAcao({ acao, onClick }) {
  const isConsumivel = acao.quantidade;
  let categoriaDanoIcon = null;
  if (acao.categoria === ACAO_CATEGORIA.CORPO_A_CORPO) categoriaDanoIcon = ICONS.FORCA;
  if (acao.categoria === ACAO_CATEGORIA.DISTANCIA) categoriaDanoIcon = ICONS.AGILIDADE;
  if (acao.categoria === ACAO_CATEGORIA.MAGICO) categoriaDanoIcon = ICONS.MAGIA;

  return (
    <div className="card-acao" onClick={onClick}>
      <div className="acao-elemento">
        <img
          src={isConsumivel ? acao.sprite : ICONS[`ELEMENTO_${acao.elemento}`]}
          alt={isConsumivel ? `Ícone do item ${acao.nome}` : `Elemento ${acao.elemento}`}
          style={{
            background: `${isConsumivel ? `var(--card-${acao.raridade}-estrelas` : `var(--fundo-${acao.elemento})`}`
          }}
        />
        {acao.raridade ? <RaridadeEstrelas quantidade={acao.raridade} /> : null}
      </div>
      <section className="card-detalhes">
        <header className="card-header">
          <div className="acao-nome">
            <h1>{acao.nome}</h1>
            {acao.execucao === ACAO_EXECUCAO.EXTRA ? <img src={ICONS.ESTRELA} alt={`Ícone de Ação Extra (uma estrela)`} /> : null}
            {categoriaDanoIcon ? <img src={categoriaDanoIcon} alt={`Ícone de ${acao.categoria}`} /> : null}
          </div>

          {acao.custo && !isConsumivel ? (
            <div className="acao-custo">
              <h2>Custo: </h2>
              <h3>{acao.custo} PM</h3>
            </div>
          ) : null}

          {isConsumivel ? (
            <div className="acao-custo">
              <h4>Quantidade: </h4>
              <h3 style={{ width: "2vw" }}>x{acao.quantidade}</h3>
            </div>
          ) : null}
        </header>
        <div className="acao-descricao">
          <p>
            {acao.dadoDeDano ? (
              <>
                <span>Dano: {acao.dadoDeDano}</span>
                <br />
              </>
            ) : null}

            {acao.efeito ? acao.efeito : acao.descricao}
          </p>
        </div>
      </section>
    </div>
  );
}
