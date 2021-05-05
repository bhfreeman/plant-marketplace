import React from "react";
import Hero from "../components/Hero";
import HomePagePosts from "../components/HomePagePosts";
import HomePageLogin from "../components/HomePageLogin";
import exampleData from "../examples.json";

function LandingPg() {
  return (
    <div>
      <Hero />
      {/* map over the example data to create multiple example posts, pass in each item in the example data as props. */}
      <div className="home-page columns">
        <div className="home-page-posts column is-half is-5"
        style={{borderRight:"solid", margin:"50px"}}>
        {exampleData.map((item) => (
          <HomePagePosts key={item.id} {...item}  className="card columns "/>
        ))}

        </div>
        <div className="column is-half">

        <HomePageLogin />
        </div>
      </div>
    </div>
  );
}

export default LandingPg;
