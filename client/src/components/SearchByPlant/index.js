import React from "react";
// there will need to be some functionality for the plants in the dropdown menu... not totally done
function SearchByPlant() {
  return (
    <section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar">
          <a class="navbar-item">
            <strong>Search by plant</strong>
          </a>
          <p class="subtitle is-5 text-center" />
          <div class="field has-addons">
            <p class="control" />
            <input class="input" type="text" placeholder="Find a plant" />
            <p class="control">
              <button class="button is-primary">Search</button>
            </p>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Plants</a>
            <div class="navbar-dropdown">
              <a class="navbar-item"></a>
              <a class="navbar-item">Flowering Plants</a>
              <a class="navbar-item">Foliage Type</a>
              <a class="navbar-item">Succulents and Cacti</a>
              <a class="navbar-item">Vegetables</a>
              <a class="navbar-item">Seeds</a> 
              <a class="navbar-item">Trees</a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SearchByPlant;
