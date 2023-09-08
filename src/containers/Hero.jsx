import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Images
import Background from "../assets/backgrounds/diamond.jpg";

// Icons
import { FaShoppingCart } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

// Constants
import { title } from "../constants/hero";

const Hero = () => {
  const [t, i18n] = useTranslation("global");
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <article className="max-w-[600px] z-[1] text-center flex flex-col items-center gap-1 p-4">
        <h1 className="text-8xl font-bold font-accent">{title}</h1>
        <p className="text-sm sm:text-md md:text-lg">{t("hero.text")}</p>
        <div className="flex items-center gap-2 text-lg">
          <button className="flex items-center gap-2 border rounded text-sm md:text-md px-2 sm:px-4 py-0.5 sm:py-1 mt-1 hover:bg-white hover:text-black transition-colors duration-50">
            <FaShoppingCart />
            {t("hero.buyBtn")}
          </button>
          <button className="flex items-center gap-2 border border-accent rounded text-sm md:text-md px-2 sm:px-4 py-0.5 sm:py-1 mt-1 hover:bg-accent hover:text-black transition-colors duration-50">
            <RiVipFill size={20} />
            {t("hero.buyVipBtn")}
          </button>
        </div>
      </article>
      <button
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        className="flex flex-col items-center absolute bottom-14 left-1/2 -translate-x-1/2 z-[1]"
      >
        <div
          className={`text-secondary text-2xl rounded-full transition-all duration-150 ${
            ctaHovered ? "translate-y-1" : null
          }`}
        >
          <BsChevronDown />
        </div>
        <p className="text-lg">{t("hero.scrollCta")}</p>
      </button>
      <img
        className="absolute top-0 brightness-[35%] w-full h-full object-cover transform -scale-x-100 select-none z-0"
        src={Background}
        alt=""
      />
    </div>
  );
};

export default Hero;
