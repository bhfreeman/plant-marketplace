import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  // const [store] = useStoreContext();

  return (
    //name of App needs to go to center!
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="#"></a>
           <h1 class= "title is-2 has-text-dark">Repotted</h1>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
      
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item"></a>
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
