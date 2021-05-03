import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  // const [store] = useStoreContext();

  return (
    //name of App needs to go to center!
    <nav class="navbar is-transparent">
        <a class="navbar-item" href="#"></a>
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"></a>
          <h1 class="title"style ={{fontSize: "30px", color: "black"}}>Repotted</h1>
          <div className="buttons">
            <a className="button is-success">
              <strong>Log in</strong>
            </a>
            <a class="button is-success">
              <strong>View account</strong>
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          {/* <div class="field is-grouped"> */}
          <p class="control">
            <div className="navbar-end">
              <div className="navbar-item">
                <a href="#">Home</a>
              </div>
            </div>
          </p>
        </div>
      </div>
    </nav>

  );
}

export default Nav;
