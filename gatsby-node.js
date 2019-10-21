const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            posts: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/content/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    pathname
                    title
                    date(formatString: "DD MMMM YYYY")
                    description
                  }
                  excerpt
                }
              }
            }
          }
        `,
      ).then((result) => {
        result.data.posts.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/blogPost.js');
          createPage({
            path: node.frontmatter.pathname,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}
