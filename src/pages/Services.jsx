import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          InkVisions offers cutting-edge AI solutions to transform your eBook
          experience with vibrant visualizations and interactive elements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-yellow-50 dark:bg-teal-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="bg-yellow-600 dark:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11H16M8 15H12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Text-to-Image Generation</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Transform paragraphs from your eBook into stunning visual
            representations. Our AI analyzes text context to create relevant and
            engaging imagery.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Multiple style options
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              High-quality resolution
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Context-aware generation
            </li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="bg-yellow-50 dark:bg-teal-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="bg-yellow-600 dark:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8H15.01M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 12C19 16.4183 15.4183 20 11 20C6.58172 20 3 16.4183 3 12C3 7.58172 6.58172 4 11 4C15.4183 4 19 7.58172 19 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Style Customization</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Choose from various artistic styles to match the tone and mood of
            your content. From photorealistic to abstract, we have styles for
            every narrative.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              20+ artistic styles
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Style intensity adjustment
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Custom style uploads
            </li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="bg-yellow-50 dark:bg-teal-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="bg-yellow-600 dark:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Image Collection</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Create and save a personalized gallery of images from your favorite
            books. Export and share your visual interpretations with friends.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Cloud storage integration
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Organizing by books/chapters
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              One-click export options
            </li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="bg-yellow-50 dark:bg-teal-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="bg-yellow-600 dark:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7H6C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H15C16.1046 20 17 19.1046 17 18V15M15 4H20M20 4V9M20 4L9 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Image Sharing</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Easily share your generated images on social media or with your
            reading circle. Connect your reading experience with your social
            networks.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Major social platforms integration
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Direct message sharing
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Book club collaboration features
            </li>
          </ul>
        </div>

        {/* Service 5 */}
        <div className="bg-yellow-50 dark:bg-teal-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="bg-yellow-600 dark:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">Auto Selection</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our intelligent text selection feature automatically identifies
            descriptive passages that would translate well into images.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Smart passage identification
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Customizable selection criteria
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              One-click processing
            </li>
          </ul>
        </div>

        {/* Service 6 */}
        <div className="bg-yellow-50 dark:bg-teal-900 rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
          <div className="bg-yellow-600 dark:bg-teal-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4 15C19.7 14.7 20 14.2 20 13.9C20 13.4 20 13 19.9 12.6C19.7 11.4 19.1 10.3 18.2 9.5C17.3 8.7 16.2 8.1 14.9 8M15 5H17C17.6 5 18 5.4 18 6V8C18 8.3 17.9 8.5 17.7 8.7L16 10.4C15.8 10.3 15.7 10.2 15.5 10.1C15.3 10 15.1 10 14.9 9.9C13.5 9.5 12 9.8 10.8 10.8L8.3 8.3C8.1 8.1 8 7.9 8 7.6V6C8 5.4 8.4 5 9 5H11M16 19.4C15.7 19.4 15.4 19.3 15.1 19.1C14.7 18.9 14.2 18.7 13.8 18.6C13.6 18.5 13.5 18.5 13.3 18.5C13.1 18.5 13 18.5 12.8 18.6C12.4 18.7 11.9 18.9 11.5 19.1C11.2 19.3 10.9 19.4 10.6 19.4C10.3 19.4 10 19.3 9.7 19.1C9.3 18.9 8.8 18.7 8.4 18.6C8.2 18.5 8.1 18.5 7.9 18.5C7.7 18.5 7.6 18.5 7.4 18.6C7 18.7 6.5 18.9 6.1 19.1C5.8 19.3 5.5 19.4 5.2 19.4C4.6 19.4 4 19 4 18.4V14C4 11.3 6.2 9.1 9 9.1H10.5C11.9 9.1 13.3 9.8 14.2 10.9L19.1 15.8C19.3 16 19.5 16.2 19.6 16.5C19.8 16.7 19.9 17 19.9 17.3C19.9 18 19.4 18.6 18.7 18.9C18.6 19.2 18.1 19.4 17.6 19.4C17.3 19.4 17 19.3 16.7 19.1C16.3 18.9 15.8 18.7 15.4 18.6C15.2 18.5 15.1 18.5 14.9 18.5C14.7 18.5 14.6 18.5 14.4 18.6C14 18.7 13.5 18.9 13.1 19.1C12.8 19.3 12.5 19.4 12.2 19.4H16Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">AI Model Selection</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Choose from multiple AI models optimized for different types of
            content. Select models specialized for landscapes, characters,
            abstract concepts, and more.
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Specialized AI models
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Model comparison tool
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600 dark:text-teal-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Regular model updates
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 dark:bg-teal-900 p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Reading Experience?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of readers who have enhanced their eBook experience
            with InkVisions.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-600 dark:bg-teal-700 hover:bg-yellow-700 dark:hover:bg-teal-800 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
