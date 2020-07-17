import React from "react";
import "./index.scss";

export const Forecast = ({forecastData}) => {
    return (
        <div className="weather__forecast" id="predpoved">
            {forecastData.map(day => (
                <div>
                    <div className="forecast">
                        <div className="forecast__day">{day.date}</div>
                        <div className="forecast__temp">{Math.round(day.temp)} °C</div>
                    </div>
                </div>
            ))}
        </div>
    )
}