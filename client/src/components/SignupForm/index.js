import React from 'react'
// will need styling with spacing. 
function SignUpForm() {
    return (
        <div>
        <h1 style={{fontSize: "18px"}}> Signup Form</h1>
   <input class="input is-success" 
   type="text" placeholder="Name"/>
   <input class="input is-success" 
   type="text" placeholder="UserName"/>
   <input class="input is-success" 
   type="text" placeholder="email"/>
   <input class="input is-success" 
   type="text" placeholder="Password"/>
   <input class="input is-success" 
   type="text" placeholder="City"/>
  <button class="button is-success">Success</button>
        </div>
    )
}

export default SignUpForm; 
