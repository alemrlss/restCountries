import React,{useState} from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import "./index.css";
import Form from "./components/Form";
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import InfoCard from "./components/InfoCard";

function App() {

 
  return (
    <div className="app">
      <NavBar/>
   
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/country/:countryName" element={<InfoCard/>}></Route>

        <Route
          path="*"
          element={
            <Navigate replace to="/" />
          }
          />


    </Routes>
   
   </BrowserRouter>
    </div>
    
  );
}

export default App;
