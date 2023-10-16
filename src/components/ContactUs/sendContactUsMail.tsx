/* This file contains the code for the sendMail function for the contact form in the contact us page */

// Required imports
import axios from "axios"; // Used to make HTTP requests for API interaction

/**
 * @name sendContactUsEmail
 * @summary Checks if state variables for the form is filled, then makes an API request to the end point /sendEmail
 * @returns Alerts for success of API request
 */

export default function sendContactUsEmail({
  userFirstName,
  userLastName,
  userEmail,
  userPhoneNo,
  message,
}: {
  userFirstName: string;
  userLastName: string;
  userEmail: string;
  userPhoneNo: string;
  message: string;
}) {
  // Check all inputs are filled to allow sending of email
  if (userFirstName && userLastName && userEmail && userPhoneNo && message) {
    // Send the data to the database first...
    axios
      .post("http://localhost:3001/message", {
        userFirstName,
        userLastName,
        userEmail,
        userPhoneNo,
        message,
      })
      .catch((error) => console.log(error.Message));
    // ...before sending the confirmation email
    axios
      .post("http://localhost:3001/sendContactUsEmail", {
        userFirstName,
        userLastName,
        userEmail,
        userPhoneNo,
        message,
      })
      .catch((error) => console.log(error.Message));
    return true;
  }
  return false;
}
