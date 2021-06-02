import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme } from "./theme/consts";
import GlobalStyle from "./theme/GlobalStyle";
import { Button, Wrapper } from "./components/QuickOptions/styles/QuickOptions";

import { DisplayContainer } from "./containers/Display";

import { LANGUAGES } from "./services/consts";

const ButtonGroup = styled(Wrapper)`
  max-width: 115px;
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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Helmet>
        <title>{t("title")}</title>
      </Helmet>
      <GlobalStyle />
      <ButtonGroup>
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
