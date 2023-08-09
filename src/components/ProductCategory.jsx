import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductCategory = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product categories from the FakeStore API
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching product categories:', error));
  }, []);

  useEffect(() => {
    // Fetch products of the selected category from the FakeStore API
    if (selectedCategory) {
      fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error(`Error fetching products of category ${selectedCategory}:`, error));
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 text-white"
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/" className="bg-gradient-to-r from-gray-900 to-red-900 text-white px-4 py-2 rounded-md ml-4">
          Back
        </Link>
      </div>

      {selectedCategory && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Products in {selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <p className='text-white'>___________________________________________________________________________________________________________________________________________________________________________________________</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
