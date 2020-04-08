module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  blogAuthorDir: 'authors', // The name of directory that contains your 'authors' folder.
  blogAuthorId: 'alex', // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: 'Alexander Grischuk', // Site title.
  siteTitleAlt: 'Alexander Grischuk - Software Engineer', // Alternative site title for SEO.
  siteLogo:
    'https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png', // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: 'http://grischuk.de', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: 'Software Engineer living and working in Berlin since 2015', // Website description used for RSS feeds/meta description tag.
  siteCover:
    'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bcd2bf5b6271090e70ea12980ddb02d7&auto=format&fit=crop&w=2567&q=80', // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: false, // If navigation is enabled the Menu button will be visible
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssAuthor: 'Casper User', // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: 'UA-123032104-1', // GA tracking ID.
  siteSocialUrls: [
    'https://github.com/alexandr-g',
    'https://de.linkedin.com/in/alxgi',
    'mailto:alexgrischuk@gmail.com',
    'https://www.instagram.com/centra_l/',
  ],
  postDefaultCategoryID: 'Tech', // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/alexandr-g',
      iconClassName: 'fa fa-github', // Disabled, see Navigation.jsx
    },
    {
      label: 'LinkedIn',
      url: 'https://de.linkedin.com/in/alxgi',
      iconClassName: 'fa fa-linkedin', // Disabled, see Navigation.jsx
    },
    {
      label: 'Email',
      url: 'mailto:alexgrischuk@gmail.com',
      iconClassName: 'fa fa-envelope', // Disabled, see Navigation.jsx
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/centra_l/',
      iconClassName: 'fa fa-instagram',
    },
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: 'Alexander Grischuk', // Label used before the year
    year: '2018 - 2020', // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
  promoteGatsby: true, // Enables the GatsbyJS promotion information in footer.
}
