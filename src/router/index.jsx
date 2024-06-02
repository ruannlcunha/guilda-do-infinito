import { createHashRouter } from "react-router-dom";
import { AventuraScreen,
  BatalhaScreen,
  CapitulosScreen,
  CosmosScreen,
  HistoriaScreen,
  HomeScreen,
  LojaScreen,
  NotFoundScreen,
  PerfilScreen,
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
        path: `/loja`,
        element: <LojaScreen />,
      },
      {
        path: `/perfil`,
        element: <PerfilScreen />,
      },
    ],
  },
]);
