import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  // const [store] = useStoreContext();

  return (
    <nav className="navbar my-navbar">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="my-navbar-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="my-navbar-menu" className="navbar-menu">
        <div className="navbar-start">
          <div className="buttons">
            <a className="button is-primary">
                  <strong>Log in</strong>
            </a>
            <a class="button is-light">
                  <strong>View account</strong>
            </a>

            <div id="my-navbar-center" className= "navbar-center">
            <a className="navbar-item"href="/" >
            <h1 className ="title is-2">RePotted</h1>     
           </a>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a href="#">Home</a>
        </div>
      </div>
      </div>
    
    </nav>

  );
}

export default Nav;
