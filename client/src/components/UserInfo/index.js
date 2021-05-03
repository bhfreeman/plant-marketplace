import React from 'react'

function UserInfo() {
    return (
        //did we want the ability to update infomation on here?
        <div>
          <h1 style={{fontSize: "18px"}}>Account information</h1>  
          <div class="card">
  <div class="card-content">
    <div class="content">
      <h1>Name: {}</h1>
      <h1>UserName: {}</h1>
      <h1>Email: {}</h1>
      <h1>Password: {}</h1>
      <h1>City, State: {}</h1>
    </div>
  </div>
</div>


        </div>
    )
}

export default UserInfo; 

