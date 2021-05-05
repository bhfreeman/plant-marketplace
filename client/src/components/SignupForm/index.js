import React from "react";
import states from '../../utils/states.json'

// will need styling with spacing.
function SignUpForm({ newUser, setNewUser, handleSignup }) {
  return (
    <div>
      <h1 style={{ fontSize: "18px" }}> Signup Form</h1>
      <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="Name"
        value = {newUser.name}
        onChange = {e => setNewUser({...newUser, name: e.target.value})}
      />
      

      <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="UserName"
        value = {newUser.username}
        onChange = {e => setNewUser({...newUser, username: e.target.value})}
      />

      <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="email"
        value = {newUser.email}
        onChange = {e => setNewUser({...newUser, email: e.target.value})}
      />

      <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="Password"
        value = {newUser.password}
        onChange = {e => setNewUser({...newUser, password: e.target.value})}
      />

      <input
        className="input is-success"
        type="text"
        style={{ width: "50%" }}
        placeholder="City"
        value = {newUser.city}
        onChange = {e => setNewUser({...newUser, city: e.target.value})}
      />
      <div className="select is-success">

      <select className="is-hovered" onChange={e => setNewUser({...newUser, state: e.target.value})}>
          <option>State</option>
          {states.map((state,i) =>{
              return <option key={i} value={state.name}>{state.name}</option>
            })}

      </select>
            </div>
      <button
        className="button is-success"
        style={{  }}
        onClick={handleSignup}
      >Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;

//  style= {{ width: "50%"}} to constain the input form
