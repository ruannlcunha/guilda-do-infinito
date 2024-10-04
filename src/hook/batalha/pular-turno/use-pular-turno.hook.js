export function usePularTurno() {
  function pularTurno(setTurnos) {
    setTurnos((old) => {
      if (old.atual >= old.maximo - 1) {
        return { ...old, atual: 0 };
      }
      return { ...old, atual: old.atual + 1 };
    });
  }

  return { pularTurno };
}
