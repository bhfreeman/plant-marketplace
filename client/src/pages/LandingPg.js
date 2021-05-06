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
      <h1
        className="title is-size-3"
        style={{ marginTop: "20px", width: "50vmax", textAlign: "center" }}
      >
        {" "}
        Recent Posts
      </h1>
      <div className="home-page columns">
        <div
          className="home-page-posts column is-half is-5 is-flex is-flex-wrap-wrap is-justify-content-space-around"
          style={{ borderRight: "solid", margin: "15px 50px" }}
        >
          {exampleData.map((item) => (
            <HomePagePosts key={item.id} {...item} className="card  " />
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
