import CENA_1 from "./assets/CENA_1.png";
import AKINN_1 from "../../../../../../personagens/akinn/assets/AKINN_3_PERFIL.png";
import NAILAH_1 from "../../../../../../personagens/nailah/assets/NAILAH_1_PERFIL.png";
import GENEVIEVE_1 from "../../../../../../personagens/genevieve/assets/GENEVIEVE_1_PERFIL.png";
import { CENAS_TIPO } from "../../../../../../../constants";

export const OFERTA_TRABALHO = {
  id: 2,
  title: "Episódio 2: Oferta de Trabalho",
  description: `Algumas pessoas aceitam uma oferta de trabalho misteriosa.`,
  previewImage: CENA_1,
  background: CENA_1,
  url: "/historia/segredo-de-khaas/3/2/cena",
  cenas: [
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Akinn",
      perfil: AKINN_1,
      texto: "Eles não iriam entender Nailah, eles são pobres..."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Nailah",
      perfil: NAILAH_1,
      texto: "Realmente, faz sentido."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Genevieve",
      perfil: GENEVIEVE_1,
      texto: "Só pra vocês saberem, nós estamos ouvindo."
    }
  ]
};
