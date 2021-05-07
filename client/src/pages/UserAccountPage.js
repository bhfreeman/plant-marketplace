import React, {useState} from "react";
import UserInfo from "../components/UserInfo";
import UserPagePosts from '../components/UserPagePosts'
import CreatePostForm from "../components/CreatePostForm";


function UserAccountPage({userId, user, setUser}) {
  const [posts, setPosts] = useState([])


  return (
    <div className="user-page">
      <div className="user-info-sidebar">
        <UserInfo userId={userId} setPosts={setPosts} setUser={setUser} user={user}/>
        <CreatePostForm user_id={userId} />
      </div>
      <div className="user-postings">
          <UserPagePosts posts={posts} user={user} />
      </div>
    </div>
  );
}

export default UserAccountPage;
