import React from "react";

function SearchLocationForm() {
  return (
    <section className= "container-flex">
      <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar">
          <p className="navbar-item">
            <strong>Search by Location</strong>
          </p>
          <p className="subtitle is-5 text-center" />
          <div className="field has-addons">
            <p className="control" />
            <input className="input" type="text"
             style= {{ width: "90%"}}
             placeholder="Enter your city" />
            <p className="control">
              <button className="button" style= {{backgroundColor: "#8c9e5e",
            color: "white",margin:"5px", borderRadius: "5px"}}>Search</button>
            </p>
          </div>
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">State</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">Alabama</a>
              <a className="navbar-item">Alaska</a>
              <a className="navbar-item">Arizona</a>
              <a className="navbar-item">Arkansas</a>
              <a className="navbar-item">Arizona</a>
              <a className="navbar-item">Arkansas</a>
              <a className="navbar-item">Califonia</a>
              <a className="navbar-item">Colorado</a>
              <a className="navbar-item">Connecticut</a>
              <a className="navbar-item">Delaware</a>
              <a className="navbar-item">Florida</a>
              <a className="navbar-item">Georgia</a>
              <a className="navbar-item">Hawaii</a>
              <a className="navbar-item">Idaho</a>
              <a className="navbar-item">Illinois</a>
              <a className="navbar-item">Indiana</a>
              <a className="navbar-item">Iowa</a>
              <a className="navbar-item">Kansas</a>
              <a className="navbar-item">Kentucky</a>
              <a className="navbar-item">Louisiana</a>
              <a className="navbar-item">Maine</a>
              <a className="navbar-item">Maryland</a>
              <a className="navbar-item">Massachusetts</a>
              <a className="navbar-item">Michigan</a>
              <a className="navbar-item">Minnesota</a>
              <a className="navbar-item">Mississippi</a>
              <a className="navbar-item">Missouri</a>
              <a className="navbar-item">Montana</a>
              <a className="navbar-item">Nebraska</a>
              <a className="navbar-item">Nevada</a>
              <a className="navbar-item">New Hampshire</a>
              <a className="navbar-item">New Jersey</a>
              <a className="navbar-item">New Mexico</a>
              <a className="navbar-item">New York</a>
              <a className="navbar-item">North Carolina</a>
              <a className="navbar-item">North Dakota</a>
              <a className="navbar-item">Ohio</a>
              <a className="navbar-item">Oklahoma</a>
              <a className="navbar-item">Oregon</a>
              <a className="navbar-item">Pennsylvania</a>
              <a className="navbar-item">Rhode Island</a>
              <a className="navbar-item">South Carolina</a>
              <a className="navbar-item">South Dakota</a>
              <a className="navbar-item">Tennessee</a>
              <a className="navbar-item">Texas</a>
              <a className="navbar-item">Utah</a>
              <a className="navbar-item">Vermont</a>
              <a className="navbar-item">Virginia</a>
              <a className="navbar-item">Washington</a>
              <a className="navbar-item">West Virginia</a>
              <a className="navbar-item">Wisconsin</a>
              <a className="navbar-item">Wyoming</a>

            </div>
          </div> */}
          <div className="select is-dark">
            <select className="is-hovered">
            <option  >Alabama</option>
              <option  >Alaska</option>
              <option  >Arizona</option>
              <option  >Arkansas</option>
              <option  >Arizona</option>
              <option  >Arkansas</option>
              <option  >Califonia</option>
              <option  >Colorado</option>
              <option  >Connecticut</option>
              <option  >Delaware</option>
              <option  >Florida</option>
              <option  >Georgia</option>
              <option  >Hawaii</option>
              <option  >Idaho</option>
              <option  >Illinois</option>
              <option  >Indiana</option>
              <option  >Iowa</option>
              <option  >Kansas</option>
              <option  >Kentucky</option>
              <option  >Louisiana</option>
              <option  >Maine</option>
              <option  >Maryland</option>
              <option  >Massachusetts</option>
              <option  >Michigan</option>
              <option  >Minnesota</option>
              <option  >Mississippi</option>
              <option  >Missouri</option>
              <option  >Montana</option>
              <option  >Nebraska</option>
              <option  >Nevada</option>
              <option  >New Hampshire</option>
              <option  >New Jersey</option>
              <option  >New Mexico</option>
              <option  >New York</option>
              <option  >North Carolina</option>
              <option  >North Dakota</option>
              <option  >Ohio</option>
              <option  >Oklahoma</option>
              <option  >Oregon</option>
              <option  >Pennsylvania</option>
              <option  >Rhode Island</option>
              <option  >South Carolina</option>
              <option  >South Dakota</option>
              <option  >Tennessee</option>
              <option  >Texas</option>
              <option  >Utah</option>
              <option  >Vermont</option>
              <option  >Virginia</option>
              <option  >Washington</option>
              <option  >West Virginia</option>
              <option  >Wisconsin</option>
              <option  >Wyoming</option>
            </select>
          </div>
        </div>
      </nav>
      </div>
    </section>
  );
}

export default SearchLocationForm;
