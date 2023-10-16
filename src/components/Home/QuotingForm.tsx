/* This file contains the code for the Quoting Form section of the Home page */

// Required imports
import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { sendQuotingMail } from "./sendQuotingMail"; // Used for sendMail function

// Import components
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@styles/Home/QuotingForm.css";
import Button from "@components/Button";
import { scrollDirection } from "@constants/Constant";
import swal from "sweetalert"; // Custome Alert Design
import { useFormik } from "formik";
import { capitalizeWords, validateQuoteForm } from "@utils/utils";
/**
 * @name QuotingForm
 * @summary Renders the Quoting Form section of the Home page when it is called
 * @returns HTML elements of the Quoting Form section
 */

interface IProps {
  isActiveForm: boolean;
  setIsActiveForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuotingForm(props: IProps) {
  // Code section to check if the form is on the screen or not
  const { isActiveForm, setIsActiveForm } = props;

  const formRef = useRef<HTMLDivElement | null>(null);
  const scrollDirectionRef = useRef<string | null>(null);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isShowScrollForm, setIsShowScrollForm] = useState(false);
  const [termsAndCondition, setTermsAndCondition] = useState(false);

  useEffect(() => {
    const scrollContainer = formRef.current;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollContainer) {
        const { offsetTop } = scrollContainer;
        const isScrollingDown = scrollTop > offsetTop;

        if (scrollDirectionRef.current === null) {
          scrollDirectionRef.current = isScrollingDown
            ? scrollDirection.down
            : scrollDirection.up;
        }

        if (
          isScrollingDown &&
          scrollDirectionRef.current !== scrollDirection.down
        ) {
          setIsShowBtn(true);
          scrollDirectionRef.current = scrollDirection.down;
        }
        if (
          !isScrollingDown &&
          scrollDirectionRef.current !== scrollDirection.up
        ) {
          setIsShowBtn(false);
          setIsShowScrollForm(false);
          scrollDirectionRef.current = scrollDirection.up;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const initialValues = {
    fullName: '',
    address: '',
    email: '',
    phoneNumber: '',
    registration: '',
    service: '',
    comments: ''
  }

  const formik = useFormik({
    initialValues,
    validate: validateQuoteForm,
    onSubmit: () => console.log('submit')
  })

  // Close form when the close button is pressed
  const onCloseForm = () => {
    setIsActiveForm(false);
  };

  //Submit form cũ
  // const submitForm = () => {
  //   const body = formik.values;
  //   if (
  //     sendQuotingMail(body)
  //   ) {
  //     swal({
  //       title: "Quote Sent",
  //       icon: "success",
  //     });
  //   } else {
  //     swal({
  //       title: "Error",
  //       text: "An error has occured while sending your quote!",
  //       icon: "error",
  //     });
  //   }
  // };
  
  // Submit form mới
  const submitForm = async () => {
    try {
      if (Object.values(formik.errors).length) return;
      const body = formik.values;
      await sendQuotingMail(body); 
      swal({
        title: "Quote Sent",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: "An error has occured while sending your quote!",
        icon: "error",
      });
    }
  };


  // Handler functions
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = e.target.value;
    const phoneNumberValue = inputPhoneNumber
      .replace(/\D/g, "") // Remove non-numeric characters
      .substring(0, 10); // Limit to 10 digits
    formik.setFieldValue('phoneNumber', phoneNumberValue);
  };

  const handleComments = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputComments = e.target.value;
    const commentsValue = inputComments.substring(0, 255);
    formik.setFieldValue('comments', commentsValue);
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAddress = e.target.value;
    const addressValue = capitalizeWords(inputAddress);
    formik.setFieldValue('address', addressValue);
  }

  const fullNameError = formik.touched.fullName && formik.errors.fullName;
  const addressError = formik.touched.address && formik.errors.address;
  const registrationError = formik.touched.registration && formik.errors.registration;
  const emailError = formik.touched.email && formik.errors.email;
  const phoneNumberError = formik.touched.phoneNumber && formik.errors.phoneNumber;
  const commentsError = formik.touched.comments && formik.errors.comments;

  const isEmptyForm = () => {
    return !formik.values.fullName && 
    !formik.values.email && 
    !formik.values.address &&
    !formik.values.registration && 
    !formik.values.phoneNumber &&
    !formik.values.comments
  }

  return (
    <>
    <div
      className={`form ${isActiveForm ? "activeForm" : ""} ${
        isShowBtn ? "formScroll" : ""
      } ${isShowScrollForm ? "activeFormScroll" : ""}`}
    >
      <span
        className={`close-form--mobile ${
          isShowScrollForm ? "closeFormScroll" : ""
        }`}
        onClick={() => {
          onCloseForm();
          setIsShowScrollForm(false);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <form
        id="form"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* Form Group 1: Full Name */}
        <div className="form-group">
          <label 
            htmlFor="full-name" 
            className={`form-group__label ${fullNameError ? 'error-label' : ''}`}
          >
            Full Name
            {
              fullNameError ? 
                <div className="error-icon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div>
                    <p>{formik.errors.fullName}</p>
                    <div className="tri-left"></div>
                  </div>
                </div>
              : null
            }
          </label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            className={`form-group__input  ${fullNameError ? 'error-input' : ''}`}
            placeholder="Enter full name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
        </div>

        {/* Form Group 2: Address */}
        <div className="form-group">
          <label htmlFor="address" className={`form-group__label ${addressError ? 'error-label' : ''}`}>
            Address
            {
              addressError ? 
                <div className="error-icon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div>
                    <p>{formik.errors.address}</p>
                    <div className="tri-left"></div>
                  </div>
                </div>
              : null
            }
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className={`form-group__input  ${addressError ? 'error-input' : ''}`}
            placeholder="Enter address"
            value={formik.values.address}
            onChange={handleAddress}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Form Group 3: Email */}
        <div className="form-group">
          <label htmlFor="email" className={`form-group__label ${emailError ? 'error-label' : ''}`}>
            Email
            {
              emailError ? 
                <div className="error-icon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div>
                    <p>{formik.errors.email}</p>
                    <div className="tri-left"></div>
                  </div>
                </div>
              : null
            }
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-group__input  ${emailError ? 'error-input' : ''}`}
            placeholder="Enter email"
            inputMode="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Form Group 4: Phone */}
        <div className="form-group">
          <label htmlFor="phone" className={`form-group__label ${phoneNumberError ? 'error-label' : ''}`}>
            Phone
            {
              phoneNumberError ? 
                <div className="error-icon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div>
                    <p>{formik.errors.phoneNumber}</p>
                    <div className="tri-left"></div>
                  </div>
                </div>
              : null
            }
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className={`form-group__input  ${phoneNumberError ? 'error-input' : ''}`}
            placeholder="Enter phone"
            inputMode="tel"
            value={formik.values.phoneNumber}
            onChange={handlePhoneNumberChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Form Group 5: Rego/VIN */}
        <div className="form-group">
          <label htmlFor="rego-vin" className={`form-group__label ${registrationError ? 'error-label' : ''}`}>
            Rego/VIN
            {
              registrationError ? 
                <div className="error-icon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div>
                    <p>{formik.errors.registration}</p>
                    <div className="tri-left"></div>
                  </div>
                </div>
              : null
            }
          </label>
          <input
            type="text"
            id="registration"
            name="registration"
            className={`form-group__input  ${registrationError ? 'error-input' : ''}`}
            placeholder="Enter Rego/VIN"
            value={formik.values.registration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Form Group 6: Service Selecting */}
        <div className="form-group">
          <div className={`form-group__label ${false ? 'error-label' : ''}`}>What does your car need?</div>
          <select
            className="form-group__serivces"
            name="serviceType"
            id="service-type"
            placeholder="serviceType"
            value={formik.values.service}
            onChange={(e) => {
              const selectedIndex = e.target.selectedIndex; // Store index of the options selected
              const selectedText = e.target.options[selectedIndex].text; // Use the index to get the value of that option
              formik.setFieldValue('service', selectedText);
            }}
          >
            <option id="0" hidden>
              What does your car need?
            </option>
            <option id="1">Fixed Price Service</option>
            <option id="2">Logbook Service</option>
            <option id="3">Diagnosis</option>
            <option id="4">Repairs</option>
            <option id="5">Other</option>
          </select>
        </div>

        {/* Form Group 7: Text Area for Comment */}
        <div className="form-group">
          <label htmlFor="comment" className={`form-group__label ${commentsError ? 'error-label' : ''}`}>
            Comments
            {
              commentsError ? 
                <div className="error-icon">
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div>
                    <p>{formik.errors.comments}</p>
                    <div className="tri-left"></div>
                  </div>
                </div>
              : null
            }
          </label>
          <textarea
            id="comments"
            className={`form-group__textarea ${commentsError ? 'error-input' : ''}`}
            name="comments"
            placeholder="Write your comments..."
            value={formik.values.comments}
            onChange={handleComments}
            onBlur={formik.handleBlur}
            required
          ></textarea>
        </div>

        {/* Form Group 8: Terms & Conditions */}
        <div className="form-group">
          <div className="checkbox">
            <input
              type="checkbox"
              className="checkbox__tick"
              onChange={(e) => setTermsAndCondition(e.target.checked)}
            />
            <p className="checkbox__desc">
              <span> I accept the </span>
              <a
                className="checkbox__files"
                href="https://www.kashy.com.au/_files/ugd/5d5476_6590e3a0ab7e49ac8b648620e99e100f.pdf"
                rel="noreferrer"
                target="_blank"
              >
                terms & conditions
              </a>
            </p>
          </div>
        </div>
    
        {/* Submit btn */}
        <div className="form-group submit-box" ref={formRef}>
          <Button
            type="button"
            extendsClass={!termsAndCondition || Object.values(formik.errors).length || isEmptyForm() ? "disabled" : ""}
            buttonName="Submit"
            size="small"
            rounded="half"
            onClick={() => submitForm()}
          />
        </div>
      </form>
    </div>
    <div
      className={`scroll-button-container ${isShowBtn ? "showBtn" : ""}`}
      id="scrollBtn"
    >
      <Button
        type="button"
        buttonName="Request A Quote"
        size="small"
        extendsClass="scroll-button-container--btn"
        rounded="half"
        onClick={() => {
          setIsShowScrollForm(true);
          setIsActiveForm(true);
        }}
      />
    </div>
    </>
  );
}
