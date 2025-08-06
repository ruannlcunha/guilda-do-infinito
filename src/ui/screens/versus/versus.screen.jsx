import "./versus.style.css";
import { AudioContainer, ContainerScreen, Header, HomeSection, MenuOption } from "../../components";
import { ICONS } from "../../../constants/images";
import { MUSICS } from "../../../constants/audios/musics.constant";
import { useEffect } from "react";
import { useMusic } from "../../../hook";

export function VersusScreen() {
  const { startMusic } = useMusic();

  useEffect(() => {
    startMusic(true);
  }, []);

  return (
    <ContainerScreen>
      <AudioContainer audio={MUSICS.TOWN} />
      <div className="versus-screen">
        <Header idSelected={3} />
        <HomeSection titulo={"Versus"} icon={ICONS.VERSUS}>
          <MenuOption navigateTo={"/versus/1/personagens"} icon={ICONS.PERFIL} text={"1 Jogador"} />
          <MenuOption navigateTo={"/versus/2/personagens"} icon={ICONS.DUPLA} text={"2 Jogadores Locais"} />
          <MenuOption navigateTo={"/versus/0/personagens"} icon={ICONS.ROBO} text={"Batalha Automática"} />
        </HomeSection>
      </div>
    </ContainerScreen>
  );
}
