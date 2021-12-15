import React from "react";
import "../style/style.css";
import icon from "../assets/img/react-icon-small.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={icon} alt="icon" className="nav--icon"/>
      <h3 className="nav--icon_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;