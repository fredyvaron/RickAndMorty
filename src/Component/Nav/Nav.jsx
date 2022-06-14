import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search_chacter } from "../../redux/action";
import logo from "../../Img/Logo.png";

function Nav() {
  return (
    <div className="container mt-4">
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container mx-auto">
          <a className="navbar-brand" href="#">
            <img src={logo} style={{ width: "100px" }} alt="Rick And Morty" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav  ">
              <li className="nav-item px-2">
                <a className="nav-link" style={{fontSize:"20px", fontWeight:"500"}} href="/">
                  Home
                </a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link" style={{fontSize:"20px", fontWeight:"500"}} href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
