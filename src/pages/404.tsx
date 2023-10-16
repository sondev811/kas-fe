/* This file contains the code for the 404 page of the application */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title
import { Link } from "react-router-dom"; // Import Link to link the button back home

// Import style sheet
import "@styles/404.css";

// Import components
import Head from "@components/Layout/Head";
import TitleImg from "@components/Error404/TitleImg";

/**
 * @name Error404
 * @summary Renders the Error 404 page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the Error 404 page
 */
export default function Error404({ setActivePage }: { setActivePage: any }) {
  // Set the page's title and active page to 404 page
  useEffect(() => {
    document.title = "404 Error Page | Kashy";
    setActivePage("404");
  }, [setActivePage]);

  return (
    <main className = "error404-contents">
      <Head />
      {/* Error 404 SVG icon copied from the original Kashy website on Wix */}
      <div className="icon-container">
        <TitleImg />
      </div>
      
      <div className = "error404-message">
        <h1 id="whoops">Whoops! We Can’t Find This Page</h1>
        
        <p id="error-cta">
          Our Kashy mechanics are working to find the problem but you can help.<br></br>
          Check the website URL and try again, or find out more on our homepage.
        </p>
      </div>

      <Link to="/">
        <button id = "go-back-home">
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
