import React from "react";
// recent posts for the user to view, a visual cue of what is expected on the site
//used a box to give it a bit of emphasis

// passing in props from LandingPg.js
function HomePagePosts({ plant_name, image_link, description, contact_email }) {
  return (
    <div className="column is-half">
      <div className="card-image ">
        <figure class="image is-4by3">
          <img src={image_link} alt="Image" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong><em>Plant Name: </em>{plant_name}</strong>
            <br></br>
            {description}
          </p>
          <div className="content">
            <p className="is-size-6">{}</p>
            <a href={contact_email}>Contact Seller</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePagePosts;
