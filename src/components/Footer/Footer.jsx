import React from 'react'
import './Footer.css'

const Footer = ({ promoteGatsby, copyright }) => {
  const { label, url, year } = copyright

  return (
    <footer className="site-footer clearfix">
      <section className="copyright">
        <a href={url || '/'}>{label}</a> &copy;{' '}
        {year || new Date().getFullYear()}
      </section>
      {promoteGatsby ? (
        <section className="poweredby">
          Proudly published with <a href="https://gatsbyjs.org">Gatsby</a>
        </section>
      ) : null}
    </footer>
  )
}

export default Footer
