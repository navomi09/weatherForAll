import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import VoiceInput from "./VoiceInput";
import WeatherAlert from "./WeatherAlert";
import "./WeatherApp.css"; // Import the CSS file for animations

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const { t } = useTranslation();

  const fetchWeather = async () => {
    setError("");
    if (!city) {
      setError(t("Please enter a city name"));
      return;
    }

    try {
      const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError(t("City not found"));
      setWeatherData(null);
    }
  };

  const getWeatherClass = (weatherData) => {
    if (!weatherData) return ""; // Default if no data

    const condition = weatherData.weather[0].main.toLowerCase();

    if (condition.includes("clear")) return "animate-sunny";
    if (condition.includes("cloud")) return "animate-cloudy";
    if (condition.includes("rain")) return "animate-rain";
    if (condition.includes("snow")) return "animate-snow";
    if (condition.includes("thunderstorm")) return "animate-storm";

    return ""; // Fallback class
  };

  return (
    <div className={`app-container ${getWeatherClass(weatherData)}`}>
      <div className="weather-card">
        <LanguageSelector />

        <input
          type="text"
          placeholder={t("Enter city")}
          className="weather-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <VoiceInput setCity={setCity} />

        <button className="weather-button" onClick={fetchWeather}>
          {t("Get Weather")}
        </button>

        {error && <p className="error-text">{error}</p>}

        <WeatherAlert weatherData={weatherData} />

        {weatherData && (
          <div className="weather-info">
            <h3 className="city-name">
              {weatherData.name}, {weatherData.sys.country}
            </h3>
            <p className="weather-desc">{weatherData.weather[0].description}</p>
            <p className="temperature">{t("Temperature")}: {weatherData.main.temp}°C</p>
            <p>{t("Feels Like")}: {weatherData.main.feels_like}°C</p>
            <p>{t("Humidity")}: {weatherData.main.humidity}%</p>
            <p>{t("Wind Speed")}: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
