import React from "react";

const WeatherAlert = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, weather } = weatherData;
  const isExtreme = main.temp < 0 || main.temp > 40 || weather[0].main === "Storm";

  return (
    isExtreme && (
      <div className="weather-alert">
        ⚠ Extreme Weather Alert: Stay Safe!
      </div>
    )
  );
};

export default WeatherAlert;
