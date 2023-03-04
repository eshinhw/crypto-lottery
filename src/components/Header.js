import React from "react";
import "../css/Header.css";
import headerImg from "../assets/bingo.png";
import wallet from "../assets/wallet.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={headerImg} />
          <div className="logo__text">
            <p>Dottery</p>
            <p style={{fontSize: "30px"}}>Play with Your Crypto!</p>
          </div>

          <img src={headerImg} />
        </div>
      </div>
      {/* <img className="wallet" src={wallet} /> */}
    </>
  );
}

export default Header;
