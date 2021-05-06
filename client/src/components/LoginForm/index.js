import React from "react";




const LoginForm=(props)=>{
  return (
    <section>
      <div className="field">
        <h1>Login Here</h1>
        <p className="control has-icons-left has-icons-right">
          <input className="input"
          style={{width: "50%", margin: "5px"}} 
          value={props.userName}
          onChange={props.handleInputChange}
          type="userName" 
          placeholder="username" />
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
          onClick= {props.handleFormSubmit}
          >
            Login
            </button>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
