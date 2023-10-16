/* This file contains the code for the contact form of the Contact Us page */

// Required imports
import Button from "@components/Button";
import React, { useState } from "react"; // For storing the inputed information
import swal from "sweetalert"; // For custom alerts

// Components
import sendContactUsEmail from "./sendContactUsMail"; // SendMail function
import { useFormik } from "formik";
import { validateContactForm } from "@utils/utils";

/**
 * @name ContactForm
 * @summary Renders the contact form on the right of the Contact Us page
 * @returns HTML elements of the contact form
 */

export default function ContactForm() {

  const initialValues = {
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhoneNo: '',
    message: ''
  }

  const formik = useFormik({
    initialValues,
    validate: validateContactForm,
    onSubmit: () => console.log('submit')
  })

  // Handler functions
  const handlePhoneNumberChange = (e: any) => {
    const inputPhoneNumber = e.target.value;
    const phoneNumberValue = inputPhoneNumber
      .replace(/\D/g, "") // Remove non-numeric characters
      .substring(0, 10); // Limit to 10 digits
    formik.setFieldValue('userPhoneNo',phoneNumberValue);
  };

  // Submit form
  const submitForm = () => {
    const body = formik.values;
    // viết sai bất đồng bộ, luôn trả về true
    const isSuccessRes = sendContactUsEmail(body);
    if (isSuccessRes) {
      swal({
        title: "Form Sent",
        icon: "success",
      });
      return;
    }
    swal({
      title: "Error",
      text: "An error has occured while sending your message!",
      icon: "error",
    });
  };

  const userFirstNameErr = formik.touched.userFirstName && formik.errors.userFirstName;
  const userLastNameErr = formik.touched.userLastName && formik.errors.userLastName;
  const userEmailErr = formik.touched.userEmail && formik.errors.userEmail;
  const userPhoneNoErr = formik.touched.userPhoneNo && formik.errors.userPhoneNo;
  const messageErr = formik.touched.message && formik.errors.message;
  
  const isEmptyForm = () => {
    return !formik.values.userFirstName && 
    !formik.values.userLastName && 
    !formik.values.userEmail &&
    !formik.values.userPhoneNo && 
    !formik.values.message;
  }
  console.log(formik.errors);

  return (
    <section className="contact-us-form">
      <h2>Contact Us</h2>
      <form id="contact-form" autoComplete="off">
        <div>
          {/* <!-- Form Group 1: Full Name --> */}
          <div className="form-group">
            <input
              id="userFirstName"
              name="userFirstName"
              type="text"
              placeholder={userFirstNameErr ? formik.errors.userFirstName : `First Name`}
              className={`clear-border-right ${userFirstNameErr ? 'contact-error' : ''}`}
              value={formik.values.userFirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {/* <!-- Form Group 2: Last Name --> */}
          <div className="form-group">
            <input
              id="userLastName"
              name="userLastName"
              type="text"
              className={`${userLastNameErr ? 'contact-error' : ''}`}
              placeholder={userLastNameErr ? formik.errors.userLastName : `Last Name`}
              value={formik.values.userLastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div>
          {/* <!-- Form Group 3: Email --> */}
          <div className="form-group">
            <input
              id="userEmail"
              name="userEmail"
              type="email"
              placeholder={userEmailErr ? formik.errors.userEmail : `Email`}
              className={`clear-border-right ${userEmailErr ? 'contact-error' : ''}`}
              value={formik.values.userEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {/* <!-- Form Group 4: Phone Number --> */}
          <div className="form-group">
            <input
              id="userPhoneNo"
              name="userPhoneNo"
              type="tel"
              className={`${userPhoneNoErr ? 'contact-error' : ''}`}
              placeholder={userPhoneNoErr ? formik.errors.userPhoneNo : `Phone Number`}
              pattern="0[0-9]{3}[0-9]{3}[0-9]{3}"
              value={formik.values.userPhoneNo}
              onChange={handlePhoneNumberChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        {/* <!-- Form Group 5: Comments --> */}
        <div className="form-group">
          <input
            id="message"
            name="message"
            type="text"
            className={`${messageErr ? 'contact-error' : ''}`}
            placeholder={messageErr ? formik.errors.message : `Type your message here...`}
            value={formik.values.message}
            style={{ height: "126px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {/* <!-- Submit button --> */}
        <div className="form-group submit-box">
          <Button
            type="button"
            buttonName="Submit"
            extendsClass={`${isEmptyForm() || Object.values(formik.errors).length ? 'disabled' : ''}`}
            size="small"
            rounded="half"
            onClick={() => submitForm()}
          />
        </div>
      </form>
    </section>
  );
}
