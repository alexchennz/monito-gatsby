import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productImage from '../images/product-image.png';
import AnimalCard from '../components/AnimalCard';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaChevronRight, FaPaw, FaFilter } from "react-icons/fa";


const PetsPage = () => {
    const data = useStaticQuery(graphql`
        query {
          allContentfulMonitoAnimal(sort: {createdAt: DESC}) {
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
    <main>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-mon-yellow-40 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-clamp-h2 font-bold text-dark-blue-80 mb-4">Our Pets</h1>
          <p className="text-neutral-60 max-w-2xl">
            Browse our selection of lovingly raised pets and find your new best friend today. 
            Each pet comes with complete health documentation and ongoing support.
          </p>
        </div>
      </div>

      
      {/* Pets Grid Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-4 sm:gap-6">
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
                <p>No pets found. Please check back soon for new additions!</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <div className="bg-mon-yellow-40 py-12 mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <FaPaw className="text-dark-blue text-3xl mr-2" />
          </div>
          <h2 className="text-clamp-h3 font-bold text-dark-blue-80 mb-4">Can't find what you're looking for?</h2>
          <p className="text-neutral-60 max-w-2xl mx-auto mb-8">
            Contact our team and we'll help you find the perfect pet companion for your family.
          </p>
          <Link 
            to="/contact" 
            className="bg-dark-blue text-white py-3 px-8 rounded-full hover:bg-dark-blue-60 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PetsPage;

export const Head = () => <title>Pets | Monito</title>;
