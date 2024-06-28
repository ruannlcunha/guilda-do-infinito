import { createHashRouter } from "react-router-dom";
import { AventuraScreen,
  BatalhaScreen,
  CapitulosScreen,
  CenaScreen,
  CosmosScreen,
  HistoriaScreen,
  HomeScreen,
  JogarGacha,
  LojaScreen,
  NotFoundScreen,
  NovoJogoScreen,
  PerfilPersonagensScreen,
  PerfilScreen,
  PersonagemDetalhado,
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
        element: <JogarGacha />,
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
        element: <PersonagemDetalhado />,
      },
      {
        path: `/cutscene`,
        element: <CenaScreen />,
      },
    ],
  },
]);
