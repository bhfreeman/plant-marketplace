import React, {useState} from "react";
import UserInfo from "../components/UserInfo";
import UserPagePosts from '../components/UserPagePosts'
import CreatePostForm from "../components/CreatePostForm";
import NoPostDisplay from '../components/NoPostDisplay'


function UserAccountPage({userId, user, setUser}) {
  const [posts, setPosts] = useState([])


  return (
    <div className="user-page">
      <div className="user-info-sidebar">
        <UserInfo userId={userId} setPosts={setPosts} setUser={setUser} user={user}/>
        <CreatePostForm user_id={userId} />
      </div>
      <div className="user-postings">
      <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "25px",
              color: "#648c11",
            }}
          >
            Your Plants
          </h1>
        {posts.length > 0 && <UserPagePosts posts={posts} user={user} /> }
        {posts.length === 0 && <NoPostDisplay />}
      </div>
    </div>
  );
}

export default UserAccountPage;
