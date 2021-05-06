import React from 'react'
// will need styling with spacing. 
function SignUpForm() {
    return (
        <section className= "container-flex">
        <div className= "is-justify-content-center">
       <bold><h1 style={{fontSize: "18px"}}> Signup Form</h1></bold> 
   <input className=
   "input is-success" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Name"/>

   <input className="input is-success" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Username"/>

   <input className="input is-success" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="email"/>

   <input className="input is-success" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Password"/>

   <input className="input is-success" 
   type="text"
   style= {{ width: "50%", margin: "5px"}}
    placeholder="City"/>

  <button className="button">Welcome!</button>
    </div>
    </section>
    )
}

export default SignUpForm; 

//  style= {{ width: "50%"}} to constain the input form