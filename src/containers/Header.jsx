// React util
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Images
import Logo from "../assets/logo/main.png";

// Icons
import { FiMenu } from "react-icons/fi";

// Components
import { LanguageChange } from "../components";
import Sidebar from "./SideBar";

// Animation
import { AnimatePresence } from "framer-motion";

const Header = () => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const [sidebarShown, setSidebar] = useState(false);
  const navItems = t("header.nav", { returnObjects: true });
  const accentBtn = t("header.accentBtn", { returnObjects: true });

  function toggleSideBar() {
    setSidebar(!sidebarShown);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-[50px] md:px-[100px] py-10 text-text font-primary bg-gradient-to-b from-black/100 to-white/0">
      <Link to="/">
        <img className="h-14 md:h-20" src={Logo} alt="Olympia Festival Logo" />
      </Link>
      <nav className="hidden lg:flex items-center gap-10 underline-offset-3 font-accent text-2xl">
        <div className="text-[17px] mr-7">
          <LanguageChange />
        </div>
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
      <button onClick={() => toggleSideBar()} className="flex lg:hidden">
        <FiMenu size={25} />
      </button>
      <AnimatePresence>
        {sidebarShown ? <Sidebar toggleSidebar={toggleSideBar} /> : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
