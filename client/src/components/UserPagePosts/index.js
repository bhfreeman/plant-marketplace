import React from "react";
// user can update their posts on here. Need delete and update functions.
function UserPagePosts() {
  return (
    <section className="container-fluid">
      <p className="title" style={{}}>
        {" "}
        Update your posts{" "}
      </p>
      <div className="columns">
        <div className="column" style={{}}>
          <div className="card" style={{}}>
            <div className="card-image">
              <img className="image" src={} alt={} />
            </div>
            <div className="media-content">
              <p className="title is-4">
                {}
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Update Title"
                />
              </p>
              <p className="subtitle is-6">
                {}
         
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Update Plant Name"
                />
              </p>
              <textarea
                class="textarea"
                placeholder="description update"
                rows="10"
              >
                {}
              </textarea>
            </div>
            <div className="content">
              <p className="is-size-6">{}</p>
              <a href={}>Contact email</a>
            </div>
            <button class="button is-success">Update</button>
            <button class="button is-danger">Delete ALL</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPagePosts;
