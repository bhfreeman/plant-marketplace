import React from "react";
import BaseSalesPost from "../BaseSalesPost";
// user can update their posts on here. Need delete and update functions.
function UserPagePosts({ posts, user }) {
  
  // @ToDo render plant_name
  console.log(posts)
  return (
    <section className="container-fluid">
      {posts
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .map((post) => {
          return (
            <div key={post._id}>
              <BaseSalesPost
                key={post._id}
                plantName={post.plant_name}
                description={post.description}
                image_link={post.image_link}
                username={user.username}
                email={user.email}
              />
              <button key={"update" + post._id} className="button is-success">
                Update Post
              </button>
              <button key={"delete" + post._id} className="button is-danger">
                Delete Post
              </button>
            </div>
          );
        })}
      {/* <p className="title" style={{}}>
        {" "}
        Update your posts{" "}
      </p>
      <div className="columns">
        <div className="column" style={{}}>
          <div className="card" style={{}}>
            <div className="card-image">
              <img className="image" src={img} alt={title} />
            </div>
            <div className="media-content">
              <p className="title is-4">
                {title}
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Update Title"
                />
              </p>
              <p className="subtitle is-6">
                {plant}
         
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Update Plant Name"
                />
              </p>
              <textarea
                className="textarea"
                placeholder="description update"
                rows="10"
              >
                {description}
              </textarea>
            </div>
            <div className="content">
              <p className="is-size-6">{content}</p>
              <a href={email}>Contact email</a>
            </div> */}
      {/* <button className="button is-success">Update</button>
            <button className="button is-danger">Delete ALL</button> */}
      {/* </div>
        </div>
      </div> */}
    </section>
  );
}

export default UserPagePosts;
