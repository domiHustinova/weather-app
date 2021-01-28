import React from "react";
import styled from "styled-components";
import { WEEK_DAYS } from "../../services/consts";

const ForecastWrapper = styled.div`
  background-color: #fff;
`;

const ForecastDayWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  color: #666;

  &:hover {
    background-color: #fff3d9;
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
  color: #ff3e78;
`;

const ForecastTemp = styled.div`
  flex: 0 0 70px;
  text-align: right;
`;

const Forecast = ({ forecastData }) => {
  return (
    <ForecastWrapper>
      {forecastData.map((dayData) => (
        <ForecastDayWrapper>
          <ForecastDate>
            {WEEK_DAYS[dayData.date.weekDay]} {dayData.date.day}.
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
