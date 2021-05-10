import React from "react";
import {useHistory} from 'react-router-dom'
import BaseSalesPost from "../BaseSalesPost";
import API from '../../utils/API'
// user can update their posts on here. Need delete and update functions.
function UserPagePosts({ posts, user }) {
  const history = useHistory();
  // const [updatedPost, setUpdatedPost] = useState({
  //   plant_name: "",
  //   description: "",
  //   image_link: '', 
  //   plant_type: '',
  // })
  // function openUpdateForm(){

  // }

  // function handleUpdate(){

  // }
  async function handleDelete(post_id){
    await API.deletePost(post_id)
    history.push('/')
  }
  // @ToDo render plant_name
  
  return (
    <section className="container-fluid">
      {posts
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .map((post) => {
          return (
            <div key={post._id}>
              <BaseSalesPost
                plant={post}
              />
              {/* <button key={"update" + post._id} className="button"style ={{ background: "#8c9e5e", margin: "5px" }}>
                Update Post
              </button> */}
              <button key={"delete" + post._id} className="button"style= {{ background: "#ae0c00", margin: "5px" }} onClick={() => handleDelete(post._id)}>
                Delete Post
              </button>
            </div>
          );
        })}

    </section>
  );
}

export default UserPagePosts;
