import OTAVIA_1_SPRITE from "./assets/OTAVIA_1_SPRITE.png"
import OTAVIA_1_PERFIL from "./assets/OTAVIA_1_PERFIL.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const OTAVIA = {
  id: 7,
  nome: "Otavia",
  elemento: "FOGO",
  arma: "PESADA",
  comportamento: "ATACANTE",
  corTema: "tema-rosa",
  estrelas: 5,
  visuais:[
      {
          skinId: 1,
          nome: "Original",
          sprite: OTAVIA_1_SPRITE,
          perfil: OTAVIA_1_PERFIL,
      },
  ],
  evolucoes: [
      {
          level: 4,
          experienciaNecessaria: 100,
          pv: 40,
          pm: 35,
          atributos: {
              forca: 1,
              agilidade: 2,
              magia: 4,
              vigor: 2,
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