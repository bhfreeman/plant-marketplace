import React from 'react'


//we need to add bulma react as a dependency


function HomePageLogin() {
    return (
 <section>
 <div className= "container-fluid">
    <div className="text-is-centered">
        <h1 className= "title is-size-3"> Join RePotted</h1>
        <h1 className="is-size-4">Buy</h1>
        <h1 className="is-size-4">Sell</h1>
        <h1 className="is-size-4">Any variety of plants</h1>
        <p className="is-size-5">Coming soon...Community conversations</p>
    </div>
<div style={{
  width: "300px",
  border: "10px solid green",
  padding: "50px",
  margin: "20px"}}>
    <a className="button is-success">Login/Signup</a>
        <br><br>
    <a className="button is-success">Browse</a>
</div>

</div>
</section>
)
}

export default HomePageLogin; 