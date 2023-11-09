import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function CardCountry({ data }) {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
  }

  let capital = data.capital;
  capital ? (capital = data.capital[0]) : (capital = "No hay capital");

  return (
    <Link
      to={"/country/" + data.name.common.toLowerCase()}
      className={`card-countries flex flex-col p-0 my-4 bg-white rounded-lg sm:m-6 hover:m-4 hover:ease-in-out duration-500 hover:cursor-pointer dark:bg-slate-800`}
    >
      <img
        src={data.flags.png}
        alt={data.name.common}
        className="rounded-t-lg h-36 sm:h-36 object-cover"
      />
      <hr
        className={`divide-solid dark:divide-gray-700 w-full drop-shadow-lg`}
      />
      <div className={`p-6 sm:p-3 bg-white rounded-b-lg dark:bg-slate-800`}>
        <p
          className={`mt-0 sm:mt-1 text-lg sm:text-xl font-bold dark:text-white`}
        >
          {data.name.common}
        </p>
        <p className={`text-xs sm:text-lg dark:text-gray-300`}>
          Population: {separator(data.population)}
        </p>
        <p className={`text-xs sm:text-lg dark:text-gray-300`}>
          Capital: {capital}
        </p>
        <p className={`text-xs sm:text-lg dark:text-gray-300`}>
          Region: {data.region}
        </p>
      </div>
    </Link>
  );
}

export default CardCountry;
