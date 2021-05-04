import React from "react";

function SearchLocationForm() {
  return (
    <section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar">
          <a class="navbar-item">
            <strong>Search by Location</strong>
          </a>
          <p class="subtitle is-5 text-center" />
          <div class="field has-addons">
            <p class="control" />
            <input class="input" type="text" placeholder="Enter your city" />
            <p class="control">
              <button class="button is-primary">Search</button>
            </p>
          </div>
          {/* <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">State</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Alabama</a>
              <a class="navbar-item">Alaska</a>
              <a class="navbar-item">Arizona</a>
              <a class="navbar-item">Arkansas</a>
              <a class="navbar-item">Arizona</a>
              <a class="navbar-item">Arkansas</a>
              <a class="navbar-item">Califonia</a>
              <a class="navbar-item">Colorado</a>
              <a class="navbar-item">Connecticut</a>
              <a class="navbar-item">Delaware</a>
              <a class="navbar-item">Florida</a>
              <a class="navbar-item">Georgia</a>
              <a class="navbar-item">Hawaii</a>
              <a class="navbar-item">Idaho</a>
              <a class="navbar-item">Illinois</a>
              <a class="navbar-item">Indiana</a>
              <a class="navbar-item">Iowa</a>
              <a class="navbar-item">Kansas</a>
              <a class="navbar-item">Kentucky</a>
              <a class="navbar-item">Louisiana</a>
              <a class="navbar-item">Maine</a>
              <a class="navbar-item">Maryland</a>
              <a class="navbar-item">Massachusetts</a>
              <a class="navbar-item">Michigan</a>
              <a class="navbar-item">Minnesota</a>
              <a class="navbar-item">Mississippi</a>
              <a class="navbar-item">Missouri</a>
              <a class="navbar-item">Montana</a>
              <a class="navbar-item">Nebraska</a>
              <a class="navbar-item">Nevada</a>
              <a class="navbar-item">New Hampshire</a>
              <a class="navbar-item">New Jersey</a>
              <a class="navbar-item">New Mexico</a>
              <a class="navbar-item">New York</a>
              <a class="navbar-item">North Carolina</a>
              <a class="navbar-item">North Dakota</a>
              <a class="navbar-item">Ohio</a>
              <a class="navbar-item">Oklahoma</a>
              <a class="navbar-item">Oregon</a>
              <a class="navbar-item">Pennsylvania</a>
              <a class="navbar-item">Rhode Island</a>
              <a class="navbar-item">South Carolina</a>
              <a class="navbar-item">South Dakota</a>
              <a class="navbar-item">Tennessee</a>
              <a class="navbar-item">Texas</a>
              <a class="navbar-item">Utah</a>
              <a class="navbar-item">Vermont</a>
              <a class="navbar-item">Virginia</a>
              <a class="navbar-item">Washington</a>
              <a class="navbar-item">West Virginia</a>
              <a class="navbar-item">Wisconsin</a>
              <a class="navbar-item">Wyoming</a>

            </div>
          </div> */}
          <div className="select is-success">
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
    </section>
  );
}

export default SearchLocationForm;
