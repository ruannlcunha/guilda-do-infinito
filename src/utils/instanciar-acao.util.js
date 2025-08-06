import { ATAQUES_DATA, HABILIDADES_DATA } from "../database";


export function instanciarAtaque(ataqueId, variantes) {
    const novoAtaque = ATAQUES_DATA.find(ataque => ataqueId === ataque.id || ataqueId.id === ataque.id)
    const variantesAtuais = variantes;
    if (variantesAtuais.length > 0) {
      const novasVariantes = [...novoAtaque.variantes]
        .filter((variante) => variante.lista.some((item) => variantesAtuais.includes(item.varianteId)))
        .map((variante) => {
          const novaListaVariante = [...variante.lista].filter((varianteItem) => variantesAtuais.some((atual) => atual === varianteItem.varianteId));
          return { ...variante, lista: novaListaVariante };
        });
      return { ...novoAtaque, variantes: novasVariantes };
    }
    return { ...novoAtaque, variantes: [] };
}

export function instanciarHabilidade(habilidadeId, variantes) {
    const novaHabilidade = HABILIDADES_DATA.find(habilidade => habilidadeId === habilidade.id || habilidadeId.id === habilidade.id)
    const variantesAtuais = variantes;
    if (variantesAtuais.length > 0) {
      const novasVariantes = [...novaHabilidade.variantes]
        .filter((variante) => variante.lista.some((item) => variantesAtuais.includes(item.varianteId)))
        .map((variante) => {
          const novaListaVariante = [...variante.lista].filter((varianteItem) => variantesAtuais.some((atual) => atual === varianteItem.varianteId));
          return { ...variante, lista: novaListaVariante };
        });
      return { ...novaHabilidade, variantes: novasVariantes };
    }
    return { ...novaHabilidade, variantes: [] };
}
