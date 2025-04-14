import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const AnimalCard = ({ 
  image, 
  productId, 
  name, 
  gender, 
  age, 
  price, 
  color 
}) => {
  return (
    <Link to={`/animal/${productId}`} className="block">
      <div className="rounded-xl shadow-md bg-white overflow-hidden flex flex-col p-2 hover:shadow-lg transition-shadow">
        {/* Product Image */}
        <div className="w-full bg-white rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="p-2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            {/* Product Name */}
            <h3 className="font-bold text-base text-dark-blue-80">{name}</h3>
            
            {/* Product Attributes */}
            <div className="flex flex-row w-full">
              <div className="flex gap-1.5 text-neutral-60">
                <span className="text-xs font-medium">Gene:</span>
                <span className="text-xs font-bold">{gender}</span>
              </div>
              <div className="flex gap-1.5 ml-1 text-neutral-60">
                <span className="text-xs font-medium">Age:</span>
                <span className="text-xs font-bold">{age}</span>
              </div>
            </div>
          </div>
          
          {/* Price */}
          <span className="font-bold text-sm text-dark-blue">${price}</span>
        </div>
      </div>
    </Link>
  );
};

AnimalCard.propTypes = {
  image: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string
};

export default AnimalCard;
