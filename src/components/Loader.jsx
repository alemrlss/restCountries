import React from "react";
import imgLoader from "../assets/loader.svg";
import "../index.css";

function Loader() {
  return (
    <div className="loader h-screen">
      <img src={imgLoader} alt="Loading..." className="" />
    </div>
  );
}

export default Loader;
