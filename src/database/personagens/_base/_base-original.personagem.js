
const _BASE_ORIGINAL = {
    id: 1,
    nome: "Base",
    elemento: "FOGO",
    arma: "PESADA",
    comportamento: "ATACANTE",
    corTema: "tema-amarelo",
    estrelas: 5,
    skins:[
        {
            skinId: 1,
            sprite: SPRITES.AYLA,
            perfil: PERFIL.AYLA,
        },
    ],
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
            passivas: [
                PASSIVAS.RESSURGIR,
            ],
            ataques: [
                ATAQUES.SOCO,
            ],
            habilidades: [
                HABILIDADES.CURA,
            ],
        }
    ]
}