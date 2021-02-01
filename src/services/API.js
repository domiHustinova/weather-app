import { API_URL, API_KEY } from "./consts";
import { getDate, getTime, getWeatherIcon } from "./helpers";

export const fetchWeatherData = async (city) => {
  const endpoint = `${API_URL}weather?APPID=${API_KEY}&q=${city.value}&units=metric&lang=EN`;
  const data = await (await fetch(endpoint)).json();
  return {
    name: data.name,
    temp: Math.round(data.main.temp),
    description: data.weather[0].description,
    id: data.weather[0].id,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    speed: Number.parseFloat(data.wind.speed).toFixed(1),
    sunrise: getTime(data.sys.sunrise),
    sunset: getTime(data.sys.sunset),
  };
};

export const fetchForecastData = async (city) => {
  const endpoint = `${API_URL}forecast?APPID=${API_KEY}&q=${city.value}&units=metric&lang=EN`;
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
