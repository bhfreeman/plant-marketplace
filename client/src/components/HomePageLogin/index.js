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
          <h1 className="is-size-4" style={{ textAlign: "center" }}>
            Buy
          </h1>
          <h1 className="is-size-4" style={{ textAlign: "center" }}>
            Sell
          </h1>
          <h1 className="is-size-4" style={{ textAlign: "center" }}>
            Any variety of plants
          </h1>
          <p className="is-size-5" style={{ textAlign: "center" }}>
            Coming soon...Community conversations
          </p>
        </div>
        <div style= {{border: "1px solid", 
        height: "100px",
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
