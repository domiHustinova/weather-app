// colors
const PINK = "#ff3e78";
const BLACK = "#000";
const WHITE = "#fff";
const LIGHT_YELLOW = "#fff3d9";
const DARK_YELLOW = "#ffbd2e";
const LIGHT_PURPLE = "#777bf0";
const DARK_PURPLE = "#453df8";
const LIGHT_GRAY = "#e5e5e5";
const DARK_GRAY = "#666";
const SHADOW_LIGHT = "rgba(0, 0, 0, 0.5)";
const SHADOW_DARK = "rgba(0, 0, 0, 0.7)";
const GRADIENT_TOP_LIGHT = "linear-gradient(to top, #ff3e78, #777bf0)";
const GRADIENT_TOP_DARK = "linear-gradient(to top, #ff3e78, #453df8)";
const GRADIENT_BOTTOM_DARK = "linear-gradient(to bottom, #ff3e78, #ffbd2e)";

const COMMON_COLORS = {
  backgroundForecast: WHITE,
  backgroundForecastHover: LIGHT_YELLOW,
  textForecast: DARK_GRAY,
  borderForecast: LIGHT_GRAY,
  iconForecast: PINK,
  quickOptionsBorder: SHADOW_LIGHT,
  quickOptionsShadow: SHADOW_DARK,
  buttonBackground: PINK,
  buttonBackgroundGradientLight: GRADIENT_TOP_LIGHT,
  buttonBackgroundGradientDark: GRADIENT_TOP_DARK,
  buttonText: WHITE,
  buttonBorder: SHADOW_LIGHT,
  backgroundWeather: PINK,
  backgroundWeatherGradient: GRADIENT_BOTTOM_DARK,
  textWeather: WHITE,
  weatherCardBorder: SHADOW_LIGHT,
  weatherCardShadow: SHADOW_DARK,
  text: WHITE,
};

export const lightTheme = {
  ...COMMON_COLORS,
};

export const darkTheme = {
  ...COMMON_COLORS,
};
