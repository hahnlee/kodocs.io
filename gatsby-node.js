const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'DataJson') {
    const slug = createFilePath({ node, getNode, basePath: 'data' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDataJson {
          edges {
            node {
              name
              tags
              logo
              color
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allDataJson.edges.forEach(({ node }) => {
        createPage({
          path: `project${node.fields.slug}`,
          component: path.resolve(__dirname, 'src', 'templates', 'project.js'),
          context: {
            node,
          },
        });
      });
      resolve();
    });
  });
};
