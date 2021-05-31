import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { WEEK_DAYS } from "../../services/consts";

const ForecastWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundForecast};
`;

const ForecastDayWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderForecast};
  padding: 15px 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textForecast};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundForecastHover};
  }
`;

const ForecastDate = styled.div`
  flex: 1;
  font-size: 14px;
`;

const ForecastIcon = styled.div`
  flex: 0 0 30px;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.iconForecast};
`;

const ForecastTemp = styled.div`
  flex: 0 0 70px;
  text-align: right;
`;

const Forecast = ({ forecastData }) => {
  const { t } = useTranslation();
  return (
    <ForecastWrapper id="forecast">
      {forecastData.map((dayData) => (
        <ForecastDayWrapper key={dayData.date.day}>
          <ForecastDate>
            {t(WEEK_DAYS[dayData.date.weekDay])} {dayData.date.day}.
            {dayData.date.month}.
          </ForecastDate>
          <ForecastIcon>
            <i className={dayData.icon}></i>
          </ForecastIcon>
          <ForecastTemp>{Math.round(dayData.temp)} °C</ForecastTemp>
        </ForecastDayWrapper>
      ))}
    </ForecastWrapper>
  );
};
export default Forecast;
