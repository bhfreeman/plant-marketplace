import React from "react";




const LoginForm=(props)=>{
  return (
    <section className= "container-flex">
      <div className= "columns">
        <div className= "column" style= {{textAlign: "center"}}>
      <div className="field">
        <h1 style= {{fontSize: "20px" }}>Login Here</h1>
        <p className="control has-icons-left has-icons-righ">
          <input className="input"
          style={{width: "50%", margin: "5px"}} 
          value={props.userName}
          onChange={props.handleInputChange}
          type="userName" 
          placeholder="Username" />
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" 
          style={{width: "50%", margin: "5px"}} 
          type="password"
          value= {props.password}
          onChange={props.handleInputChange} 
          placeholder="Password" />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button"
          style= {{background: "#8c9e5e", margin: "5px"}}
          onClick= {props.handleFormSubmit}
          >
            Welcome back
            </button>
        </p>
      </div>
      </div>
      </div>
    </section>
  );
}

export default LoginForm;
