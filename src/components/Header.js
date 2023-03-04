import React from "react";
import "../css/Header.css";
import headerImg from "../assets/bingo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={headerImg} />
        <p>Dottery</p>
        <img src={headerImg} />
      </div>
    </div>
  );
}

export default Header;
