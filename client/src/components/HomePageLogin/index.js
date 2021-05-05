import React from "react";
import { Link} from 'react-router-dom'

//we need to add bulma react as a dependency
const  HomePageLogin=(props)=>{
  return (
    <section className="container-flex is-justify-content-center" style= {{border: "2px solid black", marginTop: "20px", position: "relative",
    margin: "20px"}}>
      <div>
        <div className=" text">
          <h1 className="title" style={{fontSize: "30px", textAlign: "center"}}> Join rePOTTED</h1>
          <h1 className="is-size-4"style={{textAlign: "center"}}>Buy</h1>
          <h1 className="is-size-4"style={{textAlign: "center"}}>Sell</h1>
          <h1 className="is-size-4"style={{textAlign: "center"}}>Any variety of plants</h1>
          <p className="is-size-5"style={{textAlign: "center"}}>Coming soon...Community conversations</p>
        </div>
        <div
          style={{
            left: "50%",
            top: "50%",
            width: "300px",
            border: "2px solid green",
            padding: "50px",
            textAlign: "center",
          
           
          }}
        >
        {/* how to change the color of the button as a class not in bulma */}
          <Link to="/login-signup" 
           style= {{margin: "10px"}}className="button is-success"
          // onChange={props.handleInputChange}
          // value={props.loginSignup}
          >Login/Signup
            </Link>
              <Link to="/search"
              style= {{margin: "10px"}} className="button is-success"
              // onChange={props.handleInputChange}
              // value={props.browse}
              >Browse</Link>
            </div>
          </div>
    </section>
  );
}

export default HomePageLogin;
