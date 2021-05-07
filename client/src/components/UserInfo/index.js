import React, { useEffect } from "react";
import API from "../../utils/API";

function UserInfo({ userId, setPosts, setUser, user }) {
  const getUserInfo = async () => {
    try {
      let response = await API.getUserInfo(userId);
      await setUser({
        ...user,
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
        city: response.data.city,
        state: response.data.state,
      });
      await setPosts(response.data.posts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    //did we want the ability to update infomation on here?
    <section className="container-flex">
      <div className="columns">
        <div className="column" style= {{display: "flex", flexDirection: "column", alignItems: "center"}}
        >
        <h1
          className="title"
          style={{ display: "flex",justifyContent: "center",fontSize: "25px", color: "#648c11" }}
        >
          Account information
        </h1>
        <div className="card" style={{width:"50%", margin:"5px"}}>
          <div className="card-content">
            <div className="content">
              <h3>Name: {user.name}</h3>
              <h3>Username: {user.username}</h3>
              <h3>Email: {user.email}</h3>
              {/* <h1>Password: {}</h1> */}
              <h3>City: {user.city}</h3>
              <h3>State: {user.state}</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default UserInfo;
