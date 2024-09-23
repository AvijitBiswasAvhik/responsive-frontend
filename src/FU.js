import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Froms from "./Forms";
import { Outlet } from "react-router-dom";
import Forms from "./Forms";

function FU() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Creating a form with Bootstrap, Formik,Yup and React</title>
          <meta
            name="description"
            content="creatinfg a beutiful form for FCC project"
          />
          <meta
            name="keywords"
            content="react, helmet, example, FCC, CSS, Bootstrap"
          />
        </Helmet>
        
      </HelmetProvider>
      <div className="container">
      <header className="form-header text-center">
          <h1 className="">Welcome to My App</h1>
          <p>Check in console to get the value</p>
        </header>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="form-cotainer mb-3 col-12 col-sm-10 col-md-8 col-lg-6  rounded-2">
          
          <Forms />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FU;
