import { useState } from "react";
import { BANNER_DURACAO, BANNER_TIPOS } from "../../constants";
import { useSound } from "../audio/sound/use-sound.hook";
import { ICONS } from "../../constants/images";

export function useBanners() {
  const { playBanner, playDado } = useSound();
  const [banners, setBanners] = useState({
    ativo: false,
    ativoDano: false,
    tipo: null,
    evento: null,
    texto: "",
    ataque: null,
    defesa: null,
    isCritico: false,
    dados: [],
    modificadores: [],
    total: null,
    nomeAcao: null,
    personagemPerfil: null,
    alvoPerfil: null
  });

  function ativarBannerInimigo(nomeAcao, personagemPerfil, alvo, cor) {
    let alvoPerfil = null;
    if (Array.isArray(alvo)) {
      alvoPerfil = ICONS.EM_AREA;
    } else {
      alvoPerfil = alvo.perfil;
    }

    playBanner();
    setBanners((old) => {
      return {
        ...old,
        ativo: true,
        tipo: BANNER_TIPOS.INIMIGO,
        nomeAcao,
        personagemPerfil,
        alvoPerfil,
        cor
      };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return {
            ...old,
            ativo: false,
            tipo: null,
            nomeAcao: null,
            personagemPerfil: null,
            alvoPerfil: null,
            cor: null
          };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.INIMIGO);
  }

  function ativarBannerTexto(texto) {
    playBanner();
    setBanners((old) => {
      return { ...old, texto: texto, ativo: true, tipo: BANNER_TIPOS.TEXTO };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return { ...old, texto: "", ativo: false, tipo: null };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.TEXTO);
  }

  function ativarBannerAtaque(ataque, defesa, cor) {
    playBanner();
    playDado();
    setBanners((old) => {
      return {
        ...old,
        ativo: true,
        tipo: BANNER_TIPOS.ATAQUE,
        ataque,
        defesa,
        cor
      };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativo) {
          return {
            ...old,
            ativo: false,
            tipo: null,
            ataque: null,
            defesa: null,
            cor: null
          };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.ATAQUE);
  }

  function ativarBannerRolagem(dados, modificadores, total, personagem, resultadoAtaque, alvo) {
    const isCritico = resultadoAtaque ? resultadoAtaque.dado === 20 : null;
    const novosModificadores = [...modificadores];

    playBanner();
    playDado();
    setBanners((old) => {
      return {
        ...old,
        ativoDano: true,
        tipo: BANNER_TIPOS.ROLAGEM,
        cor: personagem.corTema,
        dados,
        modificadores: novosModificadores,
        total,
        isCritico
      };
    });

    setTimeout(() => {
      setBanners((old) => {
        if (old.ativoDano) {
          return {
            ...old,
            ativoDano: false,
            tipo: null,
            dados: [],
            modificadores: [],
            total: null,
            isCritico: false
          };
        }
        return { ...old };
      });
    }, BANNER_DURACAO.ROLAGEM);
  }

  return {
    banners,
    setBanners,
    ativarBannerTexto,
    ativarBannerAtaque,
    ativarBannerInimigo,
    ativarBannerRolagem
  };
}
