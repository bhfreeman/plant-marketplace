import React, {useState} from "react";
import UserInfo from "../components/UserInfo";
import UserPagePosts from '../components/UserPagePosts'
import CreatePostForm from "../components/CreatePostForm";


function UserAccountPage({userId}) {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({
    name:'',
    username:'',
    email:'',
    // password:'',
    city: '',
    state: ''
  })

  return (
    <div className="user-page">
      <div className="user-info-sidebar">
        <UserInfo userId={userId} setPosts={setPosts} setUser={setUser} user={user}/>
        <CreatePostForm userId={userId} />
      </div>
      <div className="user-postings">
          <UserPagePosts posts={posts} user={user} />
      </div>
    </div>
  );
}

export default UserAccountPage;
