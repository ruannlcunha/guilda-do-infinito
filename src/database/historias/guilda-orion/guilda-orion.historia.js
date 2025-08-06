import PREVIEW from "./assets/PREVIEW.png";
import { GUILDA_ORION_CAP } from "./capitulos/guilda-orion/guilda-orion.capitulo";
import { PROLOGO } from "./capitulos/prologo/prologo.capitulo";

export const GUILDA_ORION = {
  id: 1,
  title: "A Guilda de Orion",
  description: `Um grupo de portadores da Benção de Orion são enviados para uma floresta mágica em busca de encontrar uma possível ameaça de Sombrius. 
    Chegando lá eles acabam se envolvendo em um conflito muito maior que o esperado. Essa é a primeira história no universo de O Legado de Orion.`,
  previewImage: PREVIEW,
  background: PREVIEW,
  url: `/historia/guilda-de-orion`,
  capitulos: [PROLOGO, GUILDA_ORION_CAP]
};
