import { useEffect, useState } from "react";
import "./banner.style.css";
import { BANNER_DURACAO, BANNER_TIPOS } from "../../../../constants";
import { BannerAtaque, BannerInimigo, BannerRolagem, BannerTexto } from "./"
import { useSound } from "../../../../hook/audio/sound/use-sound.hook";

export function Banners({ banners, setBanners }) {
  const [testeRealizado, setTesteRealizado] = useState(false);
  const { playDadoResultado, playClick } = useSound()
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    if(banners.ativo && banners.tipo === BANNER_TIPOS.ATAQUE) {
      const _timeout = setTimeout(() => {
        playDadoResultado()
        setTesteRealizado(true);
      }, (BANNER_DURACAO.ATAQUE)/2);
      setTimeoutId(_timeout)
    } else {
      clearTimeout(timeoutId)
      setTesteRealizado(false);
    }
  }, [banners]);
  
  function handlePular() {
    setBanners(old => { return {...old, ativo: false} })
    playClick(2)
    banners.evento()
  }

  function renderPularBanner() {
    return <button onClick={handlePular} className="pular-banner">Pular</button>
  }

  return banners.ativo ? (
    <>
    {banners.tipo===BANNER_TIPOS.TEXTO ?
     <BannerTexto banners={banners} renderPularBanner={renderPularBanner}/> 
    : null}

    {banners.tipo===BANNER_TIPOS.ATAQUE ?
    <BannerAtaque banners={banners} testeRealizado={testeRealizado} renderPularBanner={renderPularBanner}/>
    : null}

    {banners.tipo===BANNER_TIPOS.ROLAGEM ? 
    <BannerRolagem banners={banners}  renderPularBanner={renderPularBanner}/>
    : null}
    
    {banners.tipo===BANNER_TIPOS.INIMIGO ? 
    <BannerInimigo banners={banners} />
    : null}
    </>
  ) : null;
}
