import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../ataques";
import { HABILIDADES } from "../../habilidades";
import { TALENTOS } from "../../talentos";
import { equipamentosProntosData } from "./equipamentos-prontos.data";

export const _BASE_ORIGINAL = {
  id: 0,
  nome: "Base",
  titulo: "Título",
  pronomes: PRONOMES.MASCULINO,
  elemento: ELEMENTOS.NULO,
  corTema: COR_TEMA.BRANCO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: null,
      perfil: null,
      santuario: null
    }
  ],
  status: {
    pvBase: 1,
    pmBase: 1,
    pvBonus: 1
  },
  atributosBase: {
    forca: 1,
    agilidade: 1,
    magia: 1,
    vigor: 1
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [TALENTOS.CURA_APRIMORADA],
      ataques: [
        {
          ataqueId: ATAQUES.BOLA_DE_FOGO.id,
          variantes: ["NIVEL_1", "NIVEL_2"]
        }
      ],
      habilidades: [
        {
          habilidadeId: HABILIDADES.CURAR_FERIMENTOS.id,
          variantes: ["NIVEL_1", "NIVEL_2"]
        }
      ]
    }
  ],
  equipamentosProntos: equipamentosProntosData
};
