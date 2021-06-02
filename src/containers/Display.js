import React, { useEffect, useState } from "react";

import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { useWeatherApi } from "../services/useWeatherApi";
import { useForecastApi } from "../services/useForecastApi";

import { ForecastContainer } from "./Forecast";
import { QuickOptionsContainer } from "./QuickOptions";
import { WeatherContainer } from "./Weather";

import { CITIES } from "../services/consts";

const StyledDisplayCard = styled.div`
  display: flex;
  margin: 10px auto 30px auto;
  width: 700px;
  overflow: hidden;
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.weatherCardBorder};
  box-shadow: 0 3px 15px r ${({ theme }) => theme.weatherCardShadow};
`;

export function DisplayContainer() {
  const [city, setCity] = useState(CITIES[0]);
  const { t } = useTranslation();

  const [
    { weatherData, isLoadingWeatherData, isErrorWeather },
    doWeatherFetch,
  ] = useWeatherApi();
  const [
    { forecastData, isLoadingForecastData, isErrorForecast },
    doForecastFetch,
  ] = useForecastApi();

  useEffect(() => {
    doWeatherFetch(city);
    doForecastFetch(city);
  }, [city]);

  return (
    <>
      <h1>{t("title")}</h1>
      <QuickOptionsContainer setCity={setCity} />

      {(isErrorForecast || isErrorWeather) && (
        <div>Something went wrong ...</div>
      )}

      {/* {(isLoadingWeatherData || isLoadingForecastData) && <div>Loading...</div>} */}
      {weatherData && forecastData && (
        <StyledDisplayCard>
          <WeatherContainer city={city} weatherData={weatherData} />
          <ForecastContainer forecastData={forecastData} />
        </StyledDisplayCard>
      )}
    </>
  );
}
