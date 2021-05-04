import React from "react";
// there will need to be some functionality for the plants in the dropdown menu... not totally done
function SearchByPlant() {
  return (
    <section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar">
          <span class="navbar-item">
            <strong>Search by plant</strong>
          </span>
          <p class="subtitle is-5 text-center" />
          <div class="field has-addons">
            <p class="control" />
            <input class="input" type="text" placeholder="Find a plant" />
            <p class="control">
              <button class="button is-primary">Search</button>
            </p>
          </div>
          {/* <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Plants</a>
            <div class="navbar-dropdown">
              <ul>
              <li class="navbar-item"></li>
              <li class="navbar-item">Flowering Plants</li>
              <li class="navbar-item">Foliage Type</li>
              <li class="navbar-item">Succulents and Cacti</li>
              <li class="navbar-item">Vegetables</li>
              <li class="navbar-item">Seeds</li> 
              <li class="navbar-item">Trees</li>
              </ul>
            </div>
          </div> */}
          <div className="select is-primary">
            <select className="is-hovered" name="Plants">
              <option>Select Plant Type</option>
              <option >Flowering Plants</option>
              <option >Foliage Type</option>
              <option >Succulents and Cacti</option>
              <option >Vegetables</option>
              <option >Seeds</option> 
              <option >Trees</option>
            </select>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SearchByPlant;
