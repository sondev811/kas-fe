/* This file contains the code for the Home page */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title

// Import style sheets
import "@styles/Home/Hero.css"; // Style sheet for the Hero section
import "@styles/Home/Reviews.css"; // Style sheet for the Reviews section
import "@styles/Home/Media.css"; // Style sheet for the Media section
import "@styles/Home/CTA.css"; // Style sheet for the CTA section / Partner and Subscribe section

// Import components
import Head from "@components/Layout/Head";
import Hero from "@components/Home/Hero";
import Reviews from "@components/Home/Reviews";
import Media from "@components/Home/Media";
import CallToActions from "@components/Home/CTA";

/**
 * @name Home
 * @summary Renders the Home page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the Home page
 */
export default function Home({ setActivePage }: { setActivePage: any }) {
  // Set the page's title and active page to Home
  useEffect(() => {
    document.title = "Kashy Australia | Find an Honest Mechanic";
    setActivePage("Home");
  }, [setActivePage]);

  return (
    <main>
      <Head />
      <Hero />
      <Reviews />
      <Media />
      <CallToActions />
    </main>
  );
}
