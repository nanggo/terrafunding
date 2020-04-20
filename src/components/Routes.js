import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Items from "./items";

export default () => (
  <Router>
    <Header />
    <Route path="/"/>
    <Route path="/items" component={Items} />
  </Router>
);
