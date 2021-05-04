import React from "react";

function UserInfo() {
  return (
    //did we want the ability to update infomation on here?
    <div>
      <h1 style={{ fontSize: "18px" }}>Account information</h1>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1>Name: {}</h1>
            <h1>UserName: {}</h1>
            <h1>Email: {}</h1>
            <h1>Password: {}</h1>
            <h1>City, State: {}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
