/* This file contains the code for the Call To Actions section of the Home page */

// Required imports
import React from "react";

// Import components
import SubscribeForm from "./SubscribeForm";

import Partner1 from "@assets/img/advertisement-MTAQ.webp";
import Partner2 from "@assets/img/advertisement-heymel.webp";
import Partner3 from "@assets/img/advertisement-practal.webp";
import Partner4 from "@assets/img/advertisement-twice.webp";

/**
 * @name CallToActions
 * @summary Renders the Call To Actions section of the Home page
 * @returns HTML elements of the Call To Actions section
 */
export default function CallToActions() {
  return (
    <section className="call-to-actions">
      <div className="subscribe-partner">
        <div className="container">
          <div className="subscribe-partner__content">
            {/* <!-- Left side --> */}
            {/* <section className="subscribe">
              <form action="" autoComplete="off">
                <div className="form-group subscribe-form">
                  <label
                    htmlFor="subscribe-advertisement"
                    className="form-group__label subscribe-label"
                  >
                    Join our monthly newsletter
                  </label>
                  <div className="subscribe-form__text-btn">
                    <input
                      type="text"
                      id="email"
                      className="form-group__input subscribe-form__input"
                      placeholder="Email*"
                    />
                    <div className="subscribe-btn">
                      <button className="btn subscribe-cta" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </section> */}
            <SubscribeForm />

            {/* <!-- Right side  --> */}
            <div className="coop-partner">
              <h3 className="section-heading coop-partner__heading">
                AS SEEN ON
              </h3>

              <div className="coop-partner__list">
                {/* <!-- Partner item 1 --> */}
                <div className="coop-partner-item">
                  <a href="/#" className="coop-partner-item__link">
                    <img
                      src={Partner1}
                      alt="Partner 1 - Twice"
                      className="coop-partner-item__thumb"
                    />
                  </a>
                </div>

                {/* <!-- Partner item 2 --> */}
                <div className="coop-partner-item">
                  <a href="/#" className="coop-partner-item__link">
                    <img
                      src={Partner2}
                      alt="Partner 2 - Heymel"
                      className="coop-partner-item__thumb"
                    />
                  </a>
                </div>

                {/* <!-- Partner item 3 --> */}
                <div className="coop-partner-item">
                  <a href="/#" className="coop-partner-item__link">
                    <img
                      src={Partner3}
                      alt="Partner 3 - Practal"
                      className="coop-partner-item__thumb"
                    />
                  </a>
                </div>

                {/* <!-- Partner item 4 --> */}
                <div className="coop-partner-item">
                  <a href="/#" className="coop-partner-item__link">
                    <img
                      src={Partner4}
                      alt="Partner 4 - MTA Queensland"
                      className="coop-partner-item__thumb"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
