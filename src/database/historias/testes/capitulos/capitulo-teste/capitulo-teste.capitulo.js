import { MAPAS } from "../../../../../constants/images/mapas.constant";
import { TESTE_BATALHA } from "./episodios/teste-batalha/teste-batalha.episodio";
import { TESTE_CENA_2 } from "./episodios/teste-cena-2/teste-cena-2.episodio";
import { TESTE_CENA } from "./episodios/teste-cena/teste-cena.episodio";
import { TESTE_CHEFE } from "./episodios/teste-chefe/teste-chefe.episodio";

export const CAPITULO_TESTE = {
  id: 1,
  title: "Capítulo 1: Teste",
  description: `lorem`,
  previewImage: MAPAS.COSMOS,
  background: null,
  episodios: [TESTE_CENA, TESTE_BATALHA, TESTE_CHEFE, TESTE_CENA_2]
};
