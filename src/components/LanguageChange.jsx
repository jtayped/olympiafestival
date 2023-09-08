import React from "react";
import { useTranslation } from "react-i18next";

const LanguageChange = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  function switchLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="flex items-center gap-2 font-accent text-secondary select-none">
      <button
        className="hover:scale-110 hover:text-primary transition-all duration-100"
        onClick={() => switchLanguage("ca")}
      >
        CA
      </button>
      |
      <button
        className="hover:scale-110 hover:text-primary transition-all duration-100"
        onClick={() => switchLanguage("es")}
      >
        ES
      </button>
      |
      <button
        className="hover:scale-110 hover:text-primary transition-all duration-100"
        onClick={() => switchLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageChange;
