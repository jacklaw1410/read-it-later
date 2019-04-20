module.exports = {
  siteMetadata: {
    title: `Read it later`,
    description: `News, articles, blog posts, and whatever content I want to read later, in a hassle-free way.`,
    author: `@jacklaw1410`,
    repoUrl: `https://github.com/jacklaw1410/read-it-later`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fixtures`,
        path: `${__dirname}/src/fixtures`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Read it later`,
        short_name: `Read it later`,
        start_url: `/`,
        background_color: `#a9d9ff`,
        theme_color: `#a9d9ff`,
        display: `standalone`,
        icon: `src/images/site-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
