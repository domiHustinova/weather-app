import React from "react";

import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";

import { useWeatherApi } from "../services/useWeatherApi";
import { useForecastApi } from "../services/useForecastApi";

import { ForecastContainer } from "./Forecast";
import { QuickOptionsContainer } from "./QuickOptions";
import { WeatherContainer } from "./Weather";

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
  const { t } = useTranslation();

  const [
    { weatherData, isLoadingWeatherData, isErrorWeather },
    doWeatherFetch,
  ] = useWeatherApi();
  const [
    { forecastData, isLoadingForecastData, isErrorForecast },
    doForecastFetch,
  ] = useForecastApi();

  const doFetch = (city) => {
    doWeatherFetch(city);
    doForecastFetch(city);
  };

  return (
    <>
      <h1>{t("title")}</h1>
      <QuickOptionsContainer doFetch={doFetch} />

      {(isErrorForecast || isErrorWeather) && (
        <div>Something went wrong ...</div>
      )}

      {/* {(isLoadingWeatherData || isLoadingForecastData) && <div>Loading...</div>} */}
      {weatherData && forecastData && (
        <StyledDisplayCard>
          <WeatherContainer weatherData={weatherData} />
          <ForecastContainer forecastData={forecastData} />
        </StyledDisplayCard>
      )}
    </>
  );
}
