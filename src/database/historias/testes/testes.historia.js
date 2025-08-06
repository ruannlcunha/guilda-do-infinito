import { IMAGES } from "../../../constants/images";
import { CAPITULO_TESTE_2 } from "./capitulos/capitulo-teste-2/capitulo-teste-2.capitulo";
import { CAPITULO_TESTE } from "./capitulos/capitulo-teste/capitulo-teste.capitulo";

export const TESTES = {
  id: 0,
  title: "Testes",
  description: `Lorem impsum blablabla`,
  previewImage: IMAGES.CEU,
  background: IMAGES.CEU,
  url: `/historia/testes`,
  capitulos: [CAPITULO_TESTE, CAPITULO_TESTE_2]
};
