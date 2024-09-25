import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  createBrowserRouter,
} from "react-router-dom";
import FU from "./FU";
import TributePage from "./tribute";
import United from "./united";
import TechnicalDocumentaion from "./TechnicalDocumentaion";
import LandingPage from "./LandingPage";
import Landing from "./Landing";
import Portfolio from "./Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "/lp-page",
        element: <Landing />,
      },
      {
        path: "/form",
        element: <FU />,
      },
      {
        path: "/tribute",
        element: <TributePage />,
      },
      {
        path: "/technical",
        element: <TechnicalDocumentaion />,
      },
    ],
  },
]);
export default router;
