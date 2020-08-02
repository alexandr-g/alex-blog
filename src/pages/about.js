import React from 'react'
import { Helmet } from 'react-helmet'
import loadable from '@loadable/component'

import Navigation from '../components/Navigation/Navigation'
import SiteWrapper from '../layouts/SiteWrapper/SiteWrapper'
import MainHeader from '../layouts/MainHeader/MainHeader'
import MainNav from '../layouts/MainNav/MainNav'
import Drawer from '../layouts/Drawer/Drawer'
import BlogLogo from '../components/BlogLogo/BlogLogo'
import MenuButton from '../components/MenuButton/MenuButton'
import AuthorImage from '../components/AuthorImage/AuthorImage'
import AuthorProfile from '../layouts/AuthorProfile/AuthorProfile'
import AuthorName from '../components/AuthorName/AuthorName'
import AuthorMeta from '../layouts/AuthorMeta/AuthorMeta'
import AuthorLocation from '../components/AuthorLocation/AuthorLocation'
import AuthorWebsite from '../components/AuthorWebsite/AuthorWebsite'
import AuthorStats from '../components/AuthorStats/AuthorStats'

import config from '../../data/SiteConfig'

const AboutComponent = loadable(() => import('../components/About/About'))

class AboutPage extends React.Component {
  state = {
    menuOpen: false,
  }

  handleOnClick = (evt) => {
    evt.stopPropagation()
    if (this.state.menuOpen) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  handleOnClose = (evt) => {
    evt.stopPropagation()
    this.closeMenu()
  }

  openMenu = () => {
    this.setState({ menuOpen: true })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render() {
    const { author, cover } = this.props.pathContext
    const postEdges =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges
        ? this.props.data.allMarkdownRemark.edges
        : []
    const authorsEdges =
      this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges
        ? this.props.data.allAuthorsJson.edges
        : []
    const getAuthor = () => authorsEdges[0].node

    return (
      <Drawer className="author-template" isOpen={this.state.menuOpen}>
        <Helmet title={`About | ${config.siteTitle}`} />

        {/* The navigation links for the Menu */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="author-head" cover={cover}>
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>

          <AuthorProfile className="inner">
            <AuthorImage author={getAuthor()} />
            <AuthorName name={getAuthor().name} />
            <AboutComponent />
            <AuthorMeta>
              <AuthorLocation location={getAuthor().location} />
              <AuthorWebsite url={getAuthor().url} />
            </AuthorMeta>
            <AuthorStats postEdges={postEdges} />
          </AuthorProfile>
        </SiteWrapper>
      </Drawer>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutPage($author: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $author } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            author
          }
        }
      }
    }
    allAuthorsJson(filter: { id: { eq: $author } }) {
      edges {
        node {
          id
          name
          image
          url
          bio
          location
          socialUrls
        }
      }
    }
  }
`

export default AboutPage
