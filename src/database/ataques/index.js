import { BOLA_DE_FOGO } from "./bola-de-fogo/bola-de-fogo.ataque";
import { ESTACAS_GELO } from "./estacas-gelo/estacas-gelo.ataque";
import { LAMINA_VENTO } from "./lamina-vento/lamina-vento.ataque";
import { ONDA_AGUA } from "./onda-agua/onda-agua.ataque";
import { RAIO_LUZ } from "./raio-luz/raio-luz.ataque";
import { RAIZES_CORTANTES } from "./raizes-cortantes/raizes-cortantes.ataque";
import { RAJADA_PEDRA } from "./rajada-pedra/rajada-pedra.ataque";
import { RELAMPAGO } from "./relampago/relampago.ataque";
import { SOCO } from "./soco/soco.ataque.data";
import { TIRO_ACIDO } from "./tiro-acido/tiro-acido.ataque";
import { TIRO_PRECISO_BALA } from "./tiro-preciso-bala/tiro-preciso-bala.ataque";
import { TIRO_PRECISO_FLECHA } from "./tiro-preciso-flecha/tiro-preciso-flecha.ataque";
import { TIRO_RAPIDO_BALA } from "./tiro-rapido-bala/tiro-rapido-bala.ataque";
import { TIRO_RAPIDO_FLECHA } from "./tiro-rapido-flecha/tiro-rapido-flecha.ataque";
import { TOQUE_SOMBRIO } from "./toque-sombrio/toque-sombrio.ataque";
import { GOLPE_PESADO } from "./golpe-pesado/golpe-pesado.ataque";
import { GOLPE_RAPIDO } from "./golpe-rapido/golpe-rapido.ataque";
import { GOLPE_PRECISO } from "./golpe-preciso/golpe-preciso.ataque";
import { GOLPE_PRECISO_MAGICO } from "./golpe-preciso-magico/golpe-preciso-magico.ataque";
import { GOLPE_PRECISO_FOGO } from "./golpe-preciso-fogo/golpe-preciso-fogo.ataque";
import { GOLPE_PRECISO_AGUA } from "./golpe-preciso-agua/golpe-preciso-agua.ataque";
import { GOLPE_PRECISO_ELETRICO } from "./golpe-preciso-eletrico/golpe-preciso-eletrico.ataque";
import { GOLPE_PRECISO_ACIDO } from "./golpe-preciso-acido/golpe-preciso-acido.ataque";
import { GOLPE_PRECISO_TERRA } from "./golpe-preciso-terra/golpe-preciso-terra.ataque";
import { GOLPE_PRECISO_AR } from "./golpe-preciso-ar/golpe-preciso-ar.ataque";
import { GOLPE_PRECISO_GELO } from "./golpe-preciso-gelo/golpe-preciso-gelo.ataque";
import { GOLPE_PRECISO_TREVAS } from "./golpe-preciso-trevas/golpe-preciso-trevas.ataque";
import { GOLPE_PRECISO_LUZ } from "./golpe-preciso-luz/golpe-preciso-luz.ataque";
import { GOLPE_PESADO_MAGICO } from "./golpe-pesado-magico/golpe-pesado-magico.ataque";
import { GOLPE_PESADO_ELETRICO } from "./golpe-pesado-eletrico/golpe-pesado-eletrico.ataque";
import { GOLPE_PESADO_FOGO } from "./golpe-pesado-fogo/golpe-pesado-fogo.ataque";
import { GOLPE_PESADO_AGUA } from "./golpe-pesado-agua/golpe-pesado-agua.ataque";
import { GOLPE_PESADO_ACIDO } from "./golpe-pesado-acido/golpe-pesado-acido.ataque";
import { GOLPE_PESADO_TERRA } from "./golpe-pesado-terra/golpe-pesado-terra.ataque";
import { GOLPE_PESADO_AR } from "./golpe-pesado-ar/golpe-pesado-ar.ataque";
import { GOLPE_PESADO_GELO } from "./golpe-pesado-gelo/golpe-pesado-gelo.ataque";
import { GOLPE_PESADO_LUZ } from "./golpe-pesado-luz/golpe-pesado-luz.ataque";
import { GOLPE_PESADO_TREVAS } from "./golpe-pesado-trevas/golpe-pesado-trevas.ataque";
import { GOLPE_RAPIDO_ELETRICO } from "./golpe-rapido-eletrico/golpe-rapido-eletrico.ataque";
import { GOLPE_RAPIDO_MAGICO } from "./golpe-rapido-magico/golpe-rapido-magico.ataque";
import { GOLPE_RAPIDO_FOGO } from "./golpe-rapido-fogo/golpe-rapido-fogo.ataque";
import { GOLPE_RAPIDO_AGUA } from "./golpe-rapido-agua/golpe-rapido-agua.ataque";
import { GOLPE_RAPIDO_ACIDO } from "./golpe-rapido-acido/golpe-rapido-acido.ataque";
import { GOLPE_RAPIDO_TERRA } from "./golpe-rapido-terra/golpe-rapido-terra.ataque";
import { GOLPE_RAPIDO_AR } from "./golpe-rapido-ar/golpe-rapido-ar.ataque";
import { GOLPE_RAPIDO_GELO } from "./golpe-rapido-gelo/golpe-rapido-gelo.ataque";
import { GOLPE_RAPIDO_LUZ } from "./golpe-rapido-luz/golpe-rapido-luz.ataque";
import { GOLPE_RAPIDO_TREVAS } from "./golpe-rapido-trevas/golpe-rapido-trevas.ataque";
import { TIRO_PRECISO_MAGICO } from "./tiro-preciso-magico/tiro-preciso-magico.ataque";
import { TIRO_PRECISO_ELETRICO } from "./tiro-preciso-eletrico/tiro-preciso-eletrico.ataque";
import { TIRO_PRECISO_FOGO } from "./tiro-preciso-fogo/tiro-preciso-fogo.ataque";
import { TIRO_PRECISO_AGUA } from "./tiro-preciso-agua/tiro-preciso-agua.ataque";
import { TIRO_PRECISO_ACIDO } from "./tiro-preciso-acido/tiro-preciso-acido.ataque";
import { TIRO_PRECISO_TERRA } from "./tiro-preciso-terra/tiro-preciso-terra.ataque";
import { TIRO_PRECISO_AR } from "./tiro-preciso-ar/tiro-preciso-ar.ataque";
import { TIRO_PRECISO_GELO } from "./tiro-preciso-gelo/tiro-preciso-gelo.ataque";
import { TIRO_PRECISO_LUZ } from "./tiro-preciso-luz/tiro-preciso-luz.ataque";
import { TIRO_PRECISO_TREVAS } from "./tiro-preciso-trevas/tiro-preciso-trevas.ataque";

