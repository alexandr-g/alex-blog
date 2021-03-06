import React from 'react'
import { Helmet } from 'react-helmet'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import config from '../../data/SiteConfig'
import './index.css'

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/'
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '')
    let title = ''
    if (currentPath === '') {
      title = 'Home'
    } else if (currentPath === 'tags/') {
      title = 'Tags'
    } else if (currentPath === 'categories/') {
      title = 'Categories'
    } else if (currentPath === 'about/') {
      title = 'About'
    } else if (currentPath.includes('posts')) {
      title = 'Article'
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `Tagged in ${capitalize(tag)}`
    } else if (currentPath.includes('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `${capitalize(category)}`
    }
    return title
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children()}
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: '#111' }}
          onDecline={() => {
            Cookies.remove('_ga', { path: '/', domain: '.grischuk.de' })
            Cookies.remove('_gat', { path: '/', domain: '.grischuk.de' })
            Cookies.remove('_gid', { path: '/', domain: '.grischuk.de' })
          }}
          setDeclineCookie={false}
        >
          <span style={{ fontSize: '14px' }}>
            This website uses cookies to enhance your user experience{' '}
          </span>
        </CookieConsent>
      </div>
    )
  }
}
