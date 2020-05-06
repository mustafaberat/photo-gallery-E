module.exports = {
  siteMetadata: {
    title: `Türkiye'nin Güzellikleri`,
    description: `Türkiye'nin güzelliklerini paylaşabileceğiniz, sizin fotoğraflarınızı barındıran bir resim sayfasıdır.`,
    author: `@mustafaberat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/photos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#C10116`,
        theme_color: `#C10116`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
