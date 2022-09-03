import styled from "styled-components";
import bg from "./assets/bg.jpg";

// Components
import { Header } from "./components/Header";

// Paginas
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

// Styles Global e variaveis
import { StyledGlobal } from "./styles/stylesGlobal";
import { VariaveisStyles } from "./styles/variaveisStyles";

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
      <Projects />
    </VariaveisStyles>
  );
}

export default App;
