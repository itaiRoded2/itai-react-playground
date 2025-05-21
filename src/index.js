import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import ItaiReactApp from "./app/pages/ItaiReactApp";
import reportWebVitals from "./reportWebVitals";
//import App from "App";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "AppWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
const basename =
  process.env.NODE_ENV === "production" ? "/itai-react-playground/" : "/";

root.render(
  <React.StrictMode>
    {/* <ItaiReactApp /> */}
    <AppWrapper />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
