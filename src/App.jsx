import "./index.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import InfoCard from "./components/InfoCard";

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="app">
      <NavBar handleChangeTheme={handleChangeTheme} theme={theme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/country/:countryName" element={<InfoCard />}></Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
