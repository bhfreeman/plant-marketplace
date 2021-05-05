import React from "react";




const LoginForm=({email, password, setEmail, setPassword, handleLogin})=>{
  return (
    <section>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email" 
          placeholder="email" />
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" 
          type="password"
          value= {password}
          onChange={e=> setPassword(e.target.value)} 
          placeholder="Password" />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success is-inverted"
          onClick= {handleLogin}
          >
            Login
            </button>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
