import React from "react";
import styled from "styled-components";
import { WEEK_DAYS } from "../../services/consts";

const ForecastWrapper = styled.div`
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  color: #666;

  &:hover {
    background-color: #fff3d9;
  }
`;

const ForecastDay = styled.div`
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

const Forecast = ({ day }) => {
  return (
    <ForecastWrapper>
      <ForecastDay>
        {WEEK_DAYS[day.date.weekDay]} {day.date.day}.{day.date.month}.
      </ForecastDay>
      <ForecastIcon>
        <i className={day.icon}></i>
      </ForecastIcon>
      <ForecastTemp>{Math.round(day.temp)} °C</ForecastTemp>
    </ForecastWrapper>
  );
};

export default Forecast;
