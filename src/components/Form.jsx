import React from "react";
import "../index.css";
import Filter from "./Filter";
import Search from "./Search";

function Form({endPoint, setEndPoint, handleChangeSearch}) {

  return (
    <div className="flex flex-row pt-8 p-3">
      <Search handleChangeSearch={handleChangeSearch} />
      <Filter endPoint={endPoint} setEndPoint={setEndPoint}/>
    </div>
  );
}

export default Form;
