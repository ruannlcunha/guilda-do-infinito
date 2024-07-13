import { createHashRouter } from "react-router-dom";
import { AventuraScreen,
  BatalhaScreen,
  CapitulosScreen,
  CenaScreen,
  CosmosScreen,
  HistoriaScreen,
  HomeScreen,
  JogarGachaScreen,
  LojaScreen,
  NotFoundScreen,
  NovoJogoScreen,
  PerfilPersonagensScreen,
  PerfilScreen,
  PersonagemAcoesScreen,
  PersonagemDetalhadoScreen,
  PersonagemEquipamentosScreen,
  PersonagemEvoluirScreen,
  PersonagemInventarioScreen,
  PersonagemTalentosScreen,
  PersonagemVisuaisScreen,
  RootScreen,
  StartScreen,
  VersusScreen
} from "../ui/screens";

export const router = createHashRouter([
  {
    path: "*",
    element: <NotFoundScreen />,
  },
  { 
    path: `/`,
    element: <RootScreen />,
    children: [
      {
        path: `/`,
        element: <StartScreen />,
      },
      {
        path: `/novo-jogo`,
        element: <NovoJogoScreen />,
      },
      {
        path: `/home`,
        element: <HomeScreen />,
      },
      {
        path: `/historia`,
        element: <HistoriaScreen />,
      },
      {
        path: `/historia/:campanha`,
        element: <CapitulosScreen />,
      },
      {
        path: `/historia/:campanha/:idCapitulo/:idEpisodio/batalha`,
        element: <BatalhaScreen />,
      },
      {
        path: `/historia/:campanha/:idCapitulo/:idEpisodio/cena`,
        element: <CenaScreen />,
      },
      {
        path: `/aventura`,
        element: <AventuraScreen />,
      },
      {
        path: `/versus`,
        element: <VersusScreen />,
      },
      {
        path: `/cosmos`,
        element: <CosmosScreen />,
      },
      {
        path: `/cosmos/:idBanner/:quantidade`,
        element: <JogarGachaScreen />,
      },
      {
        path: `/loja`,
        element: <LojaScreen />,
      },
      {
        path: `/perfil`,
        element: <PerfilScreen />,
      },
      {
        path: `/perfil/personagens`,
        element: <PerfilPersonagensScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId`,
        element: <PersonagemDetalhadoScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId/evoluir`,
        element: <PersonagemEvoluirScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId/inventario`,
        element: <PersonagemInventarioScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId/acoes`,
        element: <PersonagemAcoesScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId/talentos`,
        element: <PersonagemTalentosScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId/visuais`,
        element: <PersonagemVisuaisScreen />,
      },
      {
        path: `/perfil/personagens/:personagemId/equipamentos/:equipamentoTipo?`,
        element: <PersonagemEquipamentosScreen />,
      },
      {
        path: `/cutscene`,
        element: <CenaScreen />,
      },
    ],
  },
]);
