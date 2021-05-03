import React from "react";
// recent posts for the user to view, a visual cue of what is expected on the site
//used a box to give it a bit of emphasis
function HomePagePosts() {
  return (
    <div className="box">
  <article className="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src={}alt="Image"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Title: {}</strong> 
          <br></br>
          Description: {}</p>
        <div className="content">
        <p className="is-size-6">{}</p>
        <a href={}>Contact email</a>
           </div>
      </div>
    </div>
  </article>
</div>
  );
}

export default HomePagePosts;
