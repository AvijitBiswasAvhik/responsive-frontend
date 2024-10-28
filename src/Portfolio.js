import React from "react";
import "./portfolio.css";
import file from "./file.png";
import "bootstrap/dist/css/bootstrap.min.css";
import clock from "./project-images/clock.png";
import calculator from "./project-images/calculator.png";
import drum from "./project-images/drum.png";
import preview from "./project-images/preview.png";
import quote from "./project-images/quote.png";
import forms from "./project-images/form.png";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio-image-name">
        <div className="container">
          <div className="row d-flex flex-column flex-sm-row">
            <div className="col d-flex align-items-center justify-content-center">
              <div className="port-image-box">
                <img src={file} alt="" className="port-image" />
              </div>
            </div>
            <div className="col d-flex align-items-center mt-3 mt-sm-0s justify-content-center">
              <div className="port-name-box">
                <h1 className="port-name">
                  <span className="port-name-1">Hey</span>
                  <span className="port-name-2">I am</span>
                  <span className="port-name-3">Avijit</span>
                  <span className="port-name-4">a web devloper</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio-project">
        <div className="container py-5">
          <h2 className="fw-bold text-center">These are some of my projects</h2>
          <hr className="border-dark border-2" />
          <div className="row d-flex row-gap-3">
            <div className="col-12    d-flex align-items-center justify-content-center col-sm-6 col-md-4">
              <a
                className="nav-link fs-4 text-white text-center"
                href="https://avijitbiswasavhik.github.io/random-quote-machine/"
              >
                <figure className="bg-dark pb-1 border border-0 shadow-sm">
                  <img className="w-100 h-100" src={quote} alt="" />
                  <figcaption>Random Quote Machine</figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12    d-flex align-items-center justify-content-center col-sm-6 col-md-4">
              <a
                className="nav-link fs-4 text-white text-center"
                href="https://avijitbiswasavhik.github.io/calculator/"
              >
                <figure className="bg-dark pb-1 border border-0 shadow-sm">
                  <img className="w-100 h-100" src={calculator} alt="" />
                  <figcaption>Calculator</figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12    d-flex align-items-center justify-content-center col-sm-6 col-md-4">
              <a
                className="nav-link fs-4 text-white text-center"
                href="https://avijitbiswasavhik.github.io/drum/"
              >
                <figure className="bg-dark pb-1 border border-0 shadow-sm">
                  <img className="w-100 h-100" src={drum} alt="" />
                  <figcaption>Calculator</figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12    d-flex align-items-center justify-content-center col-sm-6 col-md-4">
              <a
                className="nav-link fs-4 text-white text-center"
                href="https://avijitbiswasavhik.github.io/previewer/"
              >
                <figure className="bg-dark pb-1 border border-0 shadow-sm">
                  <img className="w-100 h-100" src={preview} alt="" />
                  <figcaption>Calculator</figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12    d-flex align-items-center justify-content-center col-sm-6 col-md-4">
              <a
                className="nav-link fs-4 text-white text-center"
                href="https://avijitbiswasavhik.github.io/clock/"
              >
                <figure className="bg-dark pb-1 border border-0 shadow-sm">
                  <img className="w-100 h-100" src={clock} alt="" />
                  <figcaption>25+5 count down machaine</figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12    d-flex align-items-center justify-content-center col-sm-6 col-md-4">
              <a
                className="nav-link fs-4 text-white text-center"
                href="https://responsive-frontend-lemon.vercel.app/form"
              >
                <figure className="bg-dark pb-1 border border-0 shadow-sm">
                  <img className="w-100 h-100" src={forms} alt="" />
                  <figcaption>Bulding a submit form</figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
                  
      </section>
     
    </>
  );
}
