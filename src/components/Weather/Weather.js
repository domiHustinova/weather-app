import React from "react";
import styled from "styled-components";
import { getWeatherIcon } from "../../services/helpers";
import "./css/weather-icons.min.css";

const StyledWeatherWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.backgroundWeather}
    ${({ theme }) => theme.backgroundWeatherGradient};
  color: ${({ theme }) => theme.textWeather};
`;

const StyledWeatherCityTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  margin: 0 0 20px 0;
`;

const StyledWeatherInnerTopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledWeatherInnerWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const StyledWeatherSection = styled.div`
  flex: 0 0 50%;
  text-align: center;
`;

const StyledWeatherIconSection = styled(StyledWeatherSection)`
  font-size: 64px;
`;

const StyledWeatherSectionTitle = styled.h3`
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  padding: 0 0 5px 0;
  margin: 0 0 5px 0;
`;

const StyledWeatherSectionValue = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;

const StyledWeatherSectionTempValue = styled.span`
  font-size: 64px;
  font-weight: 800;
  line-height: 1;
`;

const StyledWeatherSectionTempUnit = styled(StyledWeatherSectionTempValue)`
  font-size: 24px;
`;

const StyledWeatherSectionTempDescription = styled.div`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
`;

const Weather = ({ weatherData }) => {
  return (
    <StyledWeatherWrapper id="weather">
      <StyledWeatherCityTitle>{weatherData.name}</StyledWeatherCityTitle>

      <StyledWeatherInnerTopWrapper>
        <StyledWeatherSection>
          <StyledWeatherSectionTempValue>
            {weatherData.temp}
          </StyledWeatherSectionTempValue>
          <StyledWeatherSectionTempUnit>°C</StyledWeatherSectionTempUnit>
          <StyledWeatherSectionTempDescription>
            {weatherData.description}
          </StyledWeatherSectionTempDescription>
        </StyledWeatherSection>
        <StyledWeatherIconSection>
          <i className={getWeatherIcon(weatherData.id, weatherData.icon)}></i>
        </StyledWeatherIconSection>
      </StyledWeatherInnerTopWrapper>

      <StyledWeatherInnerWrapper>
        <StyledWeatherSection>
          <StyledWeatherSectionTitle>Vietor</StyledWeatherSectionTitle>
          <StyledWeatherSectionValue>
            <span>{weatherData.speed}</span> km/h
          </StyledWeatherSectionValue>
        </StyledWeatherSection>
        <StyledWeatherSection>
          <StyledWeatherSectionTitle>Vlhkosť</StyledWeatherSectionTitle>
          <StyledWeatherSectionValue>
            <span>{weatherData.humidity}</span> %
          </StyledWeatherSectionValue>
        </StyledWeatherSection>
      </StyledWeatherInnerWrapper>

      <StyledWeatherInnerWrapper>
        <StyledWeatherSection>
          <StyledWeatherSectionTitle>Východ slnka</StyledWeatherSectionTitle>
          <StyledWeatherSectionValue>
            <span>
              {weatherData.sunrise.hours}:{weatherData.sunrise.minutes}
            </span>
          </StyledWeatherSectionValue>
        </StyledWeatherSection>
        <StyledWeatherSection>
          <StyledWeatherSectionTitle>Západ slnka</StyledWeatherSectionTitle>
          <StyledWeatherSectionValue>
            <span>
              {weatherData.sunset.hours}:{weatherData.sunset.minutes}
            </span>
          </StyledWeatherSectionValue>
        </StyledWeatherSection>
      </StyledWeatherInnerWrapper>
    </StyledWeatherWrapper>
  );
};

export default Weather;
