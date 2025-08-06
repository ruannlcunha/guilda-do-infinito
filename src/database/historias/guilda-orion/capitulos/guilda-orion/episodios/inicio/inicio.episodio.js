import CENA_1 from "./assets/CENA_1.png";
import CENA_2 from "./assets/CENA_2.png";
import CENA_3 from "./assets/CENA_3.png";
import CENA_4 from "./assets/CENA_4.png";
import CENA_5 from "./assets/CENA_5.png";
import CENA_6 from "./assets/CENA_6.png";
import CENA_7 from "./assets/CENA_7.png";
import CENA_8 from "./assets/CENA_8.png";
import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants";
import { IMAGES } from "../../../../../../../constants/images";
import { findGachaPersonagem } from "../../../../../../../utils/gacha-functions.util";
import { MUSICS } from "../../../../../../../constants/audios/musics.constant";

export const INICIO = {
  id: 1,
  title: "Episódio 1: O início de tudo",
  description: `Durante uma viagem de carroça pela estrada principal de mercadores para a capital do reino, uma família de mercadores é atacada por 
    criaturas. Porém quando o perigo surge, um grupo de pessoas aparece para ajudar.`,
  previewImage: CENA_1,
  background: CENA_1,
  tipo: EPISODIO_TIPO.DIALOGO,
  preRequisito: null,
  url: "/historia/guilda-de-orion/2/1/cena",
  cenas: [
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      musica: MUSICS.HOME,
      nome: "Narrador",
      texto: "Em uma estrada comum pelo transporte de mercadorias, uma carroça carregando cargas de alimentos está sendo conduzida por uma família de comerciantes."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Narrador",
      texto: "A viagem é de alguns dias, e para distrair o filho do casal que é pequeno, a mãe do garoto realiza a leitura de alguns contos famosos da história."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_2,
      perfil: IMAGES.GENERICO_PERFIL,
      nome: "Mulher",
      texto: "E essa é a história de como os Deuses criaram o mundo onde moramos!"
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_2,
      perfil: IMAGES.GENERICO_PERFIL,
      nome: "Mulher",
      texto: "O que achou, filho?"
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_2,
      perfil: IMAGES.GENERICO_PERFIL,
      nome: "Garoto",
      texto: "Eu ador-"
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_3,
      texto: "*Tremor e som dos cavalos assustados",
      musica: MUSICS.SUSPENSE_1
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_4,
      nome: "Narrador",
      texto: "O pano velho que servia como porta para a carruagem é rasgada por garras pequenas e afiadas."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_4,
      nome: "Narrador",
      texto: "Uma criatura feita de sombras surge na frente dos dois, causando medo instantâneo."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_5,
      texto: "*Som semelhante a um chiado baixo e incompreensível."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_6,
      musica: MUSICS.FELIZ_1,
      nome: "Narrador",
      texto: "Até que uma flecha atravessa a criatura, destruindo ela por completo."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_6,
      nome: "Narrador",
      texto: "Entra um homem de orelhas pontudas, olhos dourados, vestes verdes e um arco em suas mãos."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_7,
      perfil: findGachaPersonagem(12, 1).perfil,
      nome: "Andy",
      texto: "Tá tudo bem, nós viemos ajudar."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_7,
      nome: "Narrador",
      texto: "O garoto admirado pelo herói que o salvou olha para trás dele, enxergando 3 silhuetas."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      nome: "Narrador",
      texto: `Um homem de cabelos brancos, repleto de marcas pelo corpo. Uma mulher de cabelos cacheados, um olho verde e outro castanho, usando peças de uma armadura dourada.
            E uma mulher com chifres, pele roxa, cabelo longo preso com mechas de cor turquesa.`
    },
    {
      tipo: CENAS_TIPO.IMAGEM,
      fundo: CENA_8
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      perfil: findGachaPersonagem(2, 4).perfil,
      nome: "Ayla",
      texto: "Andy, eles estão bem?"
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      perfil: findGachaPersonagem(12, 1).perfil,
      nome: "Andy",
      texto: "Tudo certo Ayla, eu não irei permitir que os Sombrius cheguem até eles."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      perfil: findGachaPersonagem(3, 3).perfil,
      nome: "Dominick",
      texto: "O cara da carroça tá machucado, precisamos acabar com isso logo."
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      perfil: findGachaPersonagem(4, 2).perfil,
      nome: "Aphelios",
      texto: "Chega de papo, tá na hora da gente acabar com isso.",
      isFinish: true
    }
  ]
};
