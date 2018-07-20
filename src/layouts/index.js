import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../assets/favicon.ico'
import logoForOgTags from '../assets/logoForOGTags.png'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[{ name: 'keywords', content: 'bootcamp, coding, job' }]}
    >
      <meta name="description" content="Are you a bootcamp grad or a company looking to hire them? This is the place for you."/>
      <meta property="og:title" content="JobCamp" />
      <meta property="og:image" content={logoForOgTags} />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
