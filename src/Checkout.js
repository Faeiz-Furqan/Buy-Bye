import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems, setCartItems }) => {
  const deliveryFee = 10;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateGrandTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal <= 100 ? subtotal + deliveryFee : subtotal;
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  return (
    <section className="rounded-lg bg-gray-900 p-2 text-white">
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2 ">
        <div className="bg-gray-800 py-12 md:py-24 rounded-lg">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
            <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Back Button */}
        <Link to="/" className="text-white text-2xl mb-4 block">
          &lt; Back to Home
        </Link>
        </div>
            </div>

            

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-4 py-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-white">{item.title}</h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-300">
                          <div>
                            <dt className="inline">Size:</dt>
                            <dd className="inline">{item.size}</dd>
                          </div>

                          <div>
                            <dt className="inline">Color:</dt>
                            <dd className="inline">{item.color}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex items-center">
                        <button
                          className="rounded-full bg-gray-700 text-white w-6 h-6 flex items-center justify-center"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>

                        <span className="text-lg font-medium text-white mx-2">
                          {item.quantity}
                        </span>

                        <button
                          className="rounded-full bg-gray-700 text-white w-6 h-6 flex items-center justify-center"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>

                        <p className="text-lg font-medium text-white">
                          ${item.price.toFixed(2)}
                        </p>
                        
                        <button
                          className="ml-4 text-red-500"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-12 md:py-24 rounded-lg">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label htmlFor="FirstName" className="block text-xs font-medium text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full rounded-md border-gray-700 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label htmlFor="LastName" className="block text-xs font-medium text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  className="mt-1 w-full rounded-md border-gray-700 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-xs font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full rounded-md border-gray-700 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Phone" className="block text-xs font-medium text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-700 shadow-sm sm:text-sm"
                />
              </div>

              <fieldset className="col-span-6">
                {/* ... (card details) ... */}
              </fieldset>

              <fieldset className="col-span-6">
                {/* ... (billing address) ... */}
              </fieldset>

              <div className="col-span-6 mt-6">
                <p className="text-lg font-medium text-white">Delivery Cost - only applied on orders less than 100$ </p>
                <p className="text-xl font-semibold text-white">${deliveryFee}</p>
                <p className="text-lg font-medium text-white">Subtotal</p>
                <p className="text-2xl font-semibold text-white">
                  ${calculateSubtotal().toFixed(2)}
                </p>
                <p className="text-lg font-medium text-white">Grand Total</p>
                <p className="text-2xl font-semibold text-white">
                  ${calculateGrandTotal().toFixed(2)}
                </p>
              </div>

              <div className="col-span-6 mt-6">
                <button
                  className="block w-full rounded-md bg-gradient-to-r from-red-900 to-gray-900 p-2.5 text-sm text-white transition hover:shadow-lg"
                  onClick={() => {
                    // Handle payment processing logic here
                    alert('Payment Successful!');
                    // Clear cart items after successful payment
                    setCartItems([]);
                  }}
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
