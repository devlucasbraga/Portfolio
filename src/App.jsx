import styled from "styled-components";

// Components
import { Header } from "./components/Header";

// Paginas
import { About } from "./pages/About";
import { Home } from "./pages/Home";

// Styles Global e variaveis
import { StyledGlobal } from "./styles/stylesGlobal";
import { VariaveisStyles } from "./styles/variaveisStyles";

import bg from "./assets/4.jpg";

export const BackgroundImg = styled.main`
  width: 100%;
  height: 100vh;
  background: url(${bg}) center center;
  background-size: cover;
  position: fixed;
  z-index: -100;
`;

function App() {
  return (
    <VariaveisStyles>
      <StyledGlobal />
      <BackgroundImg />
      <Header />
      <Home />
      <About />
    </VariaveisStyles>
  );
}

export default App;
