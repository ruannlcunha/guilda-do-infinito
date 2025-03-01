import { BANNER_DURACAO } from "../../../constants";
import { useRolarIniciativa } from "../rolar-iniciativa/use-rolar-iniciativa.hook";

export function useIniciarBatalha() {
  const { rolarIniciativa } = useRolarIniciativa();

  function _rolarIniciativa(personagens, ordemIniciativa, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, isDadosAtivos: true };
    });
    const novaOrdemIniciativa = rolarIniciativa(personagens, ordemIniciativa);
    functions.setTurnos(old=>{return {...old, ordemIniciativa: novaOrdemIniciativa}});

    setTimeout(() => {
      functions.adicionarLog("Todos rolaram suas iniciativas!")
      functions.setBanners(old => { return {...old, evento: null} })
      functions.setAnimacoes((old) => {
        return {
          ...old,
          isDadosAtivos: false,
          hudAtivo: true,
          iniciativaTerminou: true,
        };
      });
    }, 5000);
  }

  function _pularBannersInicio(personagens, ordemIniciativa, functions, primeiroTimeout, segundoTimeout) {
    clearTimeout(primeiroTimeout)
    clearTimeout(segundoTimeout)
    _rolarIniciativa(personagens, ordemIniciativa, functions)
  }

  function iniciarBatalha(personagens, ordemIniciativa, functions) {
    functions.ativarBannerTexto("BATALHA", functions.setBanners);

    const primeiroTimeout = setTimeout(() => {
      functions.ativarBannerTexto("Rolem iniciativa!", functions.setBanners);
    }, BANNER_DURACAO.TEXTO+100);

    const segundoTimeout = setTimeout(() => {
      _rolarIniciativa(personagens, ordemIniciativa, functions)
    }, (BANNER_DURACAO.TEXTO*2)+100);
    
    functions.setBanners(old => { return {...old, evento: 
      ()=>{_pularBannersInicio(personagens, ordemIniciativa, functions, primeiroTimeout, segundoTimeout)}} })
      
  }

  return { iniciarBatalha };
}
