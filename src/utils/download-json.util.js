
export function downloadJson(json) {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(json)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "orion-jogo-salvo.json";
  
      link.click();
}