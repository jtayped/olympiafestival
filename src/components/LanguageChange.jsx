import React from "react";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  const [t, i18n] = useTranslation("global");

  // Function to check if a language is currently selected
  const isLanguageSelected = (lang) => {
    return i18n.language === lang;
  };

  function switchLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="flex items-center gap-2 font-accent select-none">
      <button
        className={`${
          isLanguageSelected("ca") ? "underline" : "opacity-70"
        } hover:text-primary hover:opacity-100 transition-all duration-100`}
        onClick={() => switchLanguage("ca")}
      >
        CA
      </button>
      |
      <button
        className={`${
          isLanguageSelected("es") ? "underline" : "opacity-70"
        } hover:text-primary hover:opacity-100 transition-all duration-100`}
        onClick={() => switchLanguage("es")}
      >
        ES
      </button>
      |
      <button
        className={`${
          isLanguageSelected("en") ? "underline" : "opacity-70"
        } hover:text-primary hover:opacity-100 transition-all duration-100`}
        onClick={() => switchLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageChange;
