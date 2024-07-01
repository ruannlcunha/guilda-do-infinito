import ANDY_1_SPRITE from "./assets/ANDY_1_SPRITE.png"
import ANDY_1_PERFIL from "./assets/ANDY_1_PERFIL.png"
import ANDY_1_SANTUARIO from "./assets/ANDY_1_SANTUARIO.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const ANDY = {
  id: 12,
  nome: "Andy",
  titulo: "Caçador dos Ventos",
  elemento: "AR",
  arma: "DISTANCIA",
  comportamento: "ATACANTE",
  corTema: "tema-verde",
  estrelas: 4,
  skins:[
      {
          skinId: 1,
          nome: "Original",
          sprite: ANDY_1_SPRITE,
          perfil: ANDY_1_PERFIL,
          santuario: ANDY_1_SANTUARIO,
      },
  ],
  evolucoes: [
      {
          level: 1,
          experienciaNecessaria: 100,
          pv: 23,
          pm: 5,
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
      {
          level: 2,
          experienciaNecessaria: 250,
          pv: 28,
          pm: 8,
          atributos: {
              forca: 1,
              agilidade: 4,
              magia: 3,
              vigor: 2,
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
      {
          level: 3,
          experienciaNecessaria: 400,
          pv: 32,
          pm: 12,
          atributos: {
              forca: 1,
              agilidade: 4,
              magia: 3,
              vigor: 2,
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