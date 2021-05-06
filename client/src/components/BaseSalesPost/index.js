import React from 'react'
// this would be used for the landing page- a sample of what can be done...
function BaseSalesPost({plant_name, description, image_link, username, email, city, state}) {
  return (
    // flex box with margin and padding so two can fit side by side
    <div className="is-flex
    is-flex-direction-column" 
    // className={styles.cardContent}
    style={{ maxWidth: "250px", minHeight: "300px", marginBottom:"2em", border:"black 1px dashed", borderRadius:"8px", padding:"1rem",  boxShadow:" 0 10px 20px rgba(0,0,0,.4)"}}>

      <div className="card-image ">
        <figure className="image is-4by3">
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
            <a href={email}>Contact Seller {username}</a>
          </div>
        </div>
      </div>
  );
}

export default BaseSalesPost; 
