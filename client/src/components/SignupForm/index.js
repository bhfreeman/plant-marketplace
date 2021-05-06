import React from 'react'
// will need styling with spacing. 
function SignUpForm() {
    return (
        <section className= "container-flex">
        <div className= "columns">
        <div className= "column" style= {{textAlign: "center"}}>
      <h1 style={{fontSize: "20px"}}> Signup Form</h1>
   <input className=
   "input" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Name"/>

   <input className="input" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Username"/>

   <input className="input" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Email"/>

   <input className="input" 
   type="text" 
   style= {{ width: "50%", margin: "5px"}}
   placeholder="Password"/>

   <input className="input" 
   type="text"
   style= {{ width: "50%", margin: "5px"}}
    placeholder="City"/>
  <div className= "field">
    <p className= "control">
  <button className="button"
    style= {{background: "#8c9e5e", margin: "5px"}}
          >
          Hello
     
    </button>
    </p>
    </div>
    </div>
    </div>
    </section>
    )
}

export default SignUpForm; 

//  style= {{ width: "50%"}} to constain the input form