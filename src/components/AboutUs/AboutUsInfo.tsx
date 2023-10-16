/* This file contains the code for the information on the About Us page */

// Required imports
import React from "react";

import "@styles/AboutUs/AboutUsInfo.css";
import Button from "@components/Button";

import aboutUsImg from "@assets/img/aboutus-01.webp";
import ourHistory from "@assets/img/aboutus-02.webp";
import faqImg from "@assets/img/aboutus-03.webp";
import { aboutUsContents } from "@constants/Constant";
import { IAboutUs, IAboutUsContent } from "@interfaces/index";

/**
 * @name AboutUsInfo
 * @summary Renders the information on the About Us page
 * @returns HTML elements contains the info on the About Us page
 */
export default function AboutUsInfo() {
  return (
    <section className="about-us-section">
      <div className="about-us">
        <div className="about-us__content">
          {aboutUsContents &&
            aboutUsContents.map((aboutUs: IAboutUs) => {
              return (
                <div className="about-us-item">
                  <div
                    className="about-us-item__media"
                    style={{ background: `url(${aboutUs.backgroundImage})` }}
                  ></div>
                  <div className="about-us-item__content">
                    <h2 className="section-heading about-us-item__heading">
                      {aboutUs.name}
                    </h2>
                    {aboutUs.content.length &&
                      aboutUs.content.map((item: IAboutUsContent) => {
                        return (
                          <p
                            className={`section-desc about-us-item__content__desc ${
                              item.type === "header" ? "header" : ""
                            }`}
                          >
                            {item.content}
                          </p>
                        );
                      })}
                    <div className="about-us-item__content__cta">
                      <Button
                        type="link"
                        buttonName="Book Now"
                        href={aboutUs.bookUrl}
                        size="normal"
                        rounded="half"
                        extendsClass="about-us-item__content__cta__btn01"
                      />
                      <Button
                        type="link"
                        buttonName="Find out more"
                        href={aboutUs.findMoreUrl}
                        size="normal"
                        rounded="half"
                        extendsClass="about-us-item__content__cta__btn02"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
