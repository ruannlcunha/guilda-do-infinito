import { MAPAS } from "../../../../../constants/images/mapas.constant";
import { CARRASCO } from "./episodios/carrasco/carrasco.episodio";
import { GENIA_TREVAS } from "./episodios/genia-trevas/genia-trevas.episodio";

export const QUEDA_RAMMETH = {
  id: 5,
  title: "Capítulo Final: A Queda de Rammeth",
  description: `Nailah recuperou suas memórias seladas dentro do tesouro de Khaas. Agora ela só deseja
    uma coisa, retomar o domínio do reino que um dia foi seu.`,
  previewImage: MAPAS.MURO_DESERTO_NOITE,
  background: null,
  episodios: [CARRASCO, GENIA_TREVAS]
};
