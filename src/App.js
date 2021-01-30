import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/consts";
import GlobalStyle from "./theme/GlobalStyle";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <h1>Počasí</h1>
        <WeatherCard />
      </>
    </ThemeProvider>
  );
}
export default App;
