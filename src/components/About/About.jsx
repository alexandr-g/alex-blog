import React, { Fragment } from 'react'
import './About.css'
import PaginationLink from '../PaginationLink/PaginationLink'

const About = () => (
  <Fragment>
    <div className="about">
    <h3>Hi there!</h3>
      <p>
         I’m Alex, T-shaped <strong>Senior Frontend Engineer</strong> with strong <strong>DevOps</strong> skills and QA background. 
        In my free time, I enjoy <strong>contributing to OSS</strong>, write blog posts, or voluntarily teach JavaScript to others.
        Most of my time
        programming I'm working with{' '}
        <strong>JavaScript, TypeScript, React, Redux, GraphQL</strong>.
      </p>
      <p>

          <p>10+ years of combined experience in IT</p>
          <p>4+ years of production experience with <strong>React</strong></p>
          <p>6+ years of experience in Quality Assurance, Test Automation, and Software Testing</p>

          Full-time, remote, and relocation experience working in autonomous agile teams following Scrum/Kanban with over 60 nationalities from a small startups to medium and big companies.
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