import { useSound } from "../../audio/sound/use-sound.hook";
import { useRolarDado } from "../rolar-dado/use-rolar-dado.hook";

export function useRolarIniciativa() {
  const { rolarDado } = useRolarDado();
  const { playDado } = useSound()

  function rolarIniciativa(personagens, ordemIniciativa) {
    playDado()
    const ordemNova = [];

    ordemIniciativa.map(ordem=> {
      const personagem = personagens.find(personagem=>personagem.idCombate===ordem.idCombate)
      const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
      const {total} = rolarDado(1, 20, [modificadorAgilidade]);
      ordemNova.push({
        resultadoIniciativa: total,
        ...ordem,
      });
    })

    const ordenado = ordemNova
    .sort(function (a, b) {return b.resultadoIniciativa - a.resultadoIniciativa;})
    .map((ordem,i)=>{return {...ordem, ordemIniciativa: i}})

    return ordenado
  }

  return { rolarIniciativa };
}
