import React from 'react'
// will need styling with spacing. 
function SignUpForm() {
    return (
        <div>
        <h1 style={{fontSize: "18px"}}> Signup Form</h1>
   <input className="input is-success" 
   type="text" placeholder="Name"/>
   <input className="input is-success" 
   type="text" placeholder="UserName"/>
   <input className="input is-success" 
   type="text" placeholder="email"/>
   <input className="input is-success" 
   type="text" placeholder="Password"/>
   <input className="input is-success" 
   type="text" placeholder="City"/>
  <button className="button is-success">Success</button>
        </div>
    )
}

export default SignUpForm; 
