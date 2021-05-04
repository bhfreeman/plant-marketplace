import React from 'react'
// this would be used for the landing page- a sample of what can be done...
function BaseSalesPost({img,title,plant,description,content,email}) {
    return (
<section className="container-fluid">
      <div className="columns">
        <div className="column" style={{}}>
          <div className="card" style={{}}>
            <div className="card-image">
              <img className="image" src={img} alt={title} />
            </div>
            <div className="media-content">
              <p className="title is-4">Title: {title}</p>
              <p className="subtitle is-6">Type of Plant: {plant}</p>
              <p className="subtitle is-6">Description{description}</p>
            </div>
            <div className="content">
                <p className= "is-size-6">{content}</p>
              <a href={email}>Contact email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BaseSalesPost; 
