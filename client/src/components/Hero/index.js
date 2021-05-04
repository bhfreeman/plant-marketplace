import React from "react";

// added a photo to hero,  added a fading effect for the text. houseplants emphasis.
// need help with file path!



function Hero() {
  return (
    <div class="container-flex">
    <section class="hero">
    <div class="hero-body" style={{ width:"100%",  
       height: "75%", padding: 0, margin: "0%" }}>
    
      <figure class= "background image" style= {{backgroundImage: "linear-gradient(rgba(0,0,1,10),rgba(0,0,0,0.5))",  
       backgroundPosition: "center", 
       backgroundRepeat: "noRepeat",
       backgroundSize: "cover",
       width:"100",   
       display:"flex" }}>
        <img src= "/images/hero.jpg" 
        alt= "cactus on dark background"/>
        </figure>
        <h1 class="title" style= {{textAlign: "center", fontSize: "55px", color:"#f5f5f5",  
      position:"absolute", 
    top: "50%",
    left: "30%",}}>
       Repotted
      </h1>
      <h2 class="subtitle"style= {{color: "#f5f5f5", textAlign: "center", top: "70%",
    left: "20%",   position:"absolute", 
   }}>
       Welcome to a plant marketplace
      </h2>
    </div>
  </section>
  </div>
  );
}

export default Hero;

