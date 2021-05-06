import React, { useState, useEffect } from "react";
import API from "../utils/API"
import SearchLocationForm from "../components/SearchLocationForm";
import SearchByPlant from "../components/SearchByPlant";
import BaseSalesPost from "../components/BaseSalesPost";

function SearchPage() {

  //state that stores user posts in order to map over BaseSalesPost
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const getUserPosts = async () => {
    try {
      let response = await API.getPosts();

      return setPosts(response.data, ...posts)

    }catch (error){
      return console.error(error);    
    }
  }

  // do we get users to then link to the post? Or would that be saved in the post DB?
  const getUsers = async () => {
    
  }


  console.log(posts)
  useEffect(() => {
    getUserPosts()
  }, []);

  return (
    <div className= "search-page columns">
      <div className="search-field column is-one-third">
        {/* Separate divs so we can fit the search field and the searched-posts side by side */}
        <div className="search-input">
          <SearchLocationForm />
          <SearchByPlant />
        </div>
      </div>

      <div className="searched-posts column is-two-thirds">
      {posts.map((item) => (
            <BaseSalesPost key={item._id} {...item} className="card  " />
          ))}
        
      </div>

    </div>
  );
}

export default SearchPage;
