/* This file contains the code for the Contact Us page of the application */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect function to change the page's title
import "@styles/ContactUs.css"; // Import style sheet

// Import components
import Head from "@components/Layout/Head";
import ContactInfo from "@components/ContactUs/ContactInfo";
import ContactForm from "@components/ContactUs/ContactForm";

/**
 * @name ContactUs
 * @summary Renders the Contact Us page when it is called
 * @param setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the ContactUs page
 */
export default function ContactUs({ setActivePage }: { setActivePage: any }) {
  // Set the page's title and active page to ContactUs
  useEffect(() => {
    document.title = "Contact Us | Kashy";
    setActivePage("Contact us");
  }, [setActivePage]);

  return (
    <main>
      <Head />
      <div className="contact-us">
        <div className="container">
          <div className="contact-us__inner">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
