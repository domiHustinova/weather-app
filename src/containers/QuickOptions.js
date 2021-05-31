import React from "react";
import { useTranslation } from "react-i18next";

import { QuickOptions } from "../components/";
import { CITIES } from "../services/consts";

export function QuickOptionsContainer({ displayWeather }) {
  const { t } = useTranslation();
  return (
    <QuickOptions>
      <QuickOptions.Button>
        <i className="fas fa-map-marker-alt"></i>
      </QuickOptions.Button>
      {CITIES.map((city) => (
        <QuickOptions.Button
          key={city.code}
          onClick={() => displayWeather(city)}
        >
          {t(city.title)}
        </QuickOptions.Button>
      ))}
    </QuickOptions>
  );
}
