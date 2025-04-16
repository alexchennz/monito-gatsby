import React from 'react';
import AnimalCard from './AnimalCard';
import productImage from '../images/product-image.png';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaChevronRight } from "react-icons/fa";


const AnimalsSection = () => {
  // Query data using useStaticQuery hook
  const data = useStaticQuery(graphql`
    query {
      allContentfulMonitoAnimal(limit: 10, sort: {createdAt: DESC}) {
        totalCount
        edges {
          node {
            age
            price
            image {
              gatsbyImageData(width: 500, height: 500)
            }
            gene
            name {
              name
            }
          }
        }
      }
    }
  `);

  
  // Access the edges array from the GraphQL data
  const products = data?.allContentfulMonitoAnimal?.edges || [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row justify-between items-center">
          <div>
            <p className="text-black text-sm">Whats new?</p>
            <h4 className="text-clamp-h4 font-bold text-dark-blue-80 mb-4">Take a look at some of our pets</h4>
          </div>
          <div>

          <Link to='/pets' className=" text-dark-blue text-sm leading-none py-3 px-7 rounded-3xl hover:bg-white transition-colors flex items-center gap-2 ring-2 ring-dark-blue">
              <span>View more</span>
              <FaChevronRight className="size-3" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center gap-2 sm:gap-6">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <AnimalCard
                key={index}
                image={product.node.image?.gatsbyImageData || productImage}
                productId={product.node.name?.name?.toLowerCase().replace(/\s+/g, '-')}
                name={product.node.name?.name || 'Pet Name'}
                gender={product.node.gene || 'Unknown'}
                age={product.node.age || 'Unknown'}
                price={product.node.price || 'Unknown'}
                color="Various"
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p>No products found. Please check your Contentful data.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnimalsSection;
