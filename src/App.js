import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme } from "./theme/consts";
import GlobalStyle from "./theme/GlobalStyle";
import { Button, Wrapper } from "./components/QuickOptions/styles/QuickOptions";

import { DisplayContainer } from "./containers/Display";

import { LANGUAGES } from "./services/consts";

const ButtonGroup = styled(Wrapper)`
  max-width: 150px;
  margin: 0;
`;

const OptionButton = styled(Button)`
  padding: 10px 12px;
  background: ${(props) =>
    props.selected
      ? props.theme.buttonBackgroundGradientDark
      : props.theme.buttonBackgroundGradientLight};
`;

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    window.localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  const { i18n } = useTranslation();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ButtonGroup>
        <OptionButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
          <i className={`fas ${isDarkTheme ? "fa-sun" : "fa-moon"}`}></i>
        </OptionButton>
        {LANGUAGES.map((lang) => (
          <OptionButton
            title={lang.title}
            key={lang.code}
            selected={language === lang.code}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.value}
          </OptionButton>
        ))}
      </ButtonGroup>
      <DisplayContainer />
    </ThemeProvider>
  );
};

export default App;
