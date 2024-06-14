import MAYA_1_SPRITE from "./assets/MAYA_1_SPRITE.png"
import MAYA_1_PERFIL from "./assets/MAYA_1_PERFIL.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const MAYA = {
  id: 8,
  nome: "Maya",
  elemento: "FOGO",
  arma: "PESADA",
  comportamento: "ATACANTE",
  corTema: "tema-preto",
  estrelas: 5,
  skins:[
      {
          skinId: 1,
          nome: "Original",
          sprite: MAYA_1_SPRITE,
          perfil: MAYA_1_PERFIL,
      },
  ],
  evolucoes: [
      {
          level: 4,
          experienciaNecessaria: 100,
          pv: 45,
          pm: 15,
          atributos: {
              forca: 4,
              agilidade: 1,
              magia: 2,
              vigor: 3,
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