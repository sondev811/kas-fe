/* This file contains the code for the Hero section of the Home page */

// Required imports

// Import components
import QuotingForm from "./QuotingForm";
import React, { useEffect, useRef, useState } from 'react';
import Banner from "@assets/img/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Button from "@components/Button";

/**
 * @name Hero
 * @summary Renders the Hero section of the Home page when it is called
 * @returns HTML elements of the Hero section
 */
export default function Hero() {
  // State variable
  const [isActiveForm, setIsActiveForm] = useState(false);

  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="hero__inner">
          <div>
            {/* <!-- Left Side: Hero Article / About Kashy --> */}
            <section className="hero-introduction" id="heroIntroduction">
              <div className="hero-introduction__logo">
              </div>
              <h1 className="section-heading hero-introduction__heading" id="heroHeading">
                Mobile mechanics that save you time and money, honestly
              </h1>
              <p className="section-desc hero-introduction__desc--mobile">
                Get a Quote. Book appointment
              </p>
              <p className="section-desc hero-introduction__desc--mobile hero-introduction__desc--mobile-nmg">
                Get your car fixed
              </p>
              <p className="section-desc hero-introduction__desc">
                Have you ever wondered why seeing a mechanic feels so difficult?
                It's why we created Kashy.
              </p>
              <p className="section-desc hero-introduction__desc">
                Request a quote and one of our Kashy mechanics will come to your
                home or work for convenient service, repairs or diagnosis at a
                set price.
              </p>

              {/* Benefits Kashy's offering to their customers */}
              <div className="hero-benefits">
                {/* Item 1: Savings */}
                <section className="hero-item">
                  <h2 className="section-heading hero-item__title">Savings</h2>
                  <p className="section-desc hero-item__desc">
                    Kashy saves on average 50% over the dealership. Upfront
                    quoting is just another benefit.
                  </p>
                </section>

                {/* Item 2: Conviences */}
                <section className="hero-item">
                  <h2 className="section-heading hero-item__title">
                    Convenience
                  </h2>
                  <p className="section-desc hero-item__desc">
                    Our mobile mechanics come to your home or office at a time
                    that suits you.
                  </p>
                </section>

                {/* Item3: Honestyy */}
                <section className="hero-item">
                  <h2 className="section-heading hero-item__title">Honesty</h2>
                  <p className="section-desc hero-item__desc">
                    We don't incentivise upselling and our mechanics are hand
                    picked for the job.
                  </p>
                </section>
              </div>

              {/* Because of UX, so shouldn't have a btn here, so user can focus on btn in the form instead */}
              {/* Hero CTA */}
              {/* <div className="hero-action">
                <Button type="button" buttonName="Find Out More" size="normal" rounded="half" />
              </div> */}

              {/* Hero Socials Contact */}
              <div className="hero-socials">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/KashyAustralia"
                  target="_blank"
                  // rel="noopener"
                  rel="noreferrer"
                  className="hero-socials__link facebook"
                >
                  {/* <FontAwesomeIcon icon={faFacebook} className="hero-socials__icon" /> */}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hero-socials__icon"
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kashyaustralia/"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-socials__link instagram"
                >
                  {/* <FontAwesomeIcon icon={faInstagram} className="hero-socials__icon" /> */}
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hero-socials__icon"
                  />
                </a>

                {/* Linked In */}
                <a
                  href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEU0lrrw3JSowAAAYooUD3w2QjXs5Zt4dPrt0-A9KZ3uS1OrDEN2VlYqCKm1FJc7yDS9YDfdpdTt8Y2XGFoNIW3iGHf0ql4FsRGEo-VleJkjs-zDQhH2tZVHfSIDeF7i-LvUMo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fkashyaustralia%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-socials__link linkedin"
                >
                  {/* <FontAwesomeIcon icon={faLinkedin} className="hero-socials__icon" /> */}
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hero-socials__icon"
                  />
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/@kashyaustralia6424"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-socials__link youtube"
                >
                  {/* <FontAwesomeIcon icon={faYoutube} className="hero-socials__icon" /> */}
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="hero-socials__icon"
                  />
                </a>
              </div>
              <div className="hero_inner--mobile">
                <Button 
                  type='button'
                  buttonName='Request A Quote' 
                  size='large'
                  rounded='rounded' 
                  onClick={() => setIsActiveForm(true)}
                />
                <div>
                  <img src={Banner} />
                </div>
              </div>
            </section>
            {/* <!-- Right Side: Hero Quoting --> */}
            <QuotingForm isActiveForm={isActiveForm} setIsActiveForm={setIsActiveForm}/>
          </div>
        </div>
      </div>
    </section>
  );
}
