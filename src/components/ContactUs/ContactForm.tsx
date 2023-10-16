/* This file contains the code for the contact form of the Contact Us page */

// Required imports
import Button from "@components/Button";
import React, { useState } from "react"; // For storing the inputed information
import swal from "sweetalert"; // For custom alerts

// Components
import sendContactUsEmail from "./sendContactUsMail"; // SendMail function

/**
 * @name ContactForm
 * @summary Renders the contact form on the right of the Contact Us page
 * @returns HTML elements of the contact form
 */

export default function ContactForm() {
  // Set the first name
  const [userFirstName, setFirstName] = useState("");
  // Set the last name
  const [userLastName, setLastName] = useState("");
  // Set the email
  const [userEmail, setEmail] = useState("");
  // Set the phone number
  const [userPhoneNo, setPhoneNo] = useState("");
  // Set the message
  const [message, setMessage] = useState("");

  // Handler functions
  const handlePhoneNumberChange = (e: any) => {
    const inputPhoneNumber = e.target.value;
    const phoneNumberValue = inputPhoneNumber
      .replace(/\D/g, "") // Remove non-numeric characters
      .substring(0, 10); // Limit to 10 digits
    setPhoneNo(phoneNumberValue);
  };

  // Submit form
  const submitForm = () => {
    if (
      sendContactUsEmail({
        userFirstName,
        userLastName,
        userEmail,
        userPhoneNo,
        message,
      })
    ) {
      swal({
        title: "Form Sent",
        icon: "success",
      });
    } else {
      swal({
        title: "Error",
        text: "An error has occured while sending your message!",
        icon: "error",
      });
    }
  };

  return (
    <section className="contact-us-form">
      <h2>Contact Us</h2>
      <form id="contact-form" autoComplete="off">
        <div>
          {/* <!-- Form Group 1: Full Name --> */}
          <div className="form-group">
            <input
              id="form__firstName"
              type="text"
              placeholder="First Name"
              className="clear-border-right"
              value={userFirstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* <!-- Form Group 2: Last Name --> */}
          <div className="form-group">
            <input
              id="form__lastName"
              type="text"
              placeholder="Last Name"
              value={userLastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div>
          {/* <!-- Form Group 3: Email --> */}
          <div className="form-group">
            <input
              id="form__email"
              type="email"
              placeholder="Email"
              className="clear-border-right"
              value={userEmail}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <!-- Form Group 4: Phone Number --> */}
          <div className="form-group">
            <input
              id="form__phoneNo"
              type="tel"
              placeholder="Phone"
              pattern="0[0-9]{3}[0-9]{3}[0-9]{3}"
              value={userPhoneNo}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
        {/* <!-- Form Group 5: Comments --> */}
        <div className="form-group">
          <input
            id="form__message"
            type="text"
            placeholder="Type your message here..."
            value={message}
            style={{ height: "126px" }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {/* <!-- Submit button --> */}
        <div className="form-group submit-box">
          <Button
            type="button"
            buttonName="Submit"
            size="small"
            rounded="half"
            onClick={() => submitForm()}
          />
        </div>
      </form>
    </section>
  );
}
