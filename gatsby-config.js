module.exports = {
  siteMetadata: {
    title: 'JobCamp | Where Bootcamp Grads Get Jobs',
    siteUrl: 'https://www.jobcamp.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113459031-2',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://jobcamp.us18.list-manage.com/subscribe/post?u=5f968b0cacb7646507c7684be&amp;id=942ae54a5b',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-plugin-netlify`,
  ],
}
