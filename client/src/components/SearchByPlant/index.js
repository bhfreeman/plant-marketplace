import React from "react";
// there will need to be some functionality for the plants in the dropdown menu... not totally done
function SearchByPlant() {
  return (
    <section className= "container-flex">
      <div>
      <nav role= "navigation" aria-lable= "main navigation">
        <div >
          <span className="subtitle is-5">
            <strong>Search by Plant</strong>
          </span>
          <div className="field has-addons">
            <p className="control" />
            <input className="input" type="text" 
             style= {{ width: "70%"}}
            placeholder="Find a Plant" />
            <p className="control">
              <button className="button is-primary"
              style={{backgroundColor: "#8c9e5e",
              color: "white", margin:"2.5px", borderRadius: "5px"}}
              >Search</button>
            </p>
          </div>
          </div>
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Plants</a>
            <div className="navbar-dropdown">
              <ul>
              <li className="navbar-item"></li>
              <li className="navbar-item">Flowering Plants</li>
              <li className="navbar-item">Foliage Type</li>
              <li className="navbar-item">Succulents and Cacti</li>
              <li className="navbar-item">Vegetables</li>
              <li className="navbar-item">Seeds</li> 
              <li className="navbar-item">Trees</li>
              </ul>
            </div>
          </div> */}
          <div className="select is-dark">
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
      </nav>
      </div>
    </section>
  );
}

export default SearchByPlant;
