import React, { useState } from "react";
import "../index.css";

function Filter({ setEndPoint }) {
  const [changeRegion, setChangeRegion] = useState(false);

  const handleChange = (e) => {
    if (changeRegion === false) {
      e.target.remove(e.target.value);
      setChangeRegion(true);
    }
    if (e.target.value === "af") {
      setEndPoint("https://restcountries.com/v3.1/region/africa");
    }
    if (e.target.value === "am") {
      setEndPoint("https://restcountries.com/v3.1/region/americas");
    }
    if (e.target.value === "as") {
      setEndPoint("https://restcountries.com/v3.1/region/asia");
    }
    if (e.target.value === "eu") {
      setEndPoint("https://restcountries.com/v3.1/region/europe");
    }
    if (e.target.value === "oc") {
      setEndPoint("https://restcountries.com/v3.1/region/oceania");
    }
  };

  return (
    <select
      id="regions"
      className={`
        p-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black
        focus:border-black block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      onChange={handleChange}
    >
      <option value="default" required>
        Filter by Region
      </option>
      <option value="af">Africa</option>
      <option value="am">America</option>
      <option value="as">Asia</option>
      <option value="eu">Europe</option>
      <option value="oc">Oceania</option>
    </select>
  );
}

export default Filter;
