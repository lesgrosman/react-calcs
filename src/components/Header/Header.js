import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import "./Header.css";

function Header(props) {
  let activeHome = "",
      activeCalc = "";

  if (props.path === "/calculations") {
    activeCalc = "activeCalc";
  } else {
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

const mapStateToProps = (state) => {
  return {
    path: state.path
  }
}

export default connect(mapStateToProps, null)(Header)
