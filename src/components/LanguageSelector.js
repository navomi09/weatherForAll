import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4 justify-center">
      <button onClick={() => changeLanguage("en")} className="px-4 py-1 bg-blue-500 text-white rounded">
        English
      </button>
      <button onClick={() => changeLanguage("hi")} className="px-4 py-1 bg-green-500 text-white rounded">
        हिंदी
      </button>
    </div>
  );
};

export default LanguageSelector;
