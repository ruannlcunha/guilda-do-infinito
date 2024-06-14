import MINUS_1_SPRITE from "./assets/MINUS_1_SPRITE.png"
import MINUS_1_PERFIL from "./assets/MINUS_1_PERFIL.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const MINUS = {
  id: 6,
  nome: "Minus",
  elemento: "FOGO",
  arma: "PESADA",
  comportamento: "ATACANTE",
  corTema: "tema-branco",
  estrelas: 5,
  skins:[
      {
          skinId: 1,
          nome: "Original",
          sprite: MINUS_1_SPRITE,
          perfil: MINUS_1_PERFIL,
      },
  ],
  evolucoes: [
      {
          level: 4,
          experienciaNecessaria: 100,
          pv: 60,
          pm: 10,
          atributos: {
              forca: 5,
              agilidade: 1,
              magia: 1,
              vigor: 4,
          },
          passivas: [
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