import React, { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./landing-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeather,
  faBars,
  faFire,
  faBatteryFull,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import LPBRAND from "./LPBrand.jpg";
export default function LandingPage() {
  let [active, setActive] = useState({ menu: false });
  useEffect(() => {
    let men = document.getElementById("menus");
    if (active.menu) {
      men.classList.remove("inactive");
      men.classList.add("active");
    } else {
      men.classList.add("inactive");
      men.classList.remove("active");
    }
  }, [active.menu]);

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Detect if the user is scrolling up
      if (currentScroll < lastScrollTop) {
        // Scrolling up
        document.getElementById("navigation-bar").style.position = "sticky";
        document.getElementById("navigation-bar").style.borderBottom = "1px solid black";
        document.getElementById("navigation-bar").style.top = "0";
      } else {
        // Scrolling down
        document.getElementById("navigation-bar").style.position = "relative";
      }

      // Update lastScrollTop to the current scroll position
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product Landing Page</title>
        </Helmet>
      </HelmetProvider>
      <nav id="navigation-bar" className="navigation-bar p-2 px-md-3 px-lg-5">
        <div
          id="nav-content"
          className="d-flex flex-wrap flex-md-wrap flex align-items-center justify-content-between"
        >
          <a href="#" id="brand-image-ac" className="">
            <div className="brand-image-container">
              <img className="brand-image" src={LPBRAND} alt="" />
            </div>
          </a>
          <button
            className="btn p-2 text-secondary d-md-none"
            type="button"
            id="toggle-button"
            onClick={(e) => {
              e.stopPropagation();
              console.log(active.menu);
              setActive((pre) => {
                return { ...pre, menu: !pre.menu };
              });
            }}
          >
            <FontAwesomeIcon className="h-100 w-100" icon={faBars} />
          </button>

          <div
            id="menus"
            className="menus inactive capitalize gap-2 d-md-flex align-items-center  justify-content-center mt-3 mt-md-0"
          >
            <div className="menu-item">
              <a href="#start" className="nav-link">
                Start
              </a>
            </div>
            <div className="menu-item">
              <a href="#feature" className="nav-link">
                Feature
              </a>
            </div>
            <div className="menu-item">
              <a href="#video" className="nav-link">
                Video
              </a>
            </div>
            <div className="menu-item">
              <a href="#price" className="nav-link">
                Price
              </a>
            </div>
          </div>
        </div>
      </nav>
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
      <footer className="d-flex align-items-center justify-content-center flex-column bg-secondary p-3">
        <ul
          className="d-flex my-auto gap-2 me-4"
          style={{ listStyleType: "none" }}
        >
          <li>
            <a className="fw-bold nav-link" href="#">
              Privacy
            </a>
          </li>
          <li>
            <a className="fw-bold nav-link" href="#">
              Terms
            </a>
          </li>
          <li>
            <a className="fw-bold nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <span>Copyright 2016, Original Trombones</span>
      </footer>
    </>
  );
}
