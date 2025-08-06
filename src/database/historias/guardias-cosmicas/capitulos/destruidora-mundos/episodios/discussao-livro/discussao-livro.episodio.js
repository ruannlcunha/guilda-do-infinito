import CENA_1 from "./assets/CENA_1.png";
import AURORA_1 from "../../../../../../personagens/aurora/assets/AURORA_2_PERFIL.png";
import OPHELLIA_1 from "../../../../../../personagens/ophellia/assets/OPHELLIA_2_PERFIL.png";
import SELENE_1 from "../../../../../../personagens/selene/assets/SELENE_2_PERFIL.png";
import { CENAS_TIPO } from "../../../../../../../constants";

export const DISCUSSAO_LIVRO = {
  id: 4,
  title: "Episódio 4: Discussão Sobre Livros",
  description: `As amigas discutem sobre qual livro irão ler na reunião daquele dia.`,
  previewImage: CENA_1,
  background: CENA_1,
  url: "/historia/guardias-cosmicas/3/4/cena",
  cenas: [
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Selene",
      perfil: SELENE_1,
      texto: "Ta bom gente, qual vamos ler dessa vez?"
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Ophellia",
      perfil: OPHELLIA_1,
      texto: "Vamos ler Eclipse 3: O Amor de Eddie e Feya!!"
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Aurora",
      perfil: AURORA_1,
      texto: "Aquele que o Eddie e o Jake se beijam? Nós já lemos 7 vezes esse livro."
    }
  ]
};
