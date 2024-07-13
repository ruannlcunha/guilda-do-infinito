import CANARIO_1_SPRITE from "./assets/CANARIO_1_SPRITE.png"
import CANARIO_1_PERFIL from "./assets/CANARIO_1_PERFIL.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const CANARIO = {
  id: 11,
  nome: "Canario",
  elemento: "FOGO",
  arma: "PESADA",
  comportamento: "ATACANTE",
  corTema: "tema-vermelho",
  estrelas: 5,
  visuais:[
      {
          skinId: 1,
          nome: "Original",
          sprite: CANARIO_1_SPRITE,
          perfil: CANARIO_1_PERFIL,
      },
  ],
  evolucoes: [
      {
          level: 8,
          experienciaNecessaria: 100,
          pv: 200,
          pm: 25,
          atributos: {
              forca: 4,
              agilidade: 3,
              magia: 2,
              vigor: 3,
          },
          talentos: [
              //PASSIVAS.RESSURGIR,
              {id: 1, nome: "Ressurgir"}
          ],
          ataques: [
              ATAQUES_DATA.SOCO,
          ],
          habilidades: [
              HABILIDADES_DATA.CURA,
          ],
      },
  ]
}