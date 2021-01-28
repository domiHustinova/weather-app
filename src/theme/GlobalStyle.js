import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  min-width: 100vw;
  min-height: 100vh;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 1em;
  background: url(${require(`../assets/background.jpg`)}) center no-repeat;
  background-size: cover;
}

h1 {
  margin-bottom: 30px;
  font-size: 48px;
  text-align: center;
  color: ${({ theme }) => theme.text};
}
`;

export default GlobalStyle;
