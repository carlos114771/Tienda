import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Componentes/App.js";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Componentes/Routes.js";
import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

ReactDOM.render(
 
    <HashRouter>
      <Routes />
    </HashRouter>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
