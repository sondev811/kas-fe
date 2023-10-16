/* This file contains the code for the Blog page of the application */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title

// Import components
import Head from "@components/Layout/Head";

/**
 * @name Blog
 * @summary Renders the Blog page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the Blog page
 */
export default function Blog({ setActivePage }: { setActivePage: any }) {
  // Set the page's title and active page to Blog
  useEffect(() => {
    document.title = "Blog | Kashy";
    setActivePage("Blog");
  }, [setActivePage]);

  return (
    <main>
      <Head />
    </main>
  );
}
