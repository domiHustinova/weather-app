import React from "react";
import { Weather } from "../Weather";
import Forecast from "../Forecast";
import getWeatherIcon from "../../services/helpers";

const apiKey = "b873b3cd2a6fe46f2345df4722c65732";
const apiUrl = "https://api.openweathermap.org/data/2.5/";
const CITIES = [
  { name: "Brno", code: "cz" },
  { name: "Prague", code: "cz" },
  { name: "Barcelona", code: "es" },
  { name: "Bratislava", code: "sk" },
];

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: {},
      weatherData: {},
      displayWeather: false,
      forecastData: [],
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (city) => {
    this.setState({ currentCity: city });
    this.fetchWeather(city);
    this.fetchForecast(city);
  };

  fetchWeather(city) {
    let query = fetch(
      `${apiUrl}weather?APPID=${apiKey}&q=${city.name},${city.code}&units=metric&lang=CZ`
    );

    query
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          weatherData: {
            name: data.name,
            temp: data.main.temp,
            description: data.weather[0].description,
            id: data.weather[0].id,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            speed: data.wind.speed,
          },
        })
      );
  }

  fetchForecast(city) {
    let query = fetch(
      `${apiUrl}forecast?APPID=${apiKey}&q=${city.name},${city.code}&units=metric&lang=CZ`
    );
    query
      .then((response) => response.json())
      .then((dataReceived) => {
        const forecastData = dataReceived.list.map((forecastDays) => {
          return {
            temp: Math.round(forecastDays.main.temp),
            date: this.getDate(forecastDays.dt),
            icon: getWeatherIcon(
              forecastDays.weather[0].id,
              forecastDays.weather[0].icon
            ),
          };
        });
        this.getForecastData(forecastData);
      });
  }

  getDate = (time) => {
    let date = new Date(time * 1000);

    return {
      weekDay: date.getDay(),
      day: date.getDate(),
      month: date.getMonth() + 1,
    };
  };

  getForecastData(data) {
    const groups = data.reduce((groups, forecast) => {
      const date = forecast.date.day;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(forecast);

      return groups;
    }, {});

    const temps = Object.keys(groups).map((day) => {
      return groups[day].reduce(function (prev, current) {
        return current.temp > prev.temp ? current : prev;
      });
    });

    this.setState({ forecastData: temps.slice(1, -1) });
  }

  render() {
    const { weatherData, forecastData } = this.state;
    return (
      <div>
        <div className="button-group">
          {CITIES.map((city) => (
            <button
              className="button city"
              key={city.name}
              onClick={() => this.onClickHandler(city)}
            >
              {city.name}
            </button>
          ))}
        </div>
        {weatherData?.temp && (
          <div className="weather">
            <Weather weatherData={weatherData} />
            {Array.isArray(forecastData) &&
              forecastData.length &&
              forecastData.map((day) => <Forecast day={day} />)}
          </div>
        )}
      </div>
    );
  }
}
