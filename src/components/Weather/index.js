import React from "react";
import "./index.scss";
import getWeatherIcon from './weather-icons';
import "./css/weather-icons.min.css"

export const Weather = ({weatherData}) => {

    return (
        <div className="weather__current">
            <h2 className="weather__city" id="mesto">
                {weatherData.name}
            </h2>

            <div className="weather__inner weather__inner--center">
                <div className="weather__section weather__section--temp">
                    <span className="weather__temp-value" id="teplota">{Math.round(weatherData.temp)}</span>
                    <span className="weather__temp-unit">°C</span>
                    <div className="weather__description" id="popis">{weatherData.description}</div>
                </div>
                <div className="weather__section weather__section--icon" id="ikona">
                    <i className={getWeatherIcon(weatherData.id, weatherData.icon)}></i>
                </div>
            </div>

            <div className="weather__inner">
                <div className="weather__section">
                    <h3 className="weather__title">Vítr</h3>
                    <div className="weather__value">
                        <span id="vitr">{weatherData.speed}</span> km/h
                    </div>
                </div>
                <div className="weather__section">
                    <h3 className="weather__title">Vlhkost</h3>
                    <div className="weather__value">
                        <span id="vlhkost">{weatherData.humidity}</span> %
                    </div>
                </div>
            </div>
        </div>
    )
}