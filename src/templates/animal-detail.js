import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { FaHeart, FaShare, FaHome, FaChevronRight, FaCommentDots, FaPhoneAlt } from 'react-icons/fa';
import { getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import ImageCarousel from '../components/ImageCarousel';
import Header from '../components/Header';

const AnimalDetailTemplate = ({ data, pageContext }) => {
  const animal = data.contentfulMonitoAnimal;
  
  
  if (!animal) {
    return <div>No animal data available</div>;
  }

  // Get images
  const mainImage = animal.image?.gatsbyImageData ? getImage(animal.image.gatsbyImageData) : null;
  const otherImages = animal.otherImages?.map(img => img?.gatsbyImageData ? getImage(img.gatsbyImageData) : null) || [];
  console.log("otherImages", otherImages)

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
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <span style={{ whiteSpace: 'pre-line' }}>
          {children}
        </span>
      ),
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="text-dark-blue underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-8"> 
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Image Carousel */}
            <div className="p-6">
              <ImageCarousel mainImage={mainImage} otherImages={otherImages} />
            </div>
      
            {/* Right Column - Animal Details */}
            <div className="p-6 border-l border-gray-200">
              {/* Breadcrumb Navigation */}
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Link to="/" className="flex items-center hover:text-dark-blue">
                  <FaHome className="mr-1" />
                  <span>Home</span>
                </Link>
                <FaChevronRight className="mx-2 text-xs" />
                <Link to="/" className="hover:text-dark-blue">Pets</Link>
                <FaChevronRight className="mx-2 text-xs" />
                <span className="text-dark-blue font-medium">{animal.name?.name || 'Pet Details'}</span>
              </div>
      
              {/* SKU */}
              <div className="text-sm text-neutral-40 mb-3">
                SKU: {`#${animal.sku}` || 'N/A'}
              </div>
      
              {/* Title and Price */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-dark-blue-80">
                  {animal.name?.name || 'Pet Details'}
                </h1>
                <p className="text-xl font-bold text-dark-blue mt-2">${animal.price || 'Contact for price'}</p>
              </div>
      
              {/* Action Buttons */}
              <div className="flex space-x-4 mb-6">
                <button className="flex-1 bg-dark-blue text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center">
                  <FaPhoneAlt className="mr-2" />
                  Contact Us
                </button>
                <button className="flex-1 border-2 border-dark-blue text-dark-blue py-3 px-6 rounded-full hover:bg-dark-blue hover:text-white transition-colors flex items-center justify-center">
                  <FaCommentDots className="mr-2" />
                  Chat with Monito
                </button>
              </div>
      
              {/* Characteristics - One per row with dividers */}
                {characteristics.map((item, index) => (
                  <div key={index} className="py-3 border-b border-gray-200 flex *:text-neutral/60">
                    <span className="w-1/3">{item.label}</span>
                    <span className="w-2/3">: {item.value}</span>
                  </div>
                ))}
              
              {/* Published Date and Share */}
              <div className="py-3 border-b border-gray-200 flex *:text-neutral/60">
                <span className="w-1/3">Published Date</span>
                <span className="w-2/3">: {animal.publishedDate || 'N/A'}</span>
              </div>
      
              {/* Additional Information */}
              {animal.additionalInformation?.raw && (
                  <div className="py-3 border-b border-gray-200 flex *:text-neutral/60">
                    <span className="w-1/3">Additional Information</span>
                    <span className="w-2/3 flex items-start"><span className='pr-1'>: </span>{renderRichText(animal.additionalInformation, options)}</span>
                  </div>
              )}
      
              
            </div>
          </div>
        </div>
      </div>
    </main>
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
        gatsbyImageData(width: 700, height: 700)
      }
      otherImages {
        gatsbyImageData(width: 700, height: 700)
      }
      location
      price
      size
      sku
      vaccinated
      microchip
      publishedDate(formatString: "DD-MM-YYYY")
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
      dewormed: PropTypes.string,
      gene: PropTypes.array,
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.object
      }),
      otherImages: PropTypes.arrayOf(
        PropTypes.shape({
          gatsbyImageData: PropTypes.object
        })
      ),
      location: PropTypes.string,
      price: PropTypes.number,
      size: PropTypes.string,
      sku: PropTypes.string,
      vaccinated: PropTypes.string,
      microchip: PropTypes.string,
      publishedDate: PropTypes.string
    })
  }),
  pageContext: PropTypes.shape({
    productId: PropTypes.string,
    contentfulId: PropTypes.string
  })
};

export default AnimalDetailTemplate;
