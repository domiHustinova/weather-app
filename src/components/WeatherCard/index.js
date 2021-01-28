import React from "react";
import styled from "styled-components";

import QuickOptions from "../QuickOptions/QuickOptions";
import Weather from "../Weather";
import Forecast from "../Forecast";
import getWeatherIcon from "../../services/helpers";
import { API_URL, API_KEY } from "../../services/consts";

const StyledDisplayCard = styled.div`
  margin: 10px auto 30px auto;
  width: 350px;
  overflow: hidden;
  border-radius: 10px;
  border: 5px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);
`;

class WeatherCard extends React.Component {
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
      `${API_URL}weather?APPID=${API_KEY}&q=${city.name},${city.code}&units=metric&lang=CZ`
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
      `${API_URL}forecast?APPID=${API_KEY}&q=${city.name},${city.code}&units=metric&lang=CZ`
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
        <QuickOptions onClick={this.onClickHandler} />
        {weatherData?.temp && (
          <StyledDisplayCard>
            <Weather weatherData={weatherData} />
            {Array.isArray(forecastData) && forecastData.length && (
              <Forecast forecastData={forecastData} />
            )}
          </StyledDisplayCard>
        )}
      </div>
    );
  }
}

export default WeatherCard;
