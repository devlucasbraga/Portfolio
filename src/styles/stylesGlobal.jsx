import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: ${({ theme }) => theme.typeFont.fontPrimary} ,sans-serif;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.cors.bgFundo};
}

a {
  text-decoration:none;
}
ul, li {
  list-style: none;
};

`;
