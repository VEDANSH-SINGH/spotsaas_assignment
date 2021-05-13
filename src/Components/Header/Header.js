import React from "react";
import "./Header.css";
import logo from "../../Images/header__logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} className="logo__img" alt="header__logo"></img>
      </div>
      <div className="header__items">
        <span className="header__item">Home</span>
        <span className="header__item">About</span>
        <span className="header__item">Contact</span>
        <span className="header__item">Search</span>
      </div>
    </div>
  );
}

export default Header;
