import React from "react";
import { Menu } from "./components/Menu";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <h1>Počasí</h1>
      <Menu />
    </div>
  );
}
export default App;
