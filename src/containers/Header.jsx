// React util
import { Link } from "react-router-dom";
import React from "react";

// Images
import Logo from "../assets/logo/main.png";

// Constants
import { pages } from "../constants/header";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-[100px] py-10 text-text font-primary">
      <div>
        <img className="h-20" src={Logo} alt="" />
      </div>
      <nav className="flex items-center gap-10 underline-offset-3 font-accent text-2xl">
        {pages.map((page, index) => (
          <Link className="hover:underline" to={page.link} key={index}>
            {page.name}
          </Link>
        ))}
        <Link className="bg-primary hover:underline px-4 py-1 text-black">
          Entrades
        </Link>
      </nav>
    </header>
  );
};

export default Header;
