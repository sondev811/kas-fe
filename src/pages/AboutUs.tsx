/* This file contains the code for the About Us page */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title

// Import components
import Head from "@components/Layout/Head";
import AboutUsInfo from "@components/AboutUs/AboutUsInfo";

/**
 * @name AboutUs
 * @summary Renders the About Us page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the About Us page
 */
export default function AboutUs({ setActivePage }: { setActivePage: any }) {
  // Set the page's title and active page to Home
  useEffect(() => {
    document.title = "About Us | Kashy";
    setActivePage("About us");
  }, [setActivePage]);

  return (
    <main>
      <Head />
      <AboutUsInfo />
    </main>
  );
}
