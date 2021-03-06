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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={logoForOgTags} />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta
        name="twitter:description"
        content="Are you a bootcamp grad or a company looking to hire them? This is the place for you."
      />
      <meta
        name="description"
        content="Are you a bootcamp grad or a company looking to hire them? This is the place for you."
      />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content="Are you a bootcamp grad or a company looking to hire them? This is the place for you."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={logoForOgTags} />
      <meta property="og:image:secure_url" content={logoForOgTags} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:alt" content="JobCamp Logo" />
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
