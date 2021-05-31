import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { fetchWeatherData, fetchForecastData } from "../services/API";
import { getForecastData } from "../services/helpers";

import { ForecastContainer } from "./Forecast";
import { QuickOptionsContainer } from "./QuickOptions";
import { WeatherContainer } from "./Weather";

const StyledDisplayCard = styled.div`
  margin: 10px auto 30px auto;
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.weatherCardBorder};
  box-shadow: 0 3px 15px r ${({ theme }) => theme.weatherCardShadow};
`;

export function DisplayContainer() {
  const { t } = useTranslation();
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
    <>
      <h1>{t("title")}</h1>
      <QuickOptionsContainer displayWeather={displayWeather} />
      {!loading && showWeatherCard && (
        <StyledDisplayCard>
          <WeatherContainer weatherData={weatherData} />
          <ForecastContainer forecastData={forecastData} />
        </StyledDisplayCard>
      )}
    </>
  );
}
