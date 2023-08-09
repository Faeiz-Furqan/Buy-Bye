import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Navbar = ({ cartItemCount, products, onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleRemoveSelectedProduct = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Show the recommended products list if the query is not empty, otherwise hide it
    setRecommendedProducts(query ? filteredProducts : []);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setRecommendedProducts([]);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="m-2 rounded-2xl bg-gradient-to-r from-red-900 to-gray-900 animate-wave p-4">
      <div className="container mx-auto md:flex md:justify-between md:items-center relative">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-semibold">
          BUY-BYE !!!
        </Link>

        {/* Desktop Menu */}
        <div className="md:flex items-center space-x-4 hidden">
          {/* Search */}
          <div className="bg-gradient-to-r from-red-700 to-gray-700 rounded-lg p-2 flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              className=" w-48 bg-white focus:outline-none rounded-md px-2"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 text-gray-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>

            {/* Recommended products dropdown */}
            {recommendedProducts.length > 0 && (
              <div className=" text-white absolute top-10 right-0 bg-gradient-to-r from-red-900 to-gray-900 w-48 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                {recommendedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="cursor-pointer p-2 hover:bg-gray-100 hover:text-black"
                    onClick={() => handleProductClick(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-8 h-8 inline-block mr-2"
                    />
                    <span>{product.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart icon with item count */}
          <div className="text-white relative">
            <Link to="../Checkout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17l2 2 2-2M3 5a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 15v-3a3 3 0 00-3-3H8a3 3 0 00-3 3v3"
                />
              </svg>
            </Link>
            {cartItemCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </div>
            )}
          </div>

                {/* About Us */}
        <Link to="../about" className="text-white font-medium">
          About Us
        </Link>
          {/* Category */}
          <Link to="/categories" className="text-white font-medium">
            Category
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4 mt-4">
          <button
            className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold"
            onClick={handleMobileMenuToggle}
          >
            Menu
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-10 right-0 bg-white w-48 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
             <div className="bg-gradient-to-r from-red-700 to-gray-700 rounded-lg p-2 flex items-center relative">
            <input
              type="text"
              placeholder="Search products..."
              className=" w-48 bg-white focus:outline-none rounded-md px-2"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 text-gray-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>

            {/* Recommended products dropdown */}
            {recommendedProducts.length > 0 && (
              <div className=" text-white absolute top-10 right-0 bg-gradient-to-r from-red-900 to-gray-900 w-48 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                {recommendedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="cursor-pointer p-2 hover:bg-gray-100 hover:text-black"
                    onClick={() => handleProductClick(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-8 h-8 inline-block mr-2"
                    />
                    <span>{product.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart icon with item count */}
          <div className="text-Black relative">
            <Link to="../Checkout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17l2 2 2-2M3 5a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 15v-3a3 3 0 00-3-3H8a3 3 0 00-3 3v3"
                />
                Cart-
              </svg>
            </Link>
            {cartItemCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </div>
            )}
          </div>
              <Link
                to="/categories"
                className="block text-gray-800 hover:bg-gray-100 px-4 py-2"
              >
                Category
              </Link>
              <Link
                to="/about"
                className="block text-gray-800 hover:bg-gray-100 px-4 py-2"
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Render the selected product details */}
      {selectedProduct && (
        <div className="container mx-auto mt-8">
                    {/* Add a cross-rounded button to remove the selected item */}
                    <button
            className="absolute top-30 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer"
            onClick={handleRemoveSelectedProduct}
          >
            X
          </button>
          <ProductCard product={selectedProduct} onAddToCart={onAddToCart} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
