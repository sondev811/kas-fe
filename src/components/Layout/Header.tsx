/* This file contains the code for the web app's header */

// Required imports
import React from "react";

// Import components
import Navigation from "./Nav";
import "@styles/Header.css"; // Import style sheet
import KashyLogo from "@assets/img/logo-icon.svg";
import KashyPartner from "@assets/img/MTAQ-Transparent-Logo.webp";
import { useEffect, useRef } from "react";
import FullSizeLogo from "@assets/img/logo-icon-large.png";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

/**
 * @name Header
 * @summary Renders the Header of the application when it is called
 * @param activePage string value to check which page is currently active
 * @returns HTML element of the Header
 */
// The activePage variable are passed down from App.tsx, then it is continued to be passed down to Navigation.
export default function Header({ activePage }: { activePage: any }) {
  const fullSizeLogoInner = useRef<HTMLDivElement | null>(null);
  const largeLogo = useRef<HTMLImageElement | null>(null);
  const headerTop = useRef<HTMLImageElement | null>(null);
  const header = useRef<HTMLImageElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("active");
    const fullSizeLogoInnerElem = fullSizeLogoInner.current;
    const heroHeading = document.getElementById("heroHeading");
    const heroIntroduction = document.getElementById("heroIntroduction");
    const largeLogoElem = largeLogo.current;
    const marginHeroHeading = 24; // margin của header hero so với thành phần trên(dựa theo file hero.css, class hero-introduction__heading)
    const setDefault = () => {
      if (
        heroHeading &&
        heroIntroduction &&
        largeLogoElem &&
        fullSizeLogoInnerElem
      ) {
        fullSizeLogoInnerElem.classList.remove("hideLogo");

        const heroIntroductionWidth = heroIntroduction.clientWidth; // chiều rộng của hero introduction
        const largeLogoWidth =
          largeLogoElem.naturalWidth > 0 ? largeLogoElem.naturalWidth : 359; // chiều rộng của logo
        const { offsetTop, clientHeight } = heroHeading; // vị trí của heading cách top và chiều cao của heading

        const translateX = heroIntroductionWidth / 2 - largeLogoWidth / 2; // vị trí giữa của logo so với hero introduction
        const translateY = offsetTop - clientHeight - marginHeroHeading; //vị trí trên của heading

        largeLogoElem.style.transform = `translate(${translateX}px,${translateY}px)`;
      }
    };

    setDefault();
    if (pathname === "/") {
      const onScroll = () => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        const shouldShowHeader = scrollTop > 10;

        fullSizeLogoInnerElem?.classList.toggle(
          "activeScroll",
          shouldShowHeader
        );
        headerTop.current?.classList.toggle(
          "hide-header-top",
          shouldShowHeader
        );

        if (header.current?.style) {
          header.current.style.boxShadow = shouldShowHeader
            ? "0 5px 5px rgba(0, 0, 0, .2)"
            : "unset";
        }
      };

      window.addEventListener("scroll", onScroll);
      window.addEventListener("resize", setDefault);

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", setDefault);
      };
    } else {
      fullSizeLogoInner.current?.classList.add("hideLogo");
    }
  }, [pathname]);

  return (
    <header className="header header--fixed" ref={header}>
      <div className="header__top" ref={headerTop}>
        <p>
          Call Now:
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <a id = "phone-header" href="tel:+61404814806">
            0404 814 806
          </a>
        </p>
        <p>
          Email:
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <a id = "mail-header" href="mailto:info@kashy.com.au">
            info@kashy.com.au
          </a>
        </p>
      </div>
      <div className="container">
        <div className="header___inner">
          {/* <!-- Logo --> */}
          <div className="header__logo">
            <div ref={fullSizeLogoInner} className="logo-inner">
              <img src={FullSizeLogo} ref={largeLogo} alt="" />
            </div>
            <img src={KashyLogo} alt="Kashy" className="logo" id="smallLogo" />
          </div>
          {/* <!-- Nav bar --> */}
          <Navigation activePage={activePage} />
          <div className="kashy-partner">
            <a
              href="https://www.mtaq.com.au/"
              className="kashy-partner__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={KashyPartner}
                alt="MTA Queensland Website"
                className="kashy-partner__img"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
