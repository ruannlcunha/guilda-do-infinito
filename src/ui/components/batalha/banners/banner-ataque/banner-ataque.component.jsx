import { TEXTURES } from "../../../../../constants/images";
import "./banner-ataque.style.css";

export function BannerAtaque({ banners, testeRealizado, renderPularBanner }) {
  const bannerStyle = {
    background: `url(${TEXTURES.BANNER}),
    linear-gradient(0deg,transparent 5%,var(--${banners.cor}) 15%,var(--${banners.cor}) 50%,var(--${banners.cor})
    85%,transparent 95%)`,
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat"
  };
  return (
    <>
      {renderPularBanner()}
      <div className="banner-ataque" style={bannerStyle}>
        {testeRealizado ? (
          <h1>
            {banners.ataque.resultadoDado === 20
              ? "Sucesso Crítico"
              : banners.ataque.resultadoDado === 1
              ? "Falha Crítica"
              : banners.defesa === null
              ? "Ataque realizado"
              : banners.ataque.resultadoTotal >= banners.defesa
              ? "Sucesso"
              : "Falha"}
          </h1>
        ) : (
          <>
            <div>
              <div className="d20">{banners.ataque.resultadoDado}</div>
              <h2>Dado</h2>
            </div>
            {banners.ataque.modificadores
              ? banners.ataque.modificadores.map((modificador) => {
                  return (
                    <>
                      <h2>+</h2>
                      <div>
                        <div className={modificador.atributo}>{modificador.valor}</div>
                        <h2>{modificador.atributo}</h2>
                      </div>
                    </>
                  );
                })
              : null}
            <h2>=</h2>
            <div>
              <div className="valor-ataque">{banners.ataque.resultadoTotal}</div>
              <h2>Ataque</h2>
            </div>
            {banners.defesa ? (
              <>
                <div>
                  <div className="cross-sword"></div>
                </div>
                <div>
                  <div className="shield">{banners.defesa}</div>
                  <h2>Defesa</h2>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
}
