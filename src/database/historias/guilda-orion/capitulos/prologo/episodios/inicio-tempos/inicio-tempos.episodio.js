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

export const INICIO_TEMPOS = {
  ...BASE_DIALOGO,
  id: 1,
  title: "Episódio 1: O Início dos Tempos",
  description: `O Vazio ao se sentir sozinho, criou os dois seres mais importantes do Cosmos, 
    que futuramente iriam construir tudo que nós vivemos. Esta é a história resumida dos eventos 
    que originaram o ínicio dos tempos.`,
  previewImage: CENA_2,
  background: CENA_2,
  tipo: EPISODIO_TIPO.DIALOGO,
  preRequisito: null,
  url: "/historia/guilda-de-orion/1/1/cena",
  cenas: [
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_1,
      nome: "Narrador",
      texto: `Antes do início dos tempos, o Vazio estava só.`,
      musica: MUSICS.COSMOS
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_2,
      nome: "Narrador",
      texto: `Por se sentir muito sozinho, o Vazio criou duas entidades cósmicas. Estes eram os 
            deuses gêmeos: Orion, o Deus da Criação e Cypher, o Deus da Destruição. Juntamente deles foi 
            criado um lugar para eles ficarem, o Cosmos. Porém com o surgimento de algo, 
            o Vazio se condenou à inexistência.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_3,
      nome: "Narrador",
      texto: `Com o poder da criação, Orion viu a oportunidade de criar algo naquele lugar imenso que 
            era o Cosmos, porém ele sabia que não conseguiria fazer isso sozinho, pois seu irmão não criava,
            apenas destruía. Por este motivo ele criou mais 10 deuses para acompanhá-los, que assim formariam 
            o primeiro Panteão Cósmico.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_4,
      nome: "Narrador",
      texto: `Cada divindade possuía uma especialidade, e juntos eles criaram um novo Plano de Existência, 
            chamado de "Arian, o Plano Material".`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_5,
      nome: "Narrador",
      texto: `Os deuses distribuiram funções entre eles. Alguns criaram seres vivos, 
            paisagens, conceitos complexos como Tempo e Magia. E alguns criaram seus próprios Planos de 
            Existência e até novas divindades.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_6,
      nome: "Narrador",
      texto: `Orion tomou o papel de cuidar de tudo aquilo que foi criado, por isso frequentemente ele 
            visitava Arian para ajudar pessoas, consertar terras, e até auxiliar os próprios deuses 
            em suas tarefas.`
    },
    {
      tipo: CENAS_TIPO.DIALOGO,
      fundo: CENA_7,
      nome: "Narrador",
      texto: `E naquele breve tempo, Arian viveu em completa paz... Até algo acontecer.`
    },
    {
      tipo: CENAS_TIPO.IMAGEM,
      fundo: CENA_8,
      isFinish: true
    }
  ]
};
