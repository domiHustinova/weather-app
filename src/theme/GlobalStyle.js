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
  color: #fff;
}

.weather {
  margin: 10px auto 30px auto;
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  border: 5px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);
}
`;

export default GlobalStyle;
