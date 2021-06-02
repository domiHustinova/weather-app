import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL, API_KEY } from "../services/consts";
import { getTime } from "../services/helpers";

import { CITIES } from "./consts";

export function useWeatherApi() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState(CITIES[0]);
  const [isErrorWeather, setIsErrorWeather] = useState(false);
  const [isLoadingWeatherData, setIsLoadingWeatherData] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsErrorWeather(false);
      setIsLoadingWeatherData(true);

      try {
        const queryUrl = `${API_URL}weather?APPID=${API_KEY}&q=${city.value}&units=metric&lang=EN`;
        const response = await axios(queryUrl);

        setWeatherData({
          name: response.data.name,
          temp: Math.round(response.data.main.temp),
          description: response.data.weather[0].description,
          id: response.data.weather[0].id,
          icon: response.data.weather[0].icon,
          humidity: response.data.main.humidity,
          speed: Number.parseFloat(response.data.wind.speed).toFixed(1),
          sunrise: getTime(response.data.sys.sunrise),
          sunset: getTime(response.data.sys.sunset),
        });
      } catch (error) {
        setIsErrorWeather(true);
      }

      setIsLoadingWeatherData(false);
    };

    fetchWeatherData();
  }, [city]);

  return [{ weatherData, isLoadingWeatherData, isErrorWeather }, setCity];
}
