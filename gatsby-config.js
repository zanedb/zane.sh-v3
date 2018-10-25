module.exports = {
  siteMetadata: {
    title: 'Zane Davis-Barrs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Zane Davis-Barrs',
        short_name: 'zane.sh',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#01C5FF',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
  ],
}
