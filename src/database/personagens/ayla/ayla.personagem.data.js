import AYLA_1_SPRITE from "./assets/AYLA_1_SPRITE.png"
import AYLA_1_PERFIL from "./assets/AYLA_1_PERFIL.png"
import AYLA_1_SANTUARIO from "./assets/AYLA_1_SANTUARIO.png"
import AYLA_2_SPRITE from "./assets/AYLA_2_SPRITE.png"
import AYLA_2_PERFIL from "./assets/AYLA_2_PERFIL.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

export const AYLA = {
  id: 2,
  nome: "Ayla",
  titulo: "Guardiã Imortal",
  elemento: "FOGO",
  arma: "PESADA",
  comportamento: "ATACANTE",
  corTema: "tema-amarelo",
  estrelas: 5,
  skins:[
      {
          skinId: 1,
          nome: "Original",
          sprite: AYLA_1_SPRITE,
          perfil: AYLA_1_PERFIL,
          santuario: AYLA_1_SANTUARIO,
      },
      {
          skinId: 2,
          nome: "Teste",
          sprite: AYLA_2_SPRITE,
          perfil: AYLA_2_PERFIL,
          santuario: AYLA_1_SANTUARIO,
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
          pv: 31,
          pm: 8,
          atributos: {
              forca: 4,
              agilidade: 1,
              magia: 2,
              vigor: 3,
          },
          passivas: [
            //  PASSIVAS.RESSURGIR,
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
        experienciaNecessaria: 500,
        pv: 39,
        pm: 11,
        atributos: {
            forca: 4,
            agilidade: 1,
            magia: 2,
            vigor: 3,
        },
        passivas: [
        //  PASSIVAS.RESSURGIR,
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