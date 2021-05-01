import React from "react";

//basic layout for the plant cards
// the information from the api will go in before the contact?

const PlantCard = (props) => {
  return (
    <section className="container-fluid">
      <div className="columns">
        <div className="column" style={{}}>
          <div className="card" style={{}}>
            <div className="card-image">
              <img className="image" src={} alt={} />
            </div>
            <div className="media-content">
              <p className="title is-4">{}</p>
              <p className="subtitle is-6">{}</p>
            </div>
            <div className="content">
                <p className= "is-size-6">{}</p>
              <a href={}>Contact email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCard;
