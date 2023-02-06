import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CardCountry from "./CardCountry";
import Form from "./Form";
import Loader from "./Loader";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import {BrowserRouter} from 'react-router-dom'

function Main() {
  const [data, setData] = useState(null);
  const [copyData, setCopyData] = useState(null);
  const [filterSearch, setFilterSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [endPoint, setEndPoint] = useState(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    setLoading(true);
    let api = helpHttp();
    api.get(endPoint).then((res) => {
      setCopyData(res);
      setData(res);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let api = helpHttp();
    api.get(endPoint).then((res) => {
      setCopyData(res);
      setData(res);
    });
  }, [endPoint]);

  const handleChangeSearch = (e) => {
    const inputSearch = e.target.value.toLowerCase();
    const filterCountry = copyData.filter((item) => {
      const dataApi = item.name.common.toLowerCase();
      if (dataApi.indexOf(inputSearch) !== -1) {
        return item;
      }
    });
    if (filterCountry.length === 0) {
      setFilterSearch(true);
    } else { 
      setFilterSearch(false);
    }

    setData(filterCountry);
  };

  return (
    <div className="bg-gray-50">
      <Form
        endPoint={endPoint}
        setEndPoint={setEndPoint}
        handleChangeSearch={handleChangeSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pl-24 pr-24 ">
        {loading && <Loader />}
        {data &&
          data.map((card, index) => {
            return <CardCountry key={index} data={card} />;
          })}
        {filterSearch && <NotFound />}
      </div>
    </div>
  );
}

export default Main;
