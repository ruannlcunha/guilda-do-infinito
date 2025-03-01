import { ICONS, TEXTURES } from "../../../../../constants/images"
import "./banner-rolagem.style.css"

export function BannerRolagem({banners, renderPularBanner}) { 

  const bannerStyle = {
    background: `url(${TEXTURES.BANNER}),
    linear-gradient(0deg,transparent 5%,var(--${banners.cor}) 15%,var(--${banners.cor}) 50%,var(--${banners.cor})
    85%,transparent 95%)`,
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  }

  function renderVantagem(multiplicador) {
    if(multiplicador!==1) {
      return (
        <>
        <img src={multiplicador===1.5 ? ICONS.SETA_VANTAGEM : ICONS.SETA_DESVANTAGEM} alt="Seta de Vantagem" />
        x0.5
        </>
      )
    }
  }

    return (
        <div className="banner-rolagem" style={bannerStyle}>
          {banners.dados.map((dado, i)=>{
            return (
              <>
              {i!==0 && banners.dados.length > 1 ?
              <h2>+</h2>
              :null}
              <div className="dado" key={i}>
                <div className="elemento-dado" style={{backgroundImage: `url(${ICONS[`ELEMENTO_${dado.elemento}`]})`}}>
                  {renderVantagem(dado.multiplicador)}
                </div>
                <div className={dado.tipo}>{dado.resultado}</div>
                <h2>{dado.tipo}</h2>
              </div>
              </>
            )
          })
            
          }
          {banners.modificadores.map((modificador, i)=>{
            return (
              <>
              <h2>+</h2>
              <div key={i}>
                <div className={modificador.atributo}>{modificador.valor}</div>
                <h2>{modificador.atributo}</h2>
              </div>
              </>)
          })
          }
          <h2>=</h2>
          <div>
            <div className="valor-total">
              {banners.isCritico ? <h3>2x</h3> : null}
              {banners.total}
            </div>
            <h2>Total</h2>
          </div>
        </div>
      )

}