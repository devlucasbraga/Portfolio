import { ThemeProvider } from "styled-components";

const theme = {
  cors: {
    bgFundo: "#111111",
    corPrimary: "#eeeeee",
    corSecundary: "#999999",
    corText: "#cccccc",
    corDetails: "#b721ff",
    corDetails2: "#0DA6F6",
    corDetails3: "#6a7dfe",
  },
  typeFont: {
    fontPrimary: "Roboto",
    fontSecundary: "Montserrat",
  },
};

export const VariaveisStyles = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
