import SOL_1_SPRITE from "./assets/SOL_1_SPRITE.png"
import SOL_1_PERFIL from "./assets/SOL_1_PERFIL.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const SOL = {
  id: 5,
  nome: "Sol",
  elemento: "FOGO",
  arma: "PESADA",
  comportamento: "ATACANTE",
  corTema: "tema-vermelho",
  estrelas: 5,
  visuais:[
      {
          skinId: 1,
          nome: "Original",
          sprite: SOL_1_SPRITE,
          perfil: SOL_1_PERFIL,
      },
  ],
  evolucoes: [
      {
          level: 4,
          experienciaNecessaria: 100,
          pv: 55,
          pm: 20,
          atributos: {
              forca: 4,
              agilidade: 4,
              magia: 1,
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