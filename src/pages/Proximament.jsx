import React from "react";

// Images
import Background from "../assets/backgrounds/diamond.jpg";

// Icons
import { AiOutlineInstagram } from "react-icons/ai";

// Constants
import { title } from "../constants/hero";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-text">
      <article className="max-w-[600px] px-10 sm:px-0 z-[1] text-center flex flex-col items-center">
        <h1 className="text-7xl xs:text-8xl text-primary font-bold font-accent">
          {title}
        </h1>
        <p className="text-2xl xs:text-4xl font-accent -mt-4 tracking-[8px] xs:tracking-[12px]">
          PROXIMAMENT
        </p>
        <div className="flex items-center gap-2 text-lg mt-1 xs:mt-4">
          <a
            href="https://www.instagram.com/theolympiafestival/"
            className="flex items-center gap-2 border rounded px-4 py-1 mt-1 hover:bg-white hover:text-black transition-colors duration-50"
          >
            <AiOutlineInstagram size={25} />
            Segueix-nos
          </a>
        </div>
      </article>
      <img
        className="absolute top-0 brightness-[35%] w-full h-full object-cover transform -scale-x-100 select-none z-0"
        src={Background}
        alt=""
      />
    </div>
  );
};

export default Hero;
