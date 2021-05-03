import React from "react";
import Hero from "../components/Hero";
import HomePagePosts from "../components/HomePagePosts";
import HomePageLogin from "../components/HomePageLogin";

function LandingPg() {
  return (
    <div>
      <Hero />
      <div className="home-page">
        <HomePagePosts />
        <HomePageLogin />
      </div>
    </div>
  );
}

export default LandingPg;
