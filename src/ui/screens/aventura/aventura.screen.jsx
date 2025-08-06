import "./aventura.style.css";
import { ContainerScreen, Header, HomeBloqueado } from "../../components";

export function AventuraScreen() {
  return (
    <ContainerScreen>
      <div className="aventura-screen">
        <Header idSelected={2} />
        <HomeBloqueado />
      </div>
    </ContainerScreen>
  );
}
