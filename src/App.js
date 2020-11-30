import React from "react";
import Home from "./containers/Home/Home";
import Calculations from "./containers/Calculations/Calculations";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div>
        <Header />
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route 
          path="/calculations" 
          component={Calculations}/>
      </div>
    </Router>
  );
}
