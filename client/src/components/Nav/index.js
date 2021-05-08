import React from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
// import { useStoreContext } from "../../utils/GlobalState";

function Nav({ loggedIn, setLoggedin, userId, setUserId }) {
  // const [store] = useStoreContext();
  const history = useHistory();

  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }

  async function handleLogout() {
    try {
      await API.logout();
      await setUserId("");
      await setLoggedin(false);
      history.push("/");
    } catch (err) {}
  }
  return (
    <nav
      className="navbar"
      style={{ background: "#caa677" }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <img src="./images/logo.png" alt= "logo of hands holding a potted plant"style= {{width:40, height: 45}}></img>
        <Link
          to="/"
          style={{ fontSize: "30px", color: "black" }}
          className="navbar-item"
        >
          Repotted
        </Link>
        <a
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
        </a>
      </div>
      <div id="navbarBasic" className="navbar-menu">
        <div className="navbar-start">
          
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
          {loggedIn && (
            <Link
              to="/account-page"
              style={{ color: "black", fontSize: "18px" }}
              className="navbar-item"
              onClick={toggleBurgerMenu}
            >
              Account Page
            </Link>
          )}

          {/* <Link to="/login-signup" className="navbar-item" 
          style={{ color: "black" , fontSize: "18px" }}onClick={toggleBurgerMenu}>
          Signup
          </Link> */}
          
        </div>
        {loggedIn && (
          <div className="navbar-end">
            <button className="navbar-item" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
