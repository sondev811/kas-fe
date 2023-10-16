/* This file contains the code to render the page */

// Required imports
import React from "react";
import ReactDOM from "react-dom/client"; // For creating root element
import App from "./App"; // Import main App function

// Create a root element by looking for an element with a 'root' id
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Render the web application
root.render(<App />);
