import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./Layout/DefaultLayout";

import { route, defaultRoute } from "./route/router";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter(route.concat(defaultRoute))} />
  </React.StrictMode>
);

