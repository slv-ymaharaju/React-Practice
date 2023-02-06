import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import HeaderWithSelected from "./components/HOC/Header/HeaderWithSelected";
import HeaderWithSelectedRedux from "./components/Redux/connect";
import { Provider } from "react-redux";
import store from "./components/Redux/reduxStore";
import URL_Parameters from "./components/URL_Parameters/header";
import ParentComponent from "./components/Props/parent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParentComponent/>
    <Provider store={store}>
      <HeaderWithSelectedRedux/>
    </Provider>
    <URL_Parameters/>
  </React.StrictMode>
);
