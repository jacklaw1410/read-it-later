exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      library {
        tags {
          bookmarks {
            url
            title
            tags {
              name
            }
            added
          }
          name
        }
      }
    }
  `);
  data.library.tags.forEach(tag => {
    actions.createPage({
      path: `tag/${tag.name}`,
      component: require.resolve(`./src/templates/tag.js`),
      context: { tag },
    });
  });
};
