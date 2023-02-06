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
    <Link to={'/country/' + data.name.common.toLowerCase()} className="card-countries flex flex-col p-0 bg-white rounded-lg m-12 hover:m-10 hover:ease-in-out duration-500 hover:cursor-pointer">
      <img
        src={data.flags.png}
        alt={data.name.common}
        className="rounded-t-lg h-36 "
      />

      <hr className="divide-solid divide-black w-full drop-shadow-lg " />
      <div className="p-3 bg-white rounded-b-lg">
        <p className="mt-1 text-xl font-bold">{data.name.common}</p>
        <p className="text-s">Population: {separator(data.population)}</p>
        <p className="text-s">Capital: {capital}</p>
        <p className="text-s ">Region: {data.region}</p>
      </div>
    </Link>
  );
}

export default CardCountry;
