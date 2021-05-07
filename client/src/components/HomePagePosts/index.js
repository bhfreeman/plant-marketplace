import React from "react";
// recent posts for the user to view, a visual cue of what is expected on the site
//used a box to give it a bit of emphasis

// passing in props from LandingPg.js
function HomePagePosts({ plant_name, image_link, description, email, username }) {
  return (
    // flex box with margin and padding so two can fit side by side
    <div
      className="is-flex
    is-flex-direction-column"
      // className={styles.cardContent}
      style={{
        maxWidth: "250px",
        minHeight: "300px",
        marginBottom: "2em",
        border: "black 1px dashed",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: " 0 10px 20px rgba(0,0,0,.4)",
      }}
    >
      <div className="card-image ">
        <figure className="image is-4by3">
          <img src={image_link} alt="plant" />
        </figure>
      </div>
      <div
        className="content is-flex is-flex-direction-column"
        style={{ height: "100%" }}
      >
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
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <p>
            Contact Seller:
            <a href={`mailto:${email}`}> {username}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePagePosts;
