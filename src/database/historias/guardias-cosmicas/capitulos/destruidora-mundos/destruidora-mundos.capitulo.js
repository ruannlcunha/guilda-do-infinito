import PREVIEW from "./assets/PREVIEW.png";
import { BATALHA_IMPOSSIVEL } from "./episodios/batalha-impossivel/batalha-impossivel.episodio";
import { DISCUSSAO_LIVRO } from "./episodios/discussao-livro/discussao-livro.episodio";

export const DESTRUIDORA_MUNDOS = {
  id: 3,
  title: "Capítulo Final: A Destruidora de Mundos",
  description: `A Destruidora de Mundos se apresenta ao grupo, revelando que está com reféns.
    O que as Guardiãs irão fazer? Elas irão enfrentar esse inimigo considerado imbatível?`,
  previewImage: PREVIEW,
  background: null,
  episodios: [DISCUSSAO_LIVRO, BATALHA_IMPOSSIVEL]
};
