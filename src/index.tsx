import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./components/theme";
import GlobalStyle from "./components/globalStyles";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
