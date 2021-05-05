import React from "react";
// recent posts for the user to view, a visual cue of what is expected on the site
//used a box to give it a bit of emphasis

// passing in props from LandingPg.js
function HomePagePosts({ plant_name, image_link, description, contact_email }) {
  return (
    // flex box with margin and padding so two can fit side by side
    <div className="is-flex
    is-flex-direction-column" 
    style={{ maxWidth: "250px", minHeight: "300px", marginBottom:"2em", border:"black 1px dashed", borderRadius:"8px", padding:"1rem" }}>

      <div className="card-image ">
        <figure class="image is-4by3">
          <img src={image_link} alt="Image" />
        </figure>
      </div>
        <div className="content is-flex is-flex-direction-column"
        style={{height:"100%"}}>
          <p>
            <strong>
              <em>Plant Name: </em>
              {plant_name}
            </strong>
            <br></br>
            {description}
          </p>
          <div
            className="content"
            style={{ height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end" }}>
            <p className="is-size-6">{}</p>
            <a href={contact_email}>Contact Seller</a>
          </div>
        </div>
      </div>
  );
}

export default HomePagePosts;
