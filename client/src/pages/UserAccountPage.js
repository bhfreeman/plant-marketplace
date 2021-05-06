import React, {useState} from "react";
import UserInfo from "../components/UserInfo";
import UserPagePosts from '../components/UserPagePosts'
import CreatePostForm from "../components/CreatePostForm";


function UserAccountPage({userId}) {
  const [posts, setPosts] = useState([])

  return (
    <div className="user-page">
      <div className="user-info-sidebar">
        <UserInfo userId={userId} setPosts={setPosts} />
        <CreatePostForm userId={userId} />
      </div>
      <div className="user-postings">
          <UserPagePosts />
      </div>
    </div>
  );
}

export default UserAccountPage;
