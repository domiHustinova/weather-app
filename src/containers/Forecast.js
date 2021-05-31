import React from "react";
import { useTranslation } from "react-i18next";

import { Forecast } from "../components/";
import { WEEK_DAYS } from "../services/consts";

export function ForecastContainer({ forecastData }) {
  const { t } = useTranslation();
  return (
    <Forecast.Wrapper>
      {forecastData.map((dayData) => (
        <Forecast key={dayData.date.day}>
          <Forecast.Date>
            {t(WEEK_DAYS[dayData.date.weekDay])} {dayData.date.day}.
            {dayData.date.month}.
          </Forecast.Date>
          <Forecast.Icon>
            <i className={dayData.icon}></i>
          </Forecast.Icon>
          <Forecast.Temp>{Math.round(dayData.temp)} °C</Forecast.Temp>
        </Forecast>
      ))}
    </Forecast.Wrapper>
  );
}
