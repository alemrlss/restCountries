import React from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri"; // Importa iconos de dark/light
import "../index.css";

function NavBar({ handleChangeTheme, theme }) {
  const isDarkMode = theme === "dark";

  return (
    <nav
      className={`bg-gray-100 shadow-slate-400 shadow-md flex justify-between items-center ${
        isDarkMode
          ? "dark:bg-gray-800 dark:text-white dark:border-b dark:border-slate-500"
          : ""
      }`}
    >
      <p className="text-2xl font-bold p-6 mx-auto">Where in the world?</p>
      <button onClick={handleChangeTheme} className="flex items-center">
        {isDarkMode ? (
          <>
            <RiSunLine className="text-yellow-500 text-3xl mr-2" />
          </>
        ) : (
          <>
            <RiMoonLine className="text-gray-600 text-3xl mr-2" />
          </>
        )}
      </button>
    </nav>
  );
}

export default NavBar;
