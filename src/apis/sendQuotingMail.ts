
/* This file contains the code for the sendMail function for the booking form in the home page */

// Required imports
import { IQuotingForm } from "@interfaces/index";
import axios from "axios"; // Used to make HTTP requests for API interaction

/**
 * @name sendQuotingMail
 * @summary Checks if state variables for the form is filled, then makes an API request to the end point /sendEmail
 * @returns Alerts for success of API request
 */
export default function sendQuotingMail({
  fullName,
  address,
  email,
  phoneNumber,
  registration,
  service,
  comments,
}: IQuotingForm) {
  // Check all inputs are filled to allow sending of email
  if (
    fullName &&
    address &&
    email &&
    phoneNumber &&
    registration &&
    service &&
    comments
  ) {
    // Split the full name into first and last names to fit the input of the database
    let firstName = fullName.split(' ').slice(0, -1).join(' ');
    let lastName = fullName.split(' ').slice(-1).join(' ');
    // Add the quote to the database first...
    axios
      .post("http://localhost:3001/users", {
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
        registration,
        service,
        comments,
      })
      .catch((error) => console.log(error.Message));
    // ..before sending the confirmation message to Kashy
    axios
      .post("http://localhost:3001/sendQuotingEmail", {
        fullName,
        address,
        email,
        phoneNumber,
        registration,
        service,
        comments,
      })
      .catch((error) => console.log(error.Message));
    return true;
  }
  return false;
}