export const ATAQUES_DATA = [
    SOCO,
    BOLA_DE_FOGO,
    TOQUE_SOMBRIO,
    RAIZES_CORTANTES,
    RAJADA_PEDRA,
    LAMINA_VENTO,
    RAIO_LUZ,
    RELAMPAGO,
    ESTACAS_GELO,
    ONDA_AGUA,
    TIRO_ACIDO,
    TIRO_RAPIDO_FLECHA,
    TIRO_PRECISO_FLECHA,
    TIRO_RAPIDO_BALA,
    TIRO_PRECISO_BALA,
    GOLPE_PRECISO,
    GOLPE_PRECISO_MAGICO,
    GOLPE_PRECISO_ELETRICO,
    GOLPE_PRECISO_FOGO,
    GOLPE_PRECISO_AGUA,
    GOLPE_PRECISO_ACIDO,
    GOLPE_PRECISO_TERRA,
    GOLPE_PRECISO_AR,
    GOLPE_PRECISO_GELO,
    GOLPE_PRECISO_TREVAS,
    GOLPE_PRECISO_LUZ,
    GOLPE_PESADO,
    GOLPE_PESADO_MAGICO,
    GOLPE_PESADO_ELETRICO,
    GOLPE_PESADO_FOGO,
    GOLPE_PESADO_AGUA,
    GOLPE_PESADO_ACIDO,
    GOLPE_PESADO_TERRA,
    GOLPE_PESADO_AR,
    GOLPE_PESADO_GELO,
    GOLPE_PESADO_LUZ,
    GOLPE_PESADO_TREVAS,
    GOLPE_RAPIDO,
    GOLPE_RAPIDO_MAGICO,
    GOLPE_RAPIDO_ELETRICO,
    GOLPE_RAPIDO_FOGO,
    GOLPE_RAPIDO_AGUA,
    GOLPE_RAPIDO_ACIDO,
    GOLPE_RAPIDO_TERRA,
    GOLPE_RAPIDO_AR,
    GOLPE_RAPIDO_GELO,
    GOLPE_RAPIDO_LUZ,
    GOLPE_RAPIDO_TREVAS,
    TIRO_PRECISO_MAGICO,
    TIRO_PRECISO_ELETRICO,
    TIRO_PRECISO_FOGO,
    TIRO_PRECISO_AGUA,
    TIRO_PRECISO_ACIDO,
    TIRO_PRECISO_TERRA,
    TIRO_PRECISO_AR,
    TIRO_PRECISO_GELO,
    TIRO_PRECISO_LUZ,
    TIRO_PRECISO_TREVAS,
]