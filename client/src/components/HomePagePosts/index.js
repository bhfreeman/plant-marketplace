import React from "react";
// recent posts for the user to view, a visual cue of what is expected on the site
//used a box to give it a bit of emphasis
<<<<<<< HEAD
function HomePagePosts({img,title, description,content, email}) {
=======

// passing in props from LandingPg.js
function HomePagePosts({plant_name, image_link, description, contact_email}) {
>>>>>>> ac1101a8422c266684855139eec73c2ff45ed74a
  return (
    <div className="box">
  <article className="media">
    <div class="media-left">
      <figure class="image is-64x64">
<<<<<<< HEAD
        <img src={img}alt="description goes here"/>
=======
        <img src={image_link}alt="Image"/>
>>>>>>> ac1101a8422c266684855139eec73c2ff45ed74a
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
<<<<<<< HEAD
          <strong>Title: {title}</strong> 
          <br></br>
          Description: {description}</p>
        <div className="content">
        <p className="is-size-6">{content}</p>
        <a href={email}>Contact email</a>
=======
          <strong>Title: {plant_name}</strong> 
          <br></br>
          Description: {description}</p>
        <div className="content">
        <p className="is-size-6">{}</p>
        <a href={contact_email}>Contact email</a>
>>>>>>> ac1101a8422c266684855139eec73c2ff45ed74a
           </div>
      </div>
    </div>
  </article>
</div>
  );
}

export default HomePagePosts;
