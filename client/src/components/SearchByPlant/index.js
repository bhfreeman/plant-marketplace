import React from "react";
// there will need to be some functionality for the plants in the dropdown menu... not totally done
function SearchByPlant({value, handleInputChange}) {
  return (
    <section className= "container-flex">
      <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar">
          <span className="navbar-item">
            <strong>Search by Plant</strong>
          </span>
          <p className="subtitle is-5 text-center" />
          <div className="field has-addons">
            <p className="control" />
            <input className="input" type="text" 
             style= {{ width: "90%"}}
            placeholder="Find a plant"
            value={value}
            onChange={handleInputChange}
            />
            <p className="control">
              <button className="button is-primary"
              style={{backgroundColor: "#8c9e5e",
              color: "white", margin:"5px", borderRadius: "5px"}}
              >Search</button>
            </p>
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
          <div className="select is-dark" style={{margin: "5px"}}>
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
      </div>
    </section>
  );
}

export default SearchByPlant;
