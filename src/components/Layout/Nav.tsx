/* This file contains the code for the navigation bar */
import React, { useRef, useState } from "react";

// Required imports
import { Link } from "react-router-dom"; // Import element to link to other pages
import "@styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { navbar } from "@constants/Constant";
import { INavbar } from "@interfaces/index";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import useOutside from "@hooks/useOutside";
/**
 * @name Navigation
 * @summary Renders the navigation bar when it is called
 * @param activePage string value to check which page is currently active
 * @returns HTML element of the navigation bar
 */
export default function Navigation({ activePage }: { activePage: any }) {
  const [showNav, setShowNav] = useState(false);
  const navbarRef = useRef(null);
  const scrollBtn = document.getElementById("scrollBtn");
  useOutside(navbarRef, () => {
    setShowNav(false);
    scrollBtn?.classList.remove("nav-opened");
  });

  return (
    <nav className="navbar">
      <ul
        ref={navbarRef}
        className={`navbar__list ${showNav ? "showMobileMenu" : ""}`}
      >
        <div className="navbar-group-item">
          {navbar.map((nav: INavbar, index) => {
            // Create a special case for the Blog button on the nav bar
            // Can be changed later once the Blog page is completed
            if (nav.name === "Blog") {
              return (
                <li className="navbar__item">
                  <Link
                    to="https://www.kashy.com.au/blog-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </Link>
                </li>
              )
            }
            else {
              return (
                <li className="navbar__item">
                  <Link
                    to={nav.link}
                    className={`navbar__link ${
                      activePage === nav.name ? "activeLink" : ""
                    }`}
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={index}
                  >
                    {nav.name}
                  </Link>
                </li>
              );
            }
          })}
        </div>
        <div
          className="nav-close-icon"
          onClick={() => {
            setShowNav(false);
            scrollBtn?.classList.remove("nav-opened");
          }}
          role="button"
          onKeyDown={() => {
            setShowNav(false);
            scrollBtn?.classList.remove("nav-opened");
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className="navbar_social">
          <a
            href="https://www.facebook.com/KashyAustralia"
            target="_blank"
            // rel="noopener"
            rel="noreferrer"
            className="hero-socials__link facebook"
          >
            {/* <FontAwesomeIcon icon={faFacebook} className="hero-socials__icon" /> */}
            <FontAwesomeIcon
              icon={faFacebookF}
              className="hero-socials__icon"
            />
          </a>
          <a
            href="https://www.instagram.com/kashyaustralia/"
            target="_blank"
            rel="noreferrer"
            className="hero-socials__link instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hero-socials__icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEU0lrrw3JSowAAAYooUD3w2QjXs5Zt4dPrt0-A9KZ3uS1OrDEN2VlYqCKm1FJc7yDS9YDfdpdTt8Y2XGFoNIW3iGHf0ql4FsRGEo-VleJkjs-zDQhH2tZVHfSIDeF7i-LvUMo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkashyaustralia%2F"
            target="_blank"
            rel="noreferrer"
            className="hero-socials__link linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="hero-socials__icon"
            />
          </a>
        </div>
      </ul>
      <div
        className="nav-mobile-icon"
        onClick={() => {
          setShowNav(true);
          console.log("test");
          scrollBtn?.classList.add("nav-opened");
        }}
        onKeyDown={() => {
          setShowNav(true);
          scrollBtn?.classList.add("nav-opened");
        }}
      >
        <FontAwesomeIcon icon={faBars} role="button" />
      </div>
    </nav>
  );
}
