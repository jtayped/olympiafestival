// React util
import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

// Images
import Logo from "../assets/logo/main.png";

// Icons
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const navItems = t("header.nav", { returnObjects: true });
  const accentBtn = t("header.accentBtn", { returnObjects: true });

  console.log(accentBtn);
  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-[50px] md:px-[100px] py-10 text-text font-primary">
      <Link to="/">
        <img className="h-14 md:h-20" src={Logo} alt="Olympia Festival Logo" />
      </Link>
      <nav className="hidden lg:flex items-center gap-10 underline-offset-3 font-accent text-2xl">
        {navItems.map((page, index) => (
          <Link className="hover:underline" to={page.link} key={index}>
            {page.name}
          </Link>
        ))}
        <Link
          to={accentBtn.link}
          className="bg-primary hover:underline px-4 py-1 text-black"
        >
          {accentBtn.name}
        </Link>
      </nav>
      <button className="flex lg:hidden">
        <FiMenu size={25} />
      </button>
    </header>
  );
};

export default Header;
