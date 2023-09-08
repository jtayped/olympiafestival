import React from "react";

// Constants
import { sponsors } from "../constants/sponsors";

const Sponsors = () => {
  return (
    <div className="w-full flex justify-center p-4">
      <nav className="flex flex-wrap items-center justify-around max-w-[1200px]">
        {sponsors.map((sponsor, index) => (
          <a key={index} href={sponsor.link}>
            <img
              className="h-[60px] lg:h-[135px] opacity-80 invert-[82%]"
              src={sponsor.image}
              alt=""
            />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sponsors;
