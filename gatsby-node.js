const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');


const makeRequest = (graphql, request) => new Promise((resolve, reject) => (
  resolve(
    graphql(request).then((result) => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
));

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

  const projectPage = makeRequest(graphql, `
    {
      allDataJson {
        edges {
          node {
            name
            tags
            logo
            original
            translate
            color
            fields {
              slug
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      result.data.allDataJson.edges.forEach(({ node }) => {
        createPage({
          path: `project${node.fields.slug}`,
          component: path.resolve(__dirname, 'src', 'templates', 'project.js'),
          context: {
            node,
          },
        });
      });
    });

  const tagPage = makeRequest(graphql, `
    {
      allDataJson {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)
    .then((result) => {
      result.data.allDataJson.group.forEach(({ fieldValue }) => {
        createPage({
          path: `tag/${fieldValue}`,
          component: path.resolve(__dirname, 'src', 'templates', 'tag.js'),
          context: {
            fieldValue,
          },
        });
      });
    });

  return Promise.all([
    projectPage,
    tagPage,
  ]);
};
