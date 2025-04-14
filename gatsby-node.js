const path = require('path');

// Create pages for each animal
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  // Query for all animals from Contentful
  const result = await graphql(`
    query {
      allContentfulMonitoAnimal {
        edges {
          node {
            id
            name {
              name
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    console.error('Error retrieving Contentful data:', result.errors);
    return;
  }

  // Create a page for each animal
  result.data.allContentfulMonitoAnimal.edges.forEach((edge, index) => {
    // Generate product ID from name - same format as in AnimalsSection.jsx
    const productId = edge.node.name?.name?.toLowerCase().replace(/\s+/g, '-') || `animal-${index}`;
    
    createPage({
      path: `/animal/${productId}`,
      component: path.resolve('./src/templates/animal-detail.js'),
      context: {
        contentfulId: edge.node.id,
        productId: productId,
      },
    });
  });
};
