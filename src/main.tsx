import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyles = () => (
  <Global
    styles={`
      *:focus {
        outline: none !important;
      }
    `}
  />
);

const theme = extendTheme({
  colors: {
    primary: "#121212",
    secondary: "#1e1e1e",
    accentOne: "#ff1cf6",
    bgAccent: "#343434",
    divider: "#2a2a2a",
    scrollbar: "rgb(161, 17, 203)",
  },

  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },

  styles: {
    global: {
      body: {
        fontFamily: `-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        fontWeight: "regular",
        color: "white",
        backgroundColor: "#121212",
        height: "100svh",
        overflow: "hidden",
      },
      root: {
        height: "full",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ChakraProvider>
);
