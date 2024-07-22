import { PERFIL, SPRITES } from "../../../constants/images";

export const _BASE_ORIGINAL = {
    id: 1,
    nome: "Base",
    elemento: "FOGO",
    arma: "PESADA",
    comportamento: "ATACANTE",
    corTema: "tema-amarelo",
    estrelas: 5,
    visuais:[
        {
            visualId: 1,
            sprite: SPRITES.AYLA,
            perfil: PERFIL.AYLA,
        },
    ],
    status: {
        pvBase: 0,
        pmBase: 0,
        pvBonus: 0,
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 100,
            pv: 15,
            pm: 10,
            atributos: {
                forca: 4,
                agilidade: 1,
                magia: 2,
                vigor: 3,
            },
            talentos: [],
            ataques: [1],
            habilidades: [1],
        }
    ]
}