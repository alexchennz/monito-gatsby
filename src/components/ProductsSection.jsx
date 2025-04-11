import React from 'react';
import ProductCard from './ProductCard';
import productImage from '../images/product-image.png';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaChevronRight } from "react-icons/fa";


const ProductsSection = () => {
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
              url
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

  //   {
  //     id: 'MO231',
  //     name: 'Pomeranian White',
  //     gender: 'Male',
  //     age: '2 months',
  //     price: '4,500',
  //     image: productImage,
  //     color: 'White'
  //   },
  //   {
  //     id: 'MO502',
  //     name: 'Poodle Tiny Yellow',
  //     gender: 'Female',
  //     age: '3 months',
  //     price: '3,900',
  //     image: productImage,
  //     color: 'Yellow'
  //   },
  //   {
  //     id: 'MO102',
  //     name: 'Alaskan Malamute',
  //     gender: 'Male',
  //     age: '2 months',
  //     price: '5,500',
  //     image: productImage,
  //     color: 'Gray'
  //   },
  //   {
  //     id: 'MO512',
  //     name: 'Golden Retriever',
  //     gender: 'Female',
  //     age: '3 months',
  //     price: '4,200',
  //     image: productImage,
  //     color: 'Golden'
  //   },
  //   {
  //     id: 'MO513',
  //     name: 'Poodle Tiny Yellow',
  //     gender: 'Female',
  //     age: '3 months',
  //     price: '3,900',
  //     image: productImage,
  //     color: 'Yellow'
  //   },
  //   {
  //     id: 'MO601',
  //     name: 'Siberian Husky',
  //     gender: 'Male',
  //     age: '4 months',
  //     price: '5,200',
  //     image: productImage,
  //     color: 'Gray & White'
  //   },
  //   {
  //     id: 'MO315',
  //     name: 'French Bulldog',
  //     gender: 'Female',
  //     age: '2 months',
  //     price: '6,100',
  //     image: productImage,
  //     color: 'Fawn'
  //   },
  //   {
  //     id: 'MO742',
  //     name: 'Labrador Retriever',
  //     gender: 'Male',
  //     age: '3 months',
  //     price: '4,800',
  //     image: productImage,
  //     color: 'Chocolate'
  //   },
  //   {
  //     id: 'MO423',
  //     name: 'Shiba Inu',
  //     gender: 'Female',
  //     age: '2 months',
  //     price: '5,300',
  //     image: productImage,
  //     color: 'Red'
  //   },
  //   {
  //     id: 'MO157',
  //     name: 'Corgi',
  //     gender: 'Male',
  //     age: '2 months',
  //     price: '4,700',
  //     image: productImage,
  //     color: 'Tri-color'
  //   },
    
  // ];

  // Access the edges array from the GraphQL data
  const products = data?.allContentfulMonitoAnimal?.edges || [];
  console.log("Products data:", products);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row justify-between items-center">
          <div>
            <p className="text-black text-sm">Whats new?</p>
            <h3 className="text-clamp-h3 font-bold text-dark-blue-80 mb-4">Take a look at some of our pets</h3>
          </div>
          <div>

          <Link to='#' className=" text-dark-blue text-sm leading-none py-3 px-7 rounded-3xl hover:bg-white transition-colors flex items-center gap-2 ring-2 ring-dark-blue">
              <span>View more</span>
              <FaChevronRight className="size-3" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center gap-2 sm:gap-6">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.node.image?.url || productImage}
                productId={`MO${index + 100}`}
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

export default ProductsSection;
