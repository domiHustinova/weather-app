import React from "react";
import WeatherCard from "./components/WeatherCard";
import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Počasí</h1>
      <WeatherCard />
    </div>
  );
}
export default App;
