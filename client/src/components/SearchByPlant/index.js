import React from "react";
// there will need to be some functionality for the plants in the dropdown menu... not totally done
function SearchByPlant({ value, handleInputChange, sortByPlant }) {
  return (
    <section className="container-flex">
      <div>
        <nav role="navigation" aria-label="main navigation">
          <div>
            <span className="subtitle is-5">
              <strong>Search by Plant</strong>
            </span>
            <div className="field has-addons">
              <p className="control" />
              <input
                className="input"
                type="text"
                style={{ width: "70%" }}
                placeholder="Find a plant"
                value={value}
                onChange={handleInputChange}
              />

              <p className="control">
                <button
                  className="button is-primary"
                  style={{
                    backgroundColor: "#8c9e5e",
                    color: "white",
                    margin: "2.5px",
                    borderRadius: "5px",
                  }}
                >
                  Search
                </button>
              </p>
            </div>
          </div>
          <div className="select is-dark">
            <select className="is-hovered" name="Plants" onChange={sortByPlant}>
              <option value="all" >
                Select Plant Type
              </option>
              <option value="flowering">Flowering Plants</option>
              <option value="foliage">Foliage Type</option>
              <option value="succulents/cacti">Succulents and Cacti</option>
              <option value="veggie">Vegetables</option>
              <option value="seeds">Seeds</option>
              <option value="trees">Trees</option>
            </select>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default SearchByPlant;
