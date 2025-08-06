export function converterDados(dadoString) {
  return dadoString.replace("d", ";").replace("+", ";").split(";");
}
