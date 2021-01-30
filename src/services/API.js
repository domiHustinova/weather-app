import { API_URL, API_KEY } from "./consts";
import { getDate, getWeatherIcon } from "./helpers";

export const fetchWeatherData = async (city) => {
  const endpoint = `${API_URL}weather?APPID=${API_KEY}&q=${city.name},${city.code}&units=metric&lang=CZ`;
  const data = await (await fetch(endpoint)).json();
  return {
    name: data.name,
    temp: data.main.temp,
    description: data.weather[0].description,
    id: data.weather[0].id,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    speed: data.wind.speed,
  };
};

export const fetchForecastData = async (city) => {
  const endpoint = `${API_URL}forecast?APPID=${API_KEY}&q=${city.name},${city.code}&units=metric&lang=CZ`;
  const data = await (await fetch(endpoint)).json();
  return data.list.map((forecastDays) => {
    return {
      temp: Math.round(forecastDays.main.temp),
      date: getDate(forecastDays.dt),
      icon: getWeatherIcon(
        forecastDays.weather[0].id,
        forecastDays.weather[0].icon
      ),
    };
  });
};
