import React from "react";
import { useTranslation } from "react-i18next";

// Images
import Audience from "../assets/backgrounds/audience.jpg";

const Buy = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="w-full flex justify-center py-20">
      <div className="flex max-w-[900px]">
        <img
          className="w-[120px] sm:w-[300px] object-cover h-[400px]"
          src={Audience}
          alt="Crowd of people"
        />
        <div className="flex justify-center">
          <article className="max-w-[500px] p-5 md:p-10">
            <h2 className="font-accent text-4xl sm:text-6xl -translate-x-10 md:-translate-x-14">
              Mollerussa
            </h2>
            <p className="text-sm sm:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, consequuntur ut quibusdam harum amet impedit soluta
              cumque molestias officiis vero eos distinctio illum fuga animi
              quisquam quos libero error possimus alias exercitationem facilis
              eligendi? Autem id adipisci voluptatem dolore illum?
            </p>
            <button className="border border-white px-3 py-1 mt-2 hover:bg-white hover:text-black transition-colors duration-75">
              {t("hero.buyBtn")}
            </button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Buy;
