import "./cena.style.css";
import { Cena, ContainerScreen } from "../../components";
import { MAPAS, PERFIL } from "../../../constants/images";
import { CENAS_TIPO } from "../../../constants";
import { useEffect, useState } from "react";
import { HISTORIAS_DATA } from "../../../database/historias/HISTORIAS.data";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalUser from "../../../context/global-user.context";

export function CenaScreen() {
  const { historia, idCapitulo, idEpisodio } = useParams();
  const [cenas, setCenas] = useState([]);
  const [dialogo, setDialogo] = useState(0);
  const [user, setUser] = useGlobalUser();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const _historia = HISTORIAS_DATA.find((item) => item.url === `/historia/${historia}`);
    const _capitulo = _historia.capitulos.find((item) => item.id == idCapitulo);
    const _episodio = _capitulo.episodios.find((item) => item.id == idEpisodio);
    setCenas(_episodio.cenas);
  }

  function handleFinish() {
    const _historia = HISTORIAS_DATA.find((item) => item.url === `/historia/${historia}`);
    const _capitulo = _historia.capitulos.find((item) => item.id == idCapitulo);
    const _episodio = _capitulo.episodios.find((item) => item.id == idEpisodio);
    let novoModoHistoria = [...user.modos.historia];
    const _historiaUser = [...user.modos.historia].find((historia) => historia.historiaId === _historia.id);
    if (_historiaUser) {
      novoModoHistoria = novoModoHistoria.filter((historia) => historia.historiaId != _historiaUser.historiaId);
      const capituloUser = _historiaUser.capitulos.find((capitulo) => capitulo.capituloId === _capitulo.id);
      if (capituloUser) {
        if (!capituloUser.episodios.find((episodio) => episodio === _episodio.id)) {
          novoModoHistoria.push({
            historiaId: _historiaUser.historiaId,
            capitulos: [
              ..._historiaUser.capitulos.filter((capitulo) => capitulo.capituloId != capituloUser.capituloId),
              {
                capituloId: capituloUser.capituloId,
                episodios: [...capituloUser.episodios, _episodio.id]
              }
            ]
          });
        } else {
          novoModoHistoria = [...user.modos.historia];
        }
      } else {
        novoModoHistoria.push({
          historiaId: _historiaUser.historiaId,
          capitulos: [
            ..._historiaUser.capitulos,
            {
              capituloId: _capitulo.id,
              episodios: [_episodio.id]
            }
          ]
        });
      }
    } else {
      novoModoHistoria.push({
        historiaId: _historia.id,
        capitulos: [
          {
            capituloId: _capitulo.id,
            episodios: [_episodio.id]
          }
        ]
      });
    }
    const novoUser = {
      ...user,
      modos: {
        ...user.modos,
        historia: novoModoHistoria
      }
    };
    setUser(novoUser);
    navigate(-1);
  }

  return <ContainerScreen>{cenas.length > 0 ? <Cena cenas={cenas} dialogo={dialogo} setDialogo={setDialogo} handleFinish={handleFinish} /> : null}</ContainerScreen>;
}
