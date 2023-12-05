import React from "react";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Layout/ErrorPage";
import Contact from "../components/contact/Contact";
import Home from "../components/home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
