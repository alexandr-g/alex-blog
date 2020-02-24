import React, { Fragment } from 'react'

import './About.css'

const About = () => (
  <Fragment>
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img
              alt="author_image"
              src="https://images.unsplash.com/photo-1558980394-dbb977039a2e"
            />
            <span className="card-title">Card Title</span>
          </div>
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)
export default About
