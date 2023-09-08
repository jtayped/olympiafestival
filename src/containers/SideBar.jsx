import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Animation
import { motion } from "framer-motion";

// Icons
import { FiX } from "react-icons/fi";

// Components
import { LanguageChange } from "../components";

const SideBar = ({ toggleSidebar }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const navItems = t("header.nav", { returnObjects: true });
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 500, opacity: 0 }}
      transition={{ type: "tween", duration: 0.1 }}
      className="absolute top-0 left-0 w-full h-screen bg-secondary z-[200] flex items-center justify-center"
    >
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.125 }}
        onClick={() => toggleSidebar()}
        className="absolute top-14 right-12 text-background"
      >
        <FiX size={25} />
      </motion.button>
      <nav className="flex flex-col items-center text-background font-accent text-4xl gap-3">
        {navItems.map((page, index) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 + 0.2 }}
          >
            <Link
              onClick={() => toggleSidebar()}
              className="underline"
              to={page.link}
              key={index}
            >
              {page.name}
            </Link>
          </motion.div>
        ))}
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background"
      >
        <LanguageChange />
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
