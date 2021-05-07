import React from "react";

// added a photo to hero,  added a fading effect for the text. houseplants emphasis.
// need help with file path!

function Hero() {
  return (
    <div className="container-flex">
      <section className="hero">
        <div
          className="hero-body"
          style={{ width: "100%",
           padding: 0, margin: "0%",
            position:"relative" }}
        >

          {/* @ToDo work on gradient. Get background image size to fit a larger monitor */}
          <figure
            className="background image"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,1,10),rgba(0,0,0,0.5))",

              backgroundPosition: "center",
              backgroundRepeat: "noRepeat",
              backgroundSize: "cover",
              width: "100%",
              display: "flex",
              // height: "95vh",
            }}
          >
            <img src="/images/hero.jpg" alt="cactus on dark background" />
          </figure>

          <div>
            <h1
              className="title"
              style={{
                textAlign: "center",
                fontSize: "55px",
                color: "#f5f5f5",
                position: "absolute",
                top: "50%",
                left: "28%",
                transform:"translate(-10px, -40px)"
              }}
            >
              Repotted
            </h1>
            <h2
              className="subtitle"
              style={{
                color: "#f5f5f5",
                textAlign: "center",
                top: "70%",
                left: "20%",
                position: "absolute",
              }}
            >
              Welcome to a plant marketplace
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

// style={{minHeight: "200px",
//     height: "60vw",
//     maxHeight: "500px"}}
