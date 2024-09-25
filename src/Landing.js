import React,{useState,useEffect} from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faBatteryFull,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
    
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product Landing Page</title>
        </Helmet>
      </HelmetProvider>
      <section id="start" className="p-3">
        <div className="container text-center">
          <h2 className="fw-bold">Handcrafted, home-made masterpieces</h2>

          <div className="mb-3 lh-lg mx-auto" style={{ maxWidth: "500px" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <button className="btn btn-outline-secondary">GET STARTED</button>
        </div>
     </section>
      <section id="feature">
        <div className="container mt-5">
          <div
            style={{ maxWidth: "900px" }}
            className="row gap-2 mx-auto d-flex align-items-center justify-content-center flex-column"
          >
            <div className="col">
              <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-1 d-sm-flex align-items-center d-none ">
                  <FontAwesomeIcon
                    style={{ height: "70px", width: "70px" }}
                    className="text-warning"
                    icon={faFire}
                  />
                </div>
                <div className="col text-center text-sm-start">
                  <h3 className="text-bold">Premium Materials</h3>
                  <p>
                    Our trombones use the shiniest brass which is sourced
                    locally. This will increase the longevity of your purchase.
                    s
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-1 d-sm-flex align-items-center d-none ">
                  <FontAwesomeIcon
                    style={{ height: "70px", width: "70px" }}
                    className="text-success"
                    icon={faTruck}
                  />
                </div>
                <div className="col text-center text-sm-start">
                  <h3 className="text-bold">Fast Shipping</h3>
                  <p>
                    We make sure you recieve your trombone as soon as we have
                    finished making it. We also provide free returns if you are
                    not satisfied.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-1 d-sm-flex align-items-center d-none ">
                  <FontAwesomeIcon
                    style={{ height: "70px", width: "70px" }}
                    className="text-danger"
                    icon={faBatteryFull}
                  />
                </div>
                <div className="col text-center text-sm-start">
                  <h3 className="text-bold">Quality Assurance</h3>
                  <p>
                    For every purchase you make, we will ensure there are no
                    damages or faults and we will check and test the pitch of
                    your instrument.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="video">
        <div className="d-flex p-2 align-items-center justify-content-center w-100 mt-3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t2Lz-oHthUY?si=VMs8GCpmUtYMe5q8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section id="price">
        <div className="container">
          <div className="row p-3 d-flex flex-column flex-sm-row gap-3">
            <div className="col">
              <div className="price-box">
                <h4
                  className="text-bold lh-sm "
                  style={{ backgroundColor: "rgb(200, 200, 200)" }}
                >
                  Tenor Trombone
                </h4>
                <h5>$600</h5>
                <p
                  className="w-sm-75 w-md-50 mx-auto px-1"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum. Lorem ipsum. Lorem ipsum dolor. Lorem ipsum.
                  Lorem ipsum. Lorem ipsum. Lorem ipsum dolor. Lorem ipsum.
                </p>
                <button className="btn btn-outline-primary">SELECT</button>
              </div>
            </div>
            <div className="col">
              <div className="price-box">
                <h4
                  className="text-bold  lh-sm "
                  style={{ backgroundColor: "rgb(200, 200, 200)" }}
                >
                  Bass Trombone
                </h4>
                <h5>$900</h5>
                <p
                  className="w-sm-75 w-md-50 mx-auto px-1"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum. Lorem ipsum. Lorem ipsum dolor. Lorem ipsum.
                  Lorem ipsum. Lorem ipsum. Lorem ipsum dolor. Lorem ipsum.
                </p>
                <button className="btn btn-outline-primary">SELECT</button>
              </div>
            </div>
            <div className="col">
              <div className="price-box">
                <h4
                  className="text-bold  lh-sm"
                  style={{ backgroundColor: "rgb(200, 200, 200)" }}
                >
                  Valve Trombone
                </h4>
                <h5>$1200</h5>
                <p
                  className="w-sm-75 w-md-50 mx-auto px-1"
                  style={{ maxWidth: "300px" }}
                >
                  Lorem ipsum. Lorem ipsum. Lorem ipsum dolor. Lorem ipsum.
                  Lorem ipsum. Lorem ipsum. Lorem ipsum dolor. Lorem ipsum.
                </p>
                <button className="btn btn-outline-primary">SELECT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
