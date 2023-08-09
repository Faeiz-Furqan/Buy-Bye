export default function FAQSimple() {
    return (
      <>
        {/* FAQ Section: Simple */}
        <div className="m-3 rounded-2xl bg-white dark:text-gray-100 bg-gradient-to-r from-red-900 to-gray-900">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            {/* Heading */}
            <div className="text-center">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                We Answer
              </div>
              <h2 className="text-4xl font-black text-black dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            {/* END Heading */}
  
            {/* FAQ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h4 className="font-semibold mb-2">
                  What are the available payment options?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal for online payments. Cash on delivery (COD) option is also available for select locations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  What is the delivery time for products?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Our standard delivery time is 3-5 business days for domestic orders and 7-10 business days for international orders. However, delivery times may vary based on the product's availability and shipping location.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Is there a warranty for the products?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Yes, all our products come with a 1-year warranty against manufacturing defects. If you encounter any issues with the product during the warranty period, we will provide a free repair or replacement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Can I return a product if I'm not satisfied?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return the product within 30 days for a full refund. Please ensure the product is in its original condition with all accessories and packaging included.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Do you provide customer support for products?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Absolutely! We have a dedicated customer support team available 24/7 to assist you with any product-related queries or issues. You can reach out to us via email, phone, or live chat on our website.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Are software updates available for products?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Yes, we regularly release software updates to enhance the performance and features of our products. These updates are provided free of charge, and you can download them from our website or through the product's app.
                </p>
              </div>
              {/* Add more questions and answers as needed */}
            </div>
            {/* END FAQ */}
  
            {/* Link */}
            <div className="text-center">
              <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                <svg className="hi-mini hi-arrow-top-right-on-square inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" /></svg>
                <span>Go to support center</span>
              </a>
            </div>
            {/* END Link */}
          </div>
        </div>
        {/* END FAQ Section: Simple */}
      </>
    )
  }
  