import React from "react";
import SearchLocationForm from "../components/SearchLocationForm";
import SearchByPlant from "../components/SearchByPlant";
import BaseSalesPost from "../components/BaseSalesPost";

function SearchPage() {
  return (
    <div className="search-field">
      {/* Separate divs so we can fit the search field and the searched-posts side by side */}

      <div className="search-input">
        <SearchLocationForm />
        <SearchByPlant />
      </div>
      <div className="searched-posts">
        <BaseSalesPost />
      </div>


    </div>
  );
}

export default SearchPage;
