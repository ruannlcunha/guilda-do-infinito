export const THEME_TYPES = {
  DARK_THEME: "DARK",
  LIGHT_THEME: "LIGHT",
};

export const BASE_URL = "/guilda-do-infinito";

export const CONTEXT_CONFIG_DEFAULT = {
  somEfeitos: 10,
  somMusica: 10,
  tema: THEME_TYPES.LIGHT_THEME,
};

export const CONTEXT_CONFIG_NAMES = {
  SOM_EFEITOS: "somEfeitos",
  SOM_MUSICA: "somMusica",
  TEMA: "tema",
};

export const BANNER_DURACAO = {
  TEXTO: 5000,
  ATAQUE: 8000,
  ROLAGEM: 5000,
  INIMIGO: 5000,
  DEFESA_EFFECT: 3500,
}

export const BANNER_TIPOS = {
  TEXTO: "Texto",
  ATAQUE: "Ataque",
  ROLAGEM: "Rolagem",
  INIMIGO: "Ação Inimigo",

}

export const CENAS_TIPO = {
  DIALOGO: "DIÁLOGO",
  IMAGEM: "IMAGEM",
}

export const PRONOMES = {
  NULO: {
    tipo: "NULO",
    pronome: "NULO",
    minusculo_1: "NULO",
    minusculo_2: "NULO",
    minusculo_3: "NULO",
    maiusculo_1: "NULO",
    maiusculo_2: "NULO",
  },
  MASCULINO: {
    tipo: "MASCULINO",
    pronome: "Ele/Dele",
    minusculo_1: "o",
    minusculo_2: "o",
    minusculo_3: "",
    maiusculo_1: "O",
    maiusculo_2: "O",
  },
  FEMININO: {
    tipo: "FEMININO",
    pronome: "Ela/Dela",
    minusculo_1: "a",
    minusculo_2: "a",
    minusculo_3: "a",
    maiusculo_1: "A",
    maiusculo_2: "A",
  },
  NAO_BINARIO: {
    tipo: "NAO_BINARIO",
    pronome: "Elu/Delu",
    minusculo_1: "u",
    minusculo_2: "e",
    minusculo_3: "e",
    maiusculo_1: "U",
    maiusculo_2: "E",
  },
}

export const RECOMPENSAS_TIPO = {
  ARMA: "ARMA",
  PERSONAGEM: "PERSONAGEM",
}

export const ITEM_PROFICIENCIA = {
  PESADA: "Pesada",
  LEVE: "Leve",
}

export const EPISODIO_TIPO = {
  DIALOGO: {
    nome: "Diálogo",
    cor: "mid-green",
    gradient: "dark-green",
  },
  BATALHA: {
    nome: "Batalha",
    cor: "mid-red",
    gradient: "dark-red",
  },
  CHEFE: {
    nome: "Batalha contra Chefe",
    cor: "purple",
    gradient: "dark-purple",
  },
}

export const MODOS_JOGO = {
  VERSUS: "VERSUS",
  HISTORIA: "HISTORIA",
}