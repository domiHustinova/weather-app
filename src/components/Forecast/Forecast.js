import React from "react";

import { DayWrapper, Date, Icon, Temp, Wrapper } from "./styles/Forecast";

export default function Forecast({ children, ...restProps }) {
  return <DayWrapper {...restProps}>{children}</DayWrapper>;
}

Forecast.Wrapper = function ForecastWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Forecast.Date = function ForecastDate({ children, ...restProps }) {
  return <Date {...restProps}>{children}</Date>;
};

Forecast.Icon = function ForecastIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Forecast.Temp = function ForecastTemp({ to, children, ...restProps }) {
  return <Temp {...restProps}>{children}</Temp>;
};
