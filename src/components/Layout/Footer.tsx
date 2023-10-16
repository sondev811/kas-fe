/* This file contains the code for the footer of the page */
import { Link } from "react-router-dom";

// Required imports
import React from "react";

// Import style sheet
import "@styles/Footer.css";

// Import social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

/**
 * @name Footer
 * @summary Renders the footer when it is called
 * @returns HTML element of the footer
 */
export default function Footer() {
  return (
    <footer className="footer footer--fixed">
      <div className="container">
        <div className="footer__inner">
          {/* Social Media */}
          <div className="footer-socials">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/KashyAustralia"
              className="footer-socials__btn"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="footer-socials__icon"
              />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/company/kashyaustralia"
              className="footer-socials__btn"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer-socials__icon"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/kashyaustralia/"
              className="footer-socials__btn"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="footer-socials__icon"
              />
            </a>
          </div>

          <div className="footer-info">
            <Link to="/contact-us" className="footer-info__contactus">
              <span className="contact-us footer-info__text">Contact Us</span>
            </Link>
            <Link to="/easter-egg">
                <FontAwesomeIcon
                      icon={faWrench}
                      className="terms-conditions__icon"
                />
            </Link>
            <a
              href="https://www.kashy.com.au/_files/ugd/5d5476_01048bb5e23545e6b168f0c66598131a.pdf"
              className="footer-info__terms-conditions"
              rel="noreferrer"
              target="_blank"
            >
              <div className="terms-conditions">
                <span className="terms-conditions__text footer-info__text">
                  TERMS AND CONDITIONS
                </span>
              </div>
            </a>
          </div>

          {/* Copyright */}
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              © Copyright 2023 - All rights reserved. (ABN: 628448359)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
