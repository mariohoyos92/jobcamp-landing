module.exports = {
  siteMetadata: {
    title: 'JobCamp | Where Bootcamp Grads Get Jobs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://jobcamp.us18.list-manage.com/subscribe/post?u=5f968b0cacb7646507c7684be&amp;id=942ae54a5b',
      },
    },
  ],
}
