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

const router = createBrowserRouter([
  {
    path: "/responsive-frontend",
    element: <United />,
    children: [
      {
        path: "/responsive-frontend",
        element: <LandingPage />,
      },
      {
        path: "/responsive-frontend/form",
        element: <FU />,
      },
      {
        path: "/responsive-frontend/tribute",
        element: <TributePage />,
      },
      {
        path: "/responsive-frontend/technical",
        element: <TechnicalDocumentaion />,
      },
    ],
  },
]);
export default router;
