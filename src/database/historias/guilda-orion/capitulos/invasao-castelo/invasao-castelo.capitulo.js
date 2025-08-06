import PREVIEW from "./assets/PREVIEW.png";
import { CABANA_COSMULA } from "./episodios/cabana-cosmula/cabana-cosmula.episodio";
import { DEMONIO_PALIDO } from "./episodios/demonio-palido/demonio-palido.episodio";
import { REI_DAS_SOMBRAS } from "./episodios/rei-das-sombras/rei-das-sombras.episodio";
import { SONHO_ALAN } from "./episodios/sonho-alan/sonho-alan.episodio";
import { UM_MERGULHO } from "./episodios/um-mergulho/um-mergulho.episodio";

export const INVASAO_CASTELO = {
  id: 5,
  title: "Capítulo 5: Invasão ao Castelo",
  description: `O grupo está infiltrado dentro do Castelo Gélido, o que eles farão?`,
  previewImage: PREVIEW,
  background: null,
  episodios: [DEMONIO_PALIDO, REI_DAS_SOMBRAS, SONHO_ALAN, UM_MERGULHO, CABANA_COSMULA]
};
