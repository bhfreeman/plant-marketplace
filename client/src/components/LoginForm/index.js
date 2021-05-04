import React from "react";




const LoginForm=(props)=>{
  return (
    <section>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" 
          value={props.userName}
          onChange={props.handleInputChange}
          type="userName" 
          placeholder="userName" />
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" 
          type="password"
          value= {props.password}
          onChange={props.handleInputChange} 
          placeholder="Password" />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success is-inverted"
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
