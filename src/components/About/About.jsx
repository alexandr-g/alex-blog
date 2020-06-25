import React, { Fragment } from 'react'
import './About.css'
import PaginationLink from '../PaginationLink/PaginationLink'

const About = () => (
  <Fragment>
    <div className="about">
      <p>
        Hi there! I’m Alex, <strong>a frontend software developer</strong>,{' '}
        <strong>OSS contributor</strong>, and former QA. Most of my time
        programming I'm working with{' '}
        <strong>JavaScript, TypeScript, React, Redux, GraphQL</strong>.
      </p>
      <p>
        I am originally from the beautiful Kyiv, Ukraine 🇺🇦 and been working and
        living in Berlin ❤️🇩🇪 since 2015.
      </p>
    </div>
    <PaginationLink className="back-button" url={'/'} text="Back to blog" />
  </Fragment>
)

export default About
