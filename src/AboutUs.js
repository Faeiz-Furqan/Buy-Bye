import React from 'react';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-red-700 to-gray-700 text-white">
      {/* Navbar */}
     

      {/* About Us Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Back Button */}
        <Link to="/" className="text-white text-2xl mb-4 block">
          &lt; Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-semibold mb-8">About Us</h1>
        <p className="text-lg md:text-xl">
          Welcome to Buy - Bye, your one-stop shop for all your favorite products! We are dedicated
          to providing the best shopping experience to our customers, offering a wide range of high-quality
          products at affordable prices.
        </p>
        <p className="text-lg md:text-xl mt-4">
          Our mission is to make online shopping easy, enjoyable, and convenient. With a vast selection
          of products across various categories, you can find everything you need right here on our website.
        </p>
        <p className="text-lg md:text-xl mt-4">
          At Buy - Bye, we prioritize customer satisfaction above all else. Our team is committed to providing
          excellent customer service and ensuring that every purchase you make is a pleasant one.
        </p>
        <p className="text-lg md:text-xl mt-4">
          Thank you for choosing Buy - Bye for all your shopping needs. We look forward to serving you and
          providing you with the best products and services.
        </p>

        {/* Our Values */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Values</h2>
          <ul className="text-lg md:text-xl list-disc pl-8">
            <li>Customer Satisfaction: Our customers' happiness is our top priority.</li>
            <li>Quality Products: We offer only the best quality products.</li>
            <li>Transparency: We believe in open and honest communication.</li>
            <li>Reliability: You can count on us for a smooth shopping experience.</li>
            <li>Community: We strive to build a supportive and inclusive community.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Us</h2>
          <p className="text-lg md:text-xl">
            There are many reasons to choose Buy - Bye for your online shopping needs. Here are just a few:
          </p>
          <ul className="text-lg md:text-xl list-disc pl-8">
            <li>Wide Selection: We offer a vast range of products to suit every taste and need.</li>
            <li>Competitive Prices: Our prices are competitive, making shopping affordable.</li>
            <li>Secure Payment: Your payment information is safe and secure with us.</li>
            <li>Fast Shipping: We strive to deliver your orders as quickly as possible.</li>
            <li>Responsive Support: Our customer support team is ready to assist you 24/7.</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl">
            Have questions or feedback? We'd love to hear from you! Reach out to our support team at
            support@buy-bye.com or give us a call at +1 (800) 123-4567.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
