import React from "react";
import "../index.css";
import Filter from "./Filter";
import Search from "./Search";

function Form({ setEndPoint, handleChangeSearch }) {
  return (
    <div className=" sm:mb-10 mb-4 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 mx-20 sm:justify-between px-10 mt-4 sm:pt-6 dark:bg-slate-900">
      <Search handleChangeSearch={handleChangeSearch} />
      <Filter setEndPoint={setEndPoint} />
    </div>
  );
}

export default Form;
