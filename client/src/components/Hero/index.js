import React from "react";

// added a photo to hero,  added a fading effect for the text. houseplants emphasis.
// need help with file path!



function Hero() {
  return (
    <div class="container">
    <section class="hero">
    <div class="hero-body">
      <figure class= "background image" style= {{backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.5))",  
       backgroundPosition: "center", 
       backgroundRepeat: "noRepeat",
       backgroundSize: "cover",  
       height: "80%", 
       display:"flex" }}>
        <img src= "/Users/emilydobson/bootcamp/homework/plant-marketplace/client/src/images/hero.jpg" 
        alt= "cactus on dark background"/>
        </figure>
      <h1 class="title has-text-white" style= {{textAlign: "center", fontSize: "40px"}}>
       Repotted
      </h1>
      <h2 class="subtitle has-text-white">
       Welcome to a plant marketplace
      </h2>
    </div>
  </section>
  </div>
  );
}

export default Hero;

