import React from "react";
import { useTranslation } from "react-i18next";

import { QuickOptions } from "../components/";
import { CITIES } from "../services/consts";

export function QuickOptionsContainer({ cityData, setCity, getLocation }) {
  const { t } = useTranslation();
  return (
    <QuickOptions>
      <QuickOptions.Button
        title={t("currentLocation")}
        selected={cityData?.lat}
        onClick={getLocation}
      >
        <i className="fas fa-map-marker-alt"></i>
      </QuickOptions.Button>
      {CITIES.map((city) => (
        <QuickOptions.Button
          key={city.code}
          title={t(city.title)}
          selected={cityData?.code === city.code}
          onClick={() => setCity(city)}
        >
          {t(city.title)}
        </QuickOptions.Button>
      ))}
    </QuickOptions>
  );
}
