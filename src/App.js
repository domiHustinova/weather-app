import React, { useState } from "react";
import styled from "styled-components";
import { fetchWeatherData, fetchForecastData } from "./services/API";
import { getForecastData } from "./services/helpers";

import QuickOptions from "./components/QuickOptions/QuickOptions";
import Weather from "./components/Weather/Weather";
import Forecast from "./components/Forecast/Forecast";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/consts";
import GlobalStyle from "./theme/GlobalStyle";

const StyledDisplayCard = styled.div`
  margin: 10px auto 30px auto;
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.weatherCardBorder};
  box-shadow: 0 3px 15px r ${({ theme }) => theme.weatherCardShadow};
`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [showWeatherCard, setShowWeatherCard] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);

  const displayWeather = async (city) => {
    setLoading(true);
    setShowWeatherCard(true);

    const newWeatherData = await fetchWeatherData(city);
    const newForecastData = await fetchForecastData(city);

    setWeatherData(newWeatherData);
    setForecastData(getForecastData(newForecastData));
    setLoading(false);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <h1>Počasie</h1>
        <QuickOptions callback={displayWeather} />
        {!loading && showWeatherCard && (
          <StyledDisplayCard>
            <Weather weatherData={weatherData} />
            <Forecast forecastData={forecastData} />
          </StyledDisplayCard>
        )}
      </>
    </ThemeProvider>
  );
};
export default App;
