/* This file contains the code for the Easter Egg page of the application */

// Required imports
import React, { useEffect } from "react"; // Import React namespace and useEffect to change the page's title

// Import components
import Head from "@components/Layout/Head";

// Import style sheet
import "@styles/EasterEgg.css";

/**
 * @name EasterEgg
 * @summary Renders the Easter Egg page when it is called
 * @params setActivePage Used to signal the current active page to the App function
 * @returns HTML elements of the Easter Egg page
 */
export default function EasterEgg({ setActivePage }: { setActivePage: any }) {
    // Set the page's title and active page to 404 page
    useEffect(() => {
        document.title = "Easter Egg | Kashy";
        setActivePage("Easter Egg");
    }, [setActivePage]);

    return (
        <main className = "easter-egg-contents">
            <Head />
            <div className = "secret-message">
                <p
                    id = "top-text"
                >
                    OH NO!<br></br>YOU'VE FOUND OUR SECRET PAGE!
                </p>
                <p
                    id = "bottom-text"
                >
                    It's a shame you haven't found out the most interesting thing about us yet. It's something that the best mechanics keep in their spanner drawer.
                </p>
            </div>
        </main>
    )
}