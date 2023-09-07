import React from "react";

// Constants
import { sponsors } from "../constants/sponsors";

const Sponsors = () => {
  return (
    <div className="w-full flex justify-center">
      <nav className="flex items-center justify-around w-[1200px]">
        {sponsors.map((sponsor, index) => (
          <a key={index} href={sponsor.link}>
            <img className="h-[150px] opacity-80" src={sponsor.image} alt="" />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sponsors;
