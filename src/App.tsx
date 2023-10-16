/* This file contains the code for the routes controller */

// Required imports
import React from 'react'; // Import React namespace and its related functions
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import routing-related functions
import { useState } from "react"; // Import functions to control states

// Import reset css
import "@styles/reset.css";
import '@styles/GlobalStyles.css'; // Import style sheet
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import all pages
import Home from '@pages/Home';
import AboutUs from '@pages/AboutUs';
// import Blog from '@pages/Blog';
import ContactUs from '@pages/ContactUs';
import EasterEgg from '@pages/EasterEgg';
import Error404 from '@pages/404';

// Import all components
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';

/**
 * @name App
 * @summary Controls the majority of the web application
 * @returns The web app's elements, including the routes
 */
export default function App() {
  // Variables to indicate which page is currently active
  const [activePage, setActivePage] = useState("Home");

  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-contents">
          <Header activePage={activePage} />

          <Routes>
            <Route path="/" element={<Home setActivePage={setActivePage} />} />
            <Route
              path="/about-us"
              element={<AboutUs setActivePage={setActivePage} />}
            />
            {/* <Route
              path="/blog"
              element={<Blog setActivePage={setActivePage} />}
            /> */}
            <Route
              path="/contact-us"
              element={<ContactUs setActivePage={setActivePage} />}
            />
            <Route
              path="/easter-egg"
              element={<EasterEgg setActivePage={setActivePage} />}
            />
            <Route
              path="*"
              element={<Error404 setActivePage={setActivePage} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
