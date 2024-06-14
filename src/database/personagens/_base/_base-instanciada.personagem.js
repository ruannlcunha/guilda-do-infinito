
const _BASE_ORIGINAL = {
    id: 1,
    nome: "Ayla",
    sprite: SPRITES.AYLA_SPRITE,
    perfil: PERFIL.AYLA_PERFIL,
    corTema: "tema-amarelo",
    experiencia: {
        atual: 10,
        maximo: 100,
    },
    pv: {
        atual: 15,
        maximo: 15,
    },
    pm: {
        atual: 10,
        maximo: 10,
    },
    defesa: 11,
    atributos: {
      forca: 4,
      agilidade: 1,
      magia: 2,
      vigor: 3,
    },
    passivas: [{passivaId: 1}],
    ataques: [{ataqueId: 1}],
    habilidades: [{habilidadeId: 1}],
    inventario: {
        espaco: {
            atual: 2,
            maximo: 10,
        },
        equipamentos: [],
        consumiveis: [
            {
            consumivelId: 1,
            quantidade: 2,
            }
        ],
    }
}