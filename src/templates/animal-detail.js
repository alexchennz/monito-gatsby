import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { FaArrowLeft, FaHeart, FaShare } from 'react-icons/fa';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const AnimalDetailTemplate = ({ data, pageContext }) => {
  const animal = data.contentfulMonitoAnimal;
  
  if (!animal) {
    return <div>No animal data available</div>;
  }

  // Get main image
  const mainImage = animal.image?.gatsbyImageData ? getImage(animal.image.gatsbyImageData) : null;

  // Animal characteristics
  const characteristics = [
    { label: 'Gene', value: animal.gene || 'Unknown' },
    { label: 'Age', value: animal.age || 'Unknown' },
    { label: 'Color', value: animal.color || 'Unknown' },
    { label: 'Size', value: animal.size || 'Unknown' },
    { label: 'Location', value: animal.location || 'Unknown' },
    { label: 'Vaccinated', value: animal.vaccinated ? 'Yes' : 'No' },
    { label: 'Dewormed', value: animal.dewormed ? 'Yes' : 'No' },
    { label: 'Microchip', value: animal.microchip ? 'Yes' : 'No' },
    { label: 'Certificate', value: animal.cert || 'Unknown' },
  ];

  // Rich text options for additional information
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-dark-blue underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-dark-blue mb-6 hover:underline">
        <FaArrowLeft className="mr-2" />
        Back to all animals
      </Link>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Animal Image Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden h-80 bg-gray-100">
              {mainImage ? (
                <GatsbyImage 
                  image={mainImage} 
                  alt="Animal" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>
            
            {/* SKU and Published Date */}
            <div className="flex justify-between text-sm text-gray-500">
              <div>SKU: {animal.sku || 'N/A'}</div>
              <div>Published: {animal.publishedDate || 'N/A'}</div>
            </div>
          </div>
          
          {/* Animal Details Section */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-neutral-60 font-medium">ID: {pageContext.productId}</span>
              <h1 className="text-3xl font-bold text-dark-blue-80 mt-1">
                {animal.name?.name || 'Pet Details'}
              </h1>
              <p className="text-lg text-dark-blue mt-2">${animal.price || 'Contact for price'}</p>
            </div>
            
            {/* Characteristics */}
            <div className="grid grid-cols-2 gap-4 py-4 border-b border-gray-200">
              {characteristics.map((item, index) => (
                <div key={index}>
                  <span className="text-sm text-neutral-60">{item.label}:</span>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
            
            {/* Additional Information */}
            {animal.additionalInformation?.raw && (
              <div className="py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold mb-2">Additional Information</h2>
                <div className="text-gray-700">
                  {renderRichText(animal.additionalInformation, options)}
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="flex-1 bg-dark-blue text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center">
                Contact Seller
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                <FaHeart className="text-gray-500" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
                <FaShare className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query($contentfulId: String!) {
    contentfulMonitoAnimal(id: { eq: $contentfulId }) {
      name {
        name
      }
      additionalInformation {
        raw
      }
      age
      cert
      color
      dewormed
      gene
      image {
        gatsbyImageData(width: 550, height: 550)
      }
      location
      price
      size
      sku
      vaccinated
      microchip
      publishedDate(formatString: "j-M-Y")
    }
  }
`;

AnimalDetailTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulMonitoAnimal: PropTypes.shape({
      name: PropTypes.shape({
        name: PropTypes.string
      }),
      additionalInformation: PropTypes.shape({
        raw: PropTypes.string
      }),
      age: PropTypes.string,
      cert: PropTypes.string,
      color: PropTypes.string,
      dewormed: PropTypes.bool,
      gene: PropTypes.string,
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.object
      }),
      location: PropTypes.string,
      price: PropTypes.string,
      size: PropTypes.string,
      sku: PropTypes.string,
      vaccinated: PropTypes.bool,
      microchip: PropTypes.bool,
      publishedDate: PropTypes.string
    })
  }),
  pageContext: PropTypes.shape({
    productId: PropTypes.string,
    contentfulId: PropTypes.string
  })
};

export default AnimalDetailTemplate;
