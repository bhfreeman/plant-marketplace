// import React from 'react'
// // will need styling with spacing. 
// function SignUpForm() {
//     return (
//         <section className= "container-flex">
//         <div className= "columns">
//         <div className= "column" style= {{textAlign: "center"}}>
//       <h1 style={{fontSize: "20px"}}> Signup Form</h1>
//    <input className=
//    "input" 
//    type="text" 
//    style= {{ width: "50%", margin: "5px"}}
//    placeholder="Name"/>

//    <input className="input" 
//    type="text" 
//    style= {{ width: "50%", margin: "5px"}}
//    placeholder="Username"/>

//    <input className="input" 
//    type="text" 
//    style= {{ width: "50%", margin: "5px"}}
//    placeholder="Email"/>

//    <input className="input" 
//    type="text" 
//    style= {{ width: "50%", margin: "5px"}}
//    placeholder="Password"/>

//    <input className="input" 
//    type="text"
//    style= {{ width: "50%", margin: "5px"}}
//     placeholder="City"/>
//   <div className= "field">
//     <p className= "control">
//   <button className="button"
//     style= {{background: "#8c9e5e", margin: "5px"}}
//           >
//           Hello
     
//     </button>
//     </p>
//     </div>
//     </div>
//     </div>
//     </section>
//     )
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
