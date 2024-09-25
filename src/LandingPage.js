import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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
import { Outlet } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react"

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
      window.addEventListener("scroll", () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      // Detect if the user is scrolling up
      if (currentScroll < lastScrollTop) {
        // Scrolling up

        document.getElementById("navigation-bar").style.position = "sticky";
        document.getElementById("navigation-bar").style.top = "0";
      } else {
        document.getElementById("navigation-bar").style.position = "relative";
      }

      // Update lastScrollTop to the current scroll position
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }, []);
  // console.log(active)
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Building aa portfolio page</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
              <a href="/lp-page#start" className="nav-link">
                Start
              </a>
            </div>
            <div className="menu-item">
              <a href="/lp-page#feature" className="nav-link">
                Feature
              </a>
            </div>
            <div className="menu-item">
              <a href="/lp-page#video" className="nav-link">
                Video
              </a>
            </div>
            <div className="menu-item">
              <a href="/lp-page#price" className="nav-link">
                Price
              </a>
            </div>
            <div className="menu-item">
              <Link to="/form" className="nav-link">
                Form
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/technical" className="nav-link">
                Technical
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/lp-page" className="nav-link">
                Landing
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/tribute" className="nav-link">
                Tribute
              </Link>
            </div>
            <div className="menu-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
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
