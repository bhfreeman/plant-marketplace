import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchLocationForm from "../components/SearchLocationForm";
import SearchByPlant from "../components/SearchByPlant";
import BaseSalesPost from "../components/BaseSalesPost";
import background from "../images/background.png";

function SearchPage({ user }) {
  //state that stores user posts in order to map over BaseSalesPost
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPlantType, setSearchPlantType] = useState("all");
  const [searchByState, setSearchByState] = useState("all");
  const [searchByCity, setSearchByCity] = useState("");

  const getUserPosts = async () => {
    try {
      let response = await API.getPosts();
      await setPosts(response.data, ...posts);
    } catch (error) {
      return console.error(error);
    }
  };

  // console.log(posts[0]?.user[0].state)
  useEffect(() => {
    getUserPosts();
  }, []);

  const filteredPlantName = posts.filter((plantName) => {
    if(searchByCity !== ""){
      return plantName.user[0].city.toLowerCase().includes(searchByCity.toLowerCase())
    }
    if (searchByState !== "all") {
      return plantName.user[0].state.includes(searchByState);
    }
    if (searchPlantType === "all") {
      return plantName.plant_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    }
    if (searchPlantType !== "all") {
      return plantName.plant_type?.includes(searchPlantType);
    }
  });

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByCityInputChange = (e) => {
    console.log(e.target.value)
    setSearchByCity(e.target.value);
  };

  const sortByPlant = (e) => {
    setSearchPlantType(e.target.value);
  };

  const sortByState = (e) => {
    setSearchByState(e.target.value);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="search-page columns" style={{ margin: "20px 5px" }}>
        <div className="search-field column is-one-third">
          {/* Separate divs so we can fit the search field and the searched-posts side by side */}
          <div className="search-input">
            <SearchLocationForm sortByState={sortByState} handleSearchByCityInputChange={handleSearchByCityInputChange}
            value={searchByCity}/>
            <SearchByPlant
              value={searchTerm}
              handleInputChange={handleInputChange}
              sortByPlant={sortByPlant}
            />
          </div>
        </div>

        <div className="searched-posts column is-two-thirds is-5 is-flex is-flex-wrap-wrap is-justify-content-space-around">
          {filteredPlantName
            .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
            .map((item) => (
              <BaseSalesPost key={item._id} plant={item} className="card" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
