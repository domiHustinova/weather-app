import React from "react";

import {
  CityTitle,
  IconSection,
  InnerTopWrapper,
  InnerWrapper,
  Section,
  SectionTempDescription,
  SectionTempUnit,
  SectionTempValue,
  SectionTitle,
  SectionValue,
  Wrapper,
} from "./styles/Weather";
import "./styles/css/weather-icons.min.css";

export default function Weather({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

Weather.CityTitle = function WeatherCityTitle({ children, ...restProps }) {
  return <CityTitle {...restProps}>{children}</CityTitle>;
};

Weather.IconSection = function WeatherIconSection({ icon, ...restProps }) {
  return (
    <IconSection {...restProps}>
      <i className={icon}></i>
    </IconSection>
  );
};

Weather.InnerTopWrapper = function WeatherInnerTopWrapper({
  children,
  ...restProps
}) {
  return <InnerTopWrapper {...restProps}>{children}</InnerTopWrapper>;
};

Weather.InnerWrapper = function WeatherInnerWrapper({
  children,
  ...restProps
}) {
  return <InnerWrapper {...restProps}>{children}</InnerWrapper>;
};

Weather.Section = function WeatherSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Weather.SectionTempDescription = function WeatherSectionTempDescription({
  children,
  ...restProps
}) {
  return (
    <SectionTempDescription {...restProps}>{children}</SectionTempDescription>
  );
};

Weather.SectionTempUnit = function WeatherSectionTempUnit({
  children,
  ...restProps
}) {
  return <SectionTempUnit {...restProps}>{children}</SectionTempUnit>;
};

Weather.SectionTempValue = function WeatherSectionTempValueSectionTempValue({
  children,
  ...restProps
}) {
  return <SectionTempValue {...restProps}>{children}</SectionTempValue>;
};

Weather.SectionTitle = function WeatherSectionTitle({
  children,
  ...restProps
}) {
  return <SectionTitle {...restProps}>{children}</SectionTitle>;
};

Weather.SectionValue = function WeatherSectionValue({
  times,
  speed,
  humidity,
}) {
  return (
    <SectionValue>
      {times && (
        <span>
          {times.hours}:{times.minutes}
        </span>
      )}
      {speed && (
        <>
          <span>{speed}</span> km/h
        </>
      )}
      {humidity && (
        <>
          <span>{humidity}</span> %
        </>
      )}
    </SectionValue>
  );
};
