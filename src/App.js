import React, { useState } from "react";
import Home from "./containers/Home/Home";
import Calculations from "./containers/Calculations/Calculations";
import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  const [num, updateNum] = useState(null);

  return (
    <Router>
      <div>
        <Header />
        <Route
          path="/"
          exact
          render={() => <Home setTest={(num) => updateNum(num)} />}
        />
        <Route path="/calculations" render={() => <Calculations num={num} />} />
      </div>
    </Router>
  );
}
