module.exports = {
  siteMetadata: {
    title: `Read later`,
    description: `News, articles, blog posts, and whatever content I want to read later, in a hassle-free way.`,
    author: `@jacklaw1410`,
    repoUrl: `https://github.com/jacklaw1410/read-later-client`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Read later`,
        short_name: `Read later`,
        start_url: `/`,
        background_color: `#a9d9ff`,
        theme_color: `#a9d9ff`,
        display: `standalone`,
        icon: `src/images/site-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Bookmark`,
        fieldName: `library`,
        url: 'https://read-later-node.herokuapp.com',
      },
    },
  ],
};
