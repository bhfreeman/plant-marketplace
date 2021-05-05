import React from "react";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";

function Nav({ loggedIn }) {
  // const [store] = useStoreContext();
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }
  return (
    <nav
      className="navbar"
      style={{ background: "#caa677" }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          style={{ fontSize: "30px", color: "black" }}
          className="navbar-item"
        >
          Repotted
        </Link>
        {/* <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/about"
            className="navbar-item"
            style={{ color: "black", fontSize: "18px" }}
            onClick={toggleBurgerMenu}
          >
            About
          </Link>
          <Link
            to="/search"
            className="navbar-item"
            style={{ color: "black", fontSize: "18px" }}
            onClick={toggleBurgerMenu}
          >
            Browse Plants
          </Link>

          {!loggedIn && (
            <Link
              to="/login-signup"
              style={{ color: "black", fontSize: "18px" }}
              className="navbar-item"
              onClick={toggleBurgerMenu}
            >
              Login/Signup
            </Link>
          )}

          {/* <Link to="/login-signup" className="navbar-item" 
          style={{ color: "black" , fontSize: "18px" }}onClick={toggleBurgerMenu}>
          Signup
          </Link> */}
          <Link
            to="/contact"
            style={{ color: "black", fontSize: "18px" }}
            className="navbar-item"
          >
            Contact
          </Link>
        </div>
        {loggedIn && (
          <div className="navbar-end">
            <button className="navbar-item">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
