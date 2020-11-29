import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  let activeHome = "",
    activeCalc = "";

  if (window.location.pathname === "/calculations") {
    activeCalc = "activeCalc";
  } else if (window.location.pathname !== "/calculations") {
    activeHome = "activeHome";
  }
  return (
    <div className="Header">
      <Link to="/">
        {" "}
        <h1 id={activeHome}>HOME</h1>{" "}
      </Link>
      <h1 id={activeCalc}>CALCULATIONS</h1>
    </div>
  );
}
