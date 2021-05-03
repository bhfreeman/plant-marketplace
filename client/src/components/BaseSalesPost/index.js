import React from 'react'
// this would be used for the landing page- a sample of what can be done...
function BaseSalesPost() {
    return (
<section className="container-fluid">
      <div className="columns">
        <div className="column" style={{}}>
          <div className="card" style={{}}>
            <div className="card-image">
              <img className="image" src={} alt={} />
            </div>
            <div className="media-content">
              <p className="title is-4">Title: {}</p>
              <p className="subtitle is-6">Type of Plant: {}</p>
              <p className="subtitle is-6">Description{}</p>
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

    )
}

export default BaseSalesPost; 
