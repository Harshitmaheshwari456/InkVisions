import React, { useState } from "react";
import Navbar from "./utlis/navbar";
import Home from "./pages/home";
import Footer from "./utlis/footer";
import Lottie from "react-lottie";
import * as animationData from "./animations/animations.json";

import ThemeToggle from './utlis/themetoggler';
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";


const App = () => {
  const [youtubeID] = useState("eGSUvfVt3k4");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  // Modified state to handle multiple pages
  // 'landing' - Landing page
  // 'home' - Home page
  // 'about', 'services', 'pricing', 'contact' - Other pages
  const [currentPage, setCurrentPage] = useState('landing');

  // Function to render the correct page based on currentPage state
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      case 'landing':
      default:
        return (
          <div>
            <div className="flex flex-wrap m-3 justify-around align-middle">
              <div className="max-w-xs py-6 my-9">
                <div className="text-4xl font-bold">
                  Painting Stories with Page Palette
                </div>
                <div className="middle py-5">
                  Page Palette brings your eBook to life by generating images from
                  selected paragraphs, enriching your reading experience.
                </div>
                <div className="last flex my-4">
                  <div className="btn ">
                    <button
                      onClick={() => {
                        setCurrentPage('home');
                      }}
                      className="text-white px-6 py-3 bg-yellow-600 dark:bg-teal-700 hover:bg-slate-800 hover:dark:bg-teal-800 rounded  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm text-center inline-flex items-center"
                    >
                      Get Started
                    </button>
                  </div>
                  <div className="link flex">
                    <a
                      className="font-semibold py-3 px-6 hover:underline"
                      href="https://www.youtube.com/watch?v=eGSUvfVt3k4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Video Tutorial
                    </a>
                  </div>
                </div>
              </div>
              <div className="lotte">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
            </div>
            <div className="p-6 bg-yellow-50 dark:bg-teal-900 ">
              <div className="font-bold flex justify-center text-2xl">
                Product was Built Specifically for You
              </div>
              <div className="flex p-5 justify-evenly flex-wrap ">
                <div className="card p-5">
                  <div className="max-w-sm p-6  ">
                    <svg
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.339844"
                        width="50"
                        height="50"
                        rx="19"
                        fill="#123"
                      />
                      <path
                        d="M29.1161 26.9381L19.9732 17.7952C19.8661 17.6791 19.7232 17.6256 19.5714 17.6256C19.5 17.6256 19.4196 17.6434 19.3571 17.6702C19.1429 17.7595 19 17.9648 19 18.197V31.6256C19 31.8577 19.1429 32.0631 19.3571 32.1523C19.4196 32.1791 19.5 32.197 19.5714 32.197C19.7232 32.197 19.8661 32.1345 19.9732 32.0273L22.7589 29.2416L24.4643 33.2773C24.5893 33.5631 24.9196 33.7059 25.2143 33.5809L26.7946 32.9113C27.0804 32.7863 27.2232 32.4559 27.0982 32.1613L25.3036 27.9113H28.7143C28.9464 27.9113 29.1518 27.7684 29.2411 27.5541C29.3304 27.3488 29.2857 27.0988 29.1161 26.9381Z"
                        fill="white"
                      />
                    </svg>

                    <h5 className="mb-2 py-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      Auto Selection
                    </h5>

                    <p className="mb-3 font-normal text-sm max-w-40 text-gray-500 dark:text-gray-400">
                      No need to copy the text just select it XD
                    </p>
                  </div>
                </div>
                <div className="card p-5">
                  <div className="max-w-sm p-6  ">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        clipPath="url(#clip0_18_1547)"
                        filter="url(#filter0_d_18_1547)"
                      >
                        <rect
                          x="4"
                          y="0.339844"
                          width="50"
                          height="50"
                          rx="19"
                          fill="#22343D"
                        />
                        <path
                          d="M29.4821 24.9827L30.6518 25.5273L32.3929 25.0095V23.7952C32.3929 21.7327 30.6518 20.0809 28.5714 20.0809C26.5 20.0809 24.75 21.7238 24.75 23.7684V29.3041C24.75 29.8131 24.3393 30.2148 23.8393 30.2148C23.3393 30.2148 22.9286 29.8131 22.9286 29.3041V26.9648H20C20 29.3131 20 29.3398 20 29.3398C20 31.4559 21.7143 33.1702 23.8304 33.1702C25.9286 33.1702 27.6607 31.4827 27.6607 29.3934V23.9291C27.6607 23.4291 28.0714 23.0184 28.5714 23.0184C29.0714 23.0184 29.4821 23.4291 29.4821 23.9291V24.9827ZM34.2143 26.9648V29.4202C34.2143 29.9202 33.8036 30.322 33.3036 30.322C32.8036 30.322 32.3929 29.9202 32.3929 29.4202V27.0095L30.6518 27.5273L29.4821 26.9827V29.3756C29.4821 31.4738 31.2054 33.1702 33.3125 33.1702C35.4286 33.1702 37.1429 31.4559 37.1429 29.3398C37.1429 29.3398 37.1429 29.3131 37.1429 26.9648H34.2143Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_18_1547"
                          x="0"
                          y="0.339844"
                          width="58"
                          height="58"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_18_1547"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_18_1547"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_18_1547">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="translate(4 0.339844)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <h5 className="mb-2 py-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      Choose model
                    </h5>

                    <p className="mb-3 font-normal text-sm max-w-40 text-gray-500 dark:text-gray-400">
                      No need to copy the text just select it XD
                    </p>
                  </div>
                </div>
                <div className="card p-5">
                  <div className="max-w-sm p-6  ">
                    <svg
                      width="50"
                      height="51"
                      viewBox="0 0 50 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.339844"
                        width="50"
                        height="50"
                        rx="19"
                        fill="#22343D"
                      />
                      <path
                        d="M25 33.4827C25.1429 33.4827 25.2857 33.4291 25.3929 33.322L30.9554 27.9648C31.0357 27.8845 33 26.0898 33 23.947C33 21.3309 31.4018 19.7684 28.7321 19.7684C27.1696 19.7684 25.7054 21.0006 25 21.697C24.2946 21.0006 22.8304 19.7684 21.2679 19.7684C18.5982 19.7684 17 21.3309 17 23.947C17 26.0898 18.9643 27.8845 19.0357 27.947L24.6071 33.322C24.7143 33.4291 24.8571 33.4827 25 33.4827Z"
                        fill="white"
                      />
                    </svg>

                    <h5 className="mb-2 py-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      Send to Create
                    </h5>

                    <p className="mb-3 font-normal text-sm max-w-40 text-gray-500 dark:text-gray-400">
                      Once you have selected the text press send to get awesome
                      results
                    </p>
                  </div>
                </div>
                <div className="card p-5">
                  <div className="max-w-sm p-6  ">
                    <svg
                      width="58"
                      height="59"
                      viewBox="0 0 58 59"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        clipPath="url(#clip0_18_1561)"
                        filter="url(#filter0_d_18_1561)"
                      >
                        <rect
                          x="4"
                          y="0.339844"
                          width="50"
                          height="50"
                          rx="19"
                          fill="#22343D"
                        />
                        <path
                          d="M34.5714 19.7684H35.4286C35.5893 19.7684 35.7143 19.6434 35.7143 19.4827V18.9113C35.7143 18.7506 35.5893 18.6256 35.4286 18.6256H22.2857C22.125 18.6256 22 18.7506 22 18.9113V19.4827C22 19.6434 22.125 19.7684 22.2857 19.7684H23.1429C23.1429 23.072 24.7232 25.4648 26.4732 26.6256C24.7232 27.7863 23.1429 30.1791 23.1429 33.4827H22.2857C22.125 33.4827 22 33.6077 22 33.7684V34.3398C22 34.5006 22.125 34.6256 22.2857 34.6256H35.4286C35.5893 34.6256 35.7143 34.5006 35.7143 34.3398V33.7684C35.7143 33.6077 35.5893 33.4827 35.4286 33.4827H34.5714C34.5714 30.1791 32.9911 27.7863 31.2411 26.6256C32.9911 25.4648 34.5714 23.072 34.5714 19.7684ZM33.4286 19.7684C33.4286 21.072 33.1339 22.2238 32.6696 23.197H25.0446C24.5804 22.2238 24.2857 21.072 24.2857 19.7684H33.4286ZM32.9196 30.6256H24.7946C25.4554 28.9023 26.6429 27.6791 27.8304 27.197H29.8839C31.0714 27.6791 32.2589 28.9023 32.9196 30.6256Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_18_1561"
                          x="0"
                          y="0.339844"
                          width="58"
                          height="58"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_18_1561"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_18_1561"
                            result="shape"
                          />
                        </filter>
                        <clipPath id="clip0_18_1561">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="translate(4 0.339844)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <h5 className="mb-2 py-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      5 min cooldown
                    </h5>

                    <p className="mb-3 font-normal text-sm max-w-40 text-gray-500 dark:text-gray-400">
                      it is adviced to wait 5 min before sending another request
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center m-5 py-8">
              <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  How Page Palette Works
                </h2>
                <div className="relative overflow-hidden pb-[56.25%] rounded-lg shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
                    title="Page Palette Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                  ></iframe>
                </div>
                <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
                  Learn how to use Page Palette to transform your eBook reading
                  experience
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  // Share the page navigation function with Navbar
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white border-gray-200 dark:bg-teal-950 dark:text-white">
      {/* Pass the navigation function to Navbar */}
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      
      {/* Render the appropriate page based on state */}
      {renderPage()}
      
      <Footer />
    </div>
  );
};

export default App;