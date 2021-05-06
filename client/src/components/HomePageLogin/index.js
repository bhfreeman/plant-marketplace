import React from "react";
import { Link } from "react-router-dom";

//we need to add bulma react as a dependency
const HomePageLogin = (props) => {
  return (
    <section
      className="container-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        margin: "20px",
        padding:"1rem",
      }}
    >

        <div className=" text">
          <h1
            className="title"
            style={{ fontSize: "30px", textAlign: "center" }}
          >
            {" "}
            Join Repotted
          </h1>
          <h1 style={{ textAlign: "center", fontSize:"24px" }}>
            Buy
          </h1>
          <br></br>
          <h1  style={{ textAlign: "center", fontSize:"23px"}}>
            Sell
          </h1>
          <br></br>
          <h1 style={{ textAlign: "center", fontSize:"22px"}}>
            Any variety of plants
          </h1>
          <br></br>
          <p style={{ textAlign: "center", fontSize:"18px"}}>
            Coming soon...Community conversations
          </p>
          <br></br>
        </div>
        <div style= {{border: "1px black dashed", 
        height: "95px",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        
        }}>
        {/* how to change the color of the button as a class not in bulma */}
        <Link
          to="/login-signup"
          style={{
            backgroundColor: "#8c9e5e",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
          className="button"
          // onChange={props.handleInputChange}
          // value={props.loginSignup}
        >
          Login/Signup
        </Link>
        <div style= {{margin: "5px"}}></div>
        <Link className= "is-align-content-center"
          to="/search"
          style={{
            backgroundColor: "#8c9e5e",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          className="button"
          // onChange={props.handleInputChange}
          // value={props.browse}
        >
          Browse
        </Link>
        </div>
    </section>
  );
};

export default HomePageLogin;
