import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../Img/Logo.png";
import { useNavigate } from "react-router-dom";
import { search_chacter_name } from "../../redux/action";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search1, setSearch1] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search_chacter_name(search1));
    navigate(`/search/`);
    setSearch1("");
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearch1(e.target.value);
  };
  return (
    <div className="container mt-4">
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container ">
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
            <ul className="navbar-nav me-auto ">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ fontSize: "20px", fontWeight: "500" }}
                >
                  About
                </Link>
              </li>
            </ul>
            <form class="d-flex" onSubmit={(e) => handleSubmit(e)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search1}
                onChange={(e) => handleChange(e)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
