import React from 'react'
// will need styling with spacing. 
function SignUpForm() {
    return (
        <div>
        <h1 style={{fontSize: "18px"}}> Signup Form</h1>
   <input className=
   "input is-success" 
   type="text" 
   style= {{ width: "50%"}}
   placeholder="Name"/>

   <input className="input is-success" 
   type="text" 
   style= {{ width: "50%"}}
   placeholder="UserName"/>

   <input className="input is-success" 
   type="text" 
   style= {{ width: "50%"}}
   placeholder="email"/>

   <input className="input is-success" 
   type="text" 
   style= {{ width: "50%"}}
   placeholder="Password"/>

   <input className="input is-success" 
   type="text"
   style= {{ width: "50%"}}
    placeholder="City"/>

  <button className="button is-success"
  style={{position:"absolute",
  top: "10px",
  left:10}}
  >Success</button>
        </div>
    )
}

export default SignUpForm; 

//  style= {{ width: "50%"}} to constain the input form