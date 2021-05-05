import React from "react";
// recent posts for the user to view, a visual cue of what is expected on the site
//used a box to give it a bit of emphasis

// passing in props from LandingPg.js
function HomePagePosts({plant_name, image_link, description, contact_email}) {
  return (
    <div className="box">
  <article className="media">

    <div class="media-left">
      <figure class="image is-64x64">
        <img src={image_link}alt="Image"/>

      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Title: {plant_name}</strong> 
          <br></br>
          Description: {description}</p>
        <div className="content">
        <p className="is-size-6">{}</p>
        <a href={contact_email}>Contact email</a>
           </div>
      </div>
    </div>
  </article>
</div>
  );
}

export default HomePagePosts;
