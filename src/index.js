import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router } from 'react-router-dom';
import getRoutes from './js/routes';

const Div = document.createElement("div");
Div.setAttribute("id", "root")
document.body.appendChild(Div)

ReactDom.render(
  <Router>
    {getRoutes()}
  </Router>,
  document.getElementById("root")
);