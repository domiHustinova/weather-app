import React, { useState } from "react";

import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme } from "./theme/consts";
import GlobalStyle from "./theme/GlobalStyle";

import { DisplayContainer } from "./containers/Display";

export const ThemeButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 12px;
  font-size: 16px;
  background: ${({ theme }) => theme.buttonBackgroundGradientLight};
  color: ${({ theme }) => theme.buttonText};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  border-radius: 5px;
  outline: 0;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: ${({ theme }) => theme.buttonBackgroundGradientDark};
  }
`;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
        <i className={`fas ${isDarkTheme ? "fa-sun" : "fa-moon"}`}></i>
      </ThemeButton>
      <DisplayContainer />
    </ThemeProvider>
  );
};
export default App;
