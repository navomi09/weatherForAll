import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Enter city": "Enter city",
      "Get Weather": "Get Weather",
      "Temperature": "Temperature",
      "Feels Like": "Feels Like",
      "Humidity": "Humidity",
      "Wind Speed": "Wind Speed",
      "Please enter a city name": "Please enter a city name",
      "City not found": "City not found",
    },
  },
  hi: {
    translation: {
      "Enter city": "शहर दर्ज करें",
      "Get Weather": "मौसम प्राप्त करें",
      "Temperature": "तापमान",
      "Feels Like": "ऐसा लगता है",
      "Humidity": "आर्द्रता",
      "Wind Speed": "हवा की गति",
      "Please enter a city name": "कृपया शहर का नाम दर्ज करें",
      "City not found": "शहर नहीं मिला",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
