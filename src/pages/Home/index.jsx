import { RedesSociais } from "../../components/RedesSociais";

import { ContainerHome, Title } from "./styled";

export const Home = ({ children }) => {
  return (
    <ContainerHome>
      <RedesSociais />
      <Title>
        <h1>Developer</h1>
        <h2>Lucas Braga</h2>
        <h3>Front-End Web</h3>
      </Title>
      {children}
    </ContainerHome>
  );
};
