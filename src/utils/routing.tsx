import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../home/home.component";
import Navbar from "../navbar/navbar.component";

export const routes = (
  <Router>
    <Route path="*" component={Navbar} />
    <Route path="/" component={Home} />
  </Router>
);
