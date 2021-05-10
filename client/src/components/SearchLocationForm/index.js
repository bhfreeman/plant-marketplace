import React from "react";

function SearchLocationForm({sortByState, handleSearchByCityInputChange, value}) {
  return (
    <section className= "container-flex">
      <div>
      <nav className="" role= "navigation" aria-label="main-navigation">
        <div className="">
          <p className="subtitle is-5">
            <strong>Search by Location</strong>
          </p>
          <div className="field has-addons">
            <p className="control" />
            <input className="input" type="text"
             style= {{ width: "70%"}}
             onChange={handleSearchByCityInputChange}
             value={value}
             placeholder="Enter your City" />
            <p className="control">
              <button className="button" style= {{backgroundColor: "#8c9e5e",
            color: "white",margin:"2.5px", borderRadius: "5px"}}>Search</button>
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
            <select className="is-hovered"onChange={sortByState} >
              <option value="all" >Select State</option>
              <option value="AL" >Alabama</option>
              <option value="AK" >Alaska</option>
              <option value="AS" >American Samoa</option>
              <option value="AZ" >Arizona</option>
              <option value="AR" >Arkansas</option>
              <option value="CA" >Califonia</option>
              <option value="CO" >Colorado</option>
              <option value="CT" >Connecticut</option>
              <option value="DE" >Delaware</option>
              <option value="DC" >District of Columbia</option>
              <option value="FL" >Florida</option>
              <option value="GA" >Georgia</option>
              <option value="HI" >Hawaii</option>
              <option value="ID" >Idaho</option>
              <option value="IL" >Illinois</option>
              <option value="IN" >Indiana</option>
              <option value="IA" >Iowa</option>
              <option value="KS" >Kansas</option>
              <option value="KY" >Kentucky</option>
              <option value="LA" >Louisiana</option>
              <option value="ME" >Maine</option>
              <option value="MD" >Maryland</option>
              <option value="MA" >Massachusetts</option>
              <option value="MI" >Michigan</option>
              <option value="MN" >Minnesota</option>
              <option value="MS" >Mississippi</option>
              <option value="MO" >Missouri</option>
              <option value="MT" >Montana</option>
              <option value="NE" >Nebraska</option>
              <option value="NV" >Nevada</option>
              <option value="NH" >New Hampshire</option>
              <option value="NJ" >New Jersey</option>
              <option value="NM" >New Mexico</option>
              <option value="NY" >New York</option>
              <option value="NC" >North Carolina</option>
              <option value="ND" >North Dakota</option>
              <option value="OH" >Ohio</option>
              <option value="OK" >Oklahoma</option>
              <option value="OR" >Oregon</option>
              <option value="PA" >Pennsylvania</option>
              <option value="RI" >Rhode Island</option>
              <option value="SC" >South Carolina</option>
              <option value="SD" >South Dakota</option>
              <option value="TN" >Tennessee</option>
              <option value="TX" >Texas</option>
              <option value="UT" >Utah</option>
              <option value="VT" >Vermont</option>
              <option value="VA" >Virginia</option>
              <option value="WA" >Washington</option>
              <option value="WV" >West Virginia</option>
              <option value="WI" >Wisconsin</option>
              <option value="WY" >Wyoming</option>
            </select>
          </div>
        </div>
      </nav>
      </div>
    </section>
  );
}

export default SearchLocationForm;
