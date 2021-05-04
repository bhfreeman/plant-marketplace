import React from "react";
import UserInfo from "../components/UserInfo";
import UserPagePosts from '../components/UserPagePosts'
import CreatePostForm from "../components/CreatePostForm";


function UserAccountPage() {
  return (
    <div className="user-page">
      <div className="user-info-sidebar">
        <UserInfo />
        <CreatePostForm/>
      </div>
      <div className="user-postings">
          <UserPagePosts/>
      </div>
    </div>
  );
}

export default UserAccountPage;
