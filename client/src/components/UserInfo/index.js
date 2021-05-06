import React, {useEffect, useState} from "react";
import API from '../../utils/API'

function UserInfo({userId}) {

  const [user, setUser] = useState({
    name:'',
    username:'',
    email:'',
    // password:'',
    city: '',
    state: ''
  })

  const getUserInfo = async () => {
    try {
     let response = await API.getUserInfo(userId)
     setUser({
       ...user,
       name: response.data.name,
       username: response.data.username,
       email: response.data.email,
       city: response.data.city,
       state: response.data.state
    })

    } catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    getUserInfo();
  }, [])


  return (
    //did we want the ability to update infomation on here?
    <div>
      <h1 style={{ fontSize: "18px" }}>Account information</h1>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h1>Name: {user.name}</h1>
            <h1>UserName: {user.username}</h1>
            <h1>Email: {user.email}</h1>
            {/* <h1>Password: {}</h1> */}
            <h1>City, State: {user.city}, {user.state}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
