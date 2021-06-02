import React from "react";
import { useTranslation } from "react-i18next";

import { Weather } from "../components/";
import { getWeatherIcon } from "../services/helpers";

export function WeatherContainer({ city, weatherData }) {
  const { t } = useTranslation();
  return (
    <Weather>
      <Weather.CityTitle>{t(city.title) || weatherData.name}</Weather.CityTitle>

      <Weather.InnerTopWrapper>
        <Weather.Section>
          <Weather.SectionTempValue>
            {weatherData.temp}
          </Weather.SectionTempValue>
          <Weather.SectionTempUnit>°C</Weather.SectionTempUnit>
        </Weather.Section>
        <Weather.IconSection
          icon={getWeatherIcon(weatherData.id, weatherData.icon)}
        />
      </Weather.InnerTopWrapper>

      <Weather.InnerWrapper>
        <Weather.Section>
          <Weather.SectionTitle>{t("weather.wind")}</Weather.SectionTitle>
          <Weather.SectionValue speed={weatherData.speed} />
        </Weather.Section>
        <Weather.Section>
          <Weather.SectionTitle>{t("weather.humidity")}</Weather.SectionTitle>
          <Weather.SectionValue humidity={weatherData.humidity} />
        </Weather.Section>
      </Weather.InnerWrapper>

      <Weather.InnerWrapper>
        <Weather.Section>
          <Weather.SectionTitle>{t("weather.sunrise")}</Weather.SectionTitle>
          <Weather.SectionValue times={weatherData.sunrise} />
        </Weather.Section>
        <Weather.Section>
          <Weather.SectionTitle>{t("weather.sunset")}</Weather.SectionTitle>
          <Weather.SectionValue times={weatherData.sunset} />
        </Weather.Section>
      </Weather.InnerWrapper>
    </Weather>
  );
}
