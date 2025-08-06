import { APAGAR_CHAMAS } from "./apagar-chamas/apagar-chamas.acao";
import { DESFAZER_ATAQUE_AGIL } from "./desfazer-ataque-agil/desfazer-ataque-agil.acao";
import { DESFAZER_FORMA_ANIMAL } from "./desfazer-forma-animal/desfazer-forma-animal.acao";
import { DESFAZER_FORMA_LUPINA } from "./desfazer-forma-lupina/desfazer-forma-lupina.acao";
import { DESFAZER_VOANDO } from "./desfazer-voando/desfazer-voando.acao";
import { QUEBRAR_GELO } from "./quebrar-gelo/quebrar-gelo.acao";

export const ACOES_UNICAS = {
  APAGAR_CHAMAS,
  QUEBRAR_GELO,
  DESFAZER_ATAQUE_AGIL,
  DESFAZER_VOANDO,
  DESFAZER_FORMA_ANIMAL,
  DESFAZER_FORMA_LUPINA,
};

export const ACOES_UNICAS_DATA = Object.values(ACOES_UNICAS);
