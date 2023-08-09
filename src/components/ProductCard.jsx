import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity: parseInt(quantity) });
    setQuantity(1); // Reset quantity to 1 after adding to cart
  };

  return (
    <div className="rounded-lg p-4 shadow-lg transform transition-all hover:scale-105 bg-gray-800">
      <div className="font-semibold text-xl mb-2 text-white truncate">{product.title}</div>
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <div className="text-gray-300">${product.price}</div>
      <div className="mt-4">
        <label htmlFor="quantity" className="font-medium text-white">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          className="ml-2 p-2 border rounded-md w-16 bg-gray-700 text-white"
          min="1"
        />
        <button
          className="bg-gradient-to-r from-gray-900 to-red-900 text-white px-3 py-1 rounded-md ml-4 sm:px-4 sm:py-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
