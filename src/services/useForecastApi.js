import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL, API_KEY } from "../services/consts";
import { getDate, getWeatherIcon } from "../services/helpers";

import { getForecastData } from "./helpers";

import { CITIES } from "./consts";

export function useForecastApi() {
  const [forecastData, setForecastData] = useState();
  const [city, setCity] = useState(CITIES[0]);
  const [isErrorForecast, setIsErrorForecast] = useState(false);
  const [isLoadingForecastData, setIsLoadingForecastData] = useState(false);

  useEffect(() => {
    const fetchForecastData = async () => {
      setIsErrorForecast(false);
      setIsLoadingForecastData(true);

      try {
        const queryUrl = `${API_URL}forecast?APPID=${API_KEY}&q=${city.value}&units=metric&lang=EN`;

        const response = await axios(queryUrl);

        const newForecastData = response.data.list.map((forecastDays) => {
          return {
            temp: Math.round(forecastDays.main.temp),
            date: getDate(forecastDays.dt),
            icon: getWeatherIcon(
              forecastDays.weather[0].id,
              forecastDays.weather[0].icon
            ),
          };
        });

        setForecastData(getForecastData(newForecastData));
      } catch (error) {
        setIsErrorForecast(true);
      }

      setIsLoadingForecastData(false);
    };
    fetchForecastData();
  }, [city]);

  return [{ forecastData, isLoadingForecastData, isErrorForecast }, setCity];
}
