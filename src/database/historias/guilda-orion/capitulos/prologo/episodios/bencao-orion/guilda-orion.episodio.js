import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants";
import { BASE_DIALOGO } from "../../../../../_base";
import { MUSICS } from "../../../../../../../constants/audios/musics.constant";
import CENA_1 from "./assets/CENA_1.png";
import CENA_2 from "./assets/CENA_2.png";
import CENA_3 from "./assets/CENA_3.png";
import CENA_4 from "./assets/CENA_4.png";
import CENA_5 from "./assets/CENA_5.png";
import CENA_6 from "./assets/CENA_6.png";
import CENA_7 from "./assets/CENA_7.png";
import CENA_8 from "./assets/CENA_8.png";
import CENA_9 from "./assets/CENA_9.png";
import CENA_10 from "../../../../assets/PREVIEW.png";

export const GUILDA_ORION = {
  ...BASE_DIALOGO,
  id: 4,
  title: "Episódio 4: A Guilda de Orion",
  description: `Com o surgimento de diversas pessoas recebendo os amuletos chamados de Bençãos de Orion 
    e a ameaça dos Sombrius se tornando mais forte, o Lorde Demônio decide juntar o seu exército. Porém não é 
    apenas ele que começa a juntar forças...`,
  previewImage: CENA_10,
  background: CENA_10,
  tipo: EPISODIO_TIPO.DIALOGO,
  preRequisito: null,
  url: "/historia/guilda-de-orion/1/4/cena",
  cenas: [
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Narrador",
      texto: `Após o evento do cavaleiro, pessoas de todos os lugares do mundo começaram a receber 
            esses amuletos divinos que foram chamados de "Benção de Orion".`,
      musica: MUSICS.HOME
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Narrador",
      texto: `A Benção só era concedida a uma criatura quando um grande evento ocorria`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Narrador",
      texto: `Alguns recebiam quando estavam prestes a morrer, quando viam pessoas queridas morrerem, 
            quando realizavam atos de extrema bondade, e diversos outros.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_2,
      nome: "Narrador",
      texto: `Desde então muitas pessoas tentaram obter uma Benção, seja realizando feitos majestosos 
            ou até mesmo tentando roubar, mas nada disso teve resultado, ninguém que tinha a intenção de 
            obter uma benção conseguia uma.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_2,
      nome: "Narrador",
      texto: `E aqueles que tentavam roubar descobriram que o amuleto é ligado exclusivamente com seu 
            portador, e quando a Benção ficava muito longe ela surgia na posse de seu portador novamente.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_3,
      nome: "Narrador",
      texto: `Mesmo a Benção sendo algo possivelmente dado pelo próprio Orion, Deus da Criação, os seus 
            portadores nem sempre são tratados com respeito.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_3,
      nome: "Narrador",
      texto: `Algumas pessoas tem inveja de tal poder, enquanto outras o temem, pois você ter o poder 
            para enfrentar um Sombrius, significa que você terá que lidar com eles em algum momento, o que 
            não é desejo de ninguém.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_4,
      nome: "Narrador",
      texto: `Não se sabe exatamente todas as informações sobre as Bençãos, a única coisa que se sabe 
            é a capacidade de matar Sombrius, o que nem sempre acontece, já que algumas pessoas que recebem 
            a Benção preferem evitar essas criaturas.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_5,
      nome: "Narrador",
      texto: `Com a vinda dos Sombrius, a Profecia do Ragnarok se tornou mais forte, e muitos começaram 
            a achar que ela realmente iria se concretizar.`,
      musica: MUSICS.SUSPENSE_1
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_6,
      nome: "Narrador",
      texto: `Por isso, o atual Lorde Demônio, responsável pelo Território Sombrio, começou a reunir 
            um grupo de guerreiros para obter os 7 Selos de Andrômeda e trazer Cypher de volta ao 
            Plano Material.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_7,
      nome: "Narrador",
      texto: `Esse grupo formado pelo Lorde Demônio foi nomeado por ele de Legião de Cypher.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      nome: "Narrador",
      texto: `E para combater não apenas os Sombrius, como também os legionários de Cypher, foi criado 
            um grupo secreto de portadores de Benção.`,
      musica: MUSICS.FELIZ_2
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_8,
      nome: "Narrador",
      texto: `Eles se chamam...`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_9,
      nome: "Narrador",
      texto: `A Guilda de Orion.`
    },
    {
      tipo: CENAS_TIPO.IMAGEM,
      fundo: CENA_9
    },
    {
      tipo: CENAS_TIPO.IMAGEM,
      fundo: CENA_10,
      isFinish: true
    }
  ]
};
