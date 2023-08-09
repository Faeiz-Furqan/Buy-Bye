import React, { useState,  useEffect } from 'react';
import Navbar from './components/Navbar'; // Update the path based on your directory structure
import ProductList from './components/ProductList';
import FAQSimple from './components/FAQSimple';
import Checkout from './Checkout';
import ProductCategory from './components/ProductCategory';
import AboutUs from './AboutUs'; // Import the AboutUs component

import { Routes, Route } from 'react-router-dom';
import './styeles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]); // Assuming you have the products data available

  const handleSelectCategory = (category) => {
    // Implement the logic for handling the selected category
    console.log('Selected Category:', category);
  };

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        )
      );
    } else {
      // If the product is not in the cart, add it
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  // Fetch product data from the FakeStore API and update the 'products' state
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (<>


<div className="bg-gradient-to-r from-red-700 to-gray-700 py-2">
        {/* Add a class for the Navbar */}
        <Navbar
          cartItemCount={cartItems.length}
          products={products}
          onAddToCart={handleAddToCart}
          className="navbar"
        />

      {/* Pass the 'cartItems' and 'products' props to the Navbar component */}
      <Routes>
      <Route path="/about" element={<AboutUs />} />

        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/categories" element={<ProductCategory onSelectCategory={handleSelectCategory} />} />



      </Routes>
      <ProductList onAddToCart={handleAddToCart} />
      <FAQSimple />
    </div>
    </>
  );
};

export default App;