import { MAPAS } from "../../../../../constants/images/mapas.constant";
import { GUILDA_ORION } from "./episodios/bencao-orion/guilda-orion.episodio";
import { GUERRA_DIVINA } from "./episodios/guerra-divina/guerra-divina.episodio";
import { INICIO_TEMPOS } from "./episodios/inicio-tempos/inicio-tempos.episodio";
import { MUNDO_POS } from "./episodios/mundo-pos/mundo-pos.episodio";
import PREVIEW from "./PREVIEW.png";

export const PROLOGO = {
  id: 1,
  title: "Capítulo 0: Prólogo",
  description: `Como o universo foi criado? O que são os deuses? O que aconteceu para tudo ser
    do jeito que é agora? Essas são perguntas difíceis de serem respondidas, e muitas vezes temos
    respostas diferentes para estas mesmas perguntas, mas que possuem sempre a mesma base.`,
  previewImage: PREVIEW,
  background: PREVIEW,
  episodios: [INICIO_TEMPOS, GUERRA_DIVINA, MUNDO_POS, GUILDA_ORION]
};
