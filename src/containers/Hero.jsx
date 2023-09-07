import React from "react";

// Images
import Background from "../assets/backgrounds/diamond.jpg";

// Icons
import { FaShoppingCart } from "react-icons/fa";
import { RiVipFill } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";

// Constants
import { title, text, ticketsText, vipTicketsText } from "../constants/hero";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <article className="max-w-[600px] z-[1] text-center flex flex-col items-center gap-1">
        <h1 className="text-8xl font-bold font-accent">{title}</h1>
        <p className="text-lg">{text}</p>
        <div className="flex items-center gap-2 text-lg">
          <button className="flex items-center gap-2 border rounded px-4 py-1 mt-1 hover:bg-white hover:text-black transition-colors duration-50">
            <FaShoppingCart />
            {ticketsText}
          </button>
          <button className="flex items-center gap-2 border border-accent rounded px-4 py-1 mt-1 hover:bg-accent hover:text-black transition-colors duration-50">
            <RiVipFill size={20} />
            {vipTicketsText}
          </button>
        </div>
      </article>
      <button className="flex flex-col items-center absolute bottom-14 left-1/2 -translate-x-1/2 z-[1]">
        <div className="text-secondary text-2xl rounded-full p-2">
          <BsChevronDown />
        </div>
        <p className="text-lg">Comprar</p>
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
