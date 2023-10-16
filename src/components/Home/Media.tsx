/* This file contains the code for the Media section of the Home page */

// Required imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import thumb1 from "@assets/gallery/thumb-1.jpeg";
import thumb2 from "@assets/gallery/thumb-2.jpeg";
import thumb3 from "@assets/gallery/thumb-3.jpeg";
import thumb4 from "@assets/gallery/thumb-4.jpeg";
import thumb5 from "@assets/gallery/thumb-5.jpeg";
import thumb6 from "@assets/gallery/thumb-6.jpeg";
import thumb7 from "@assets/gallery/thumb-7.jpeg";
import thumb8 from "@assets/gallery/thumb-8.jpeg";
import Button from "@components/Button";
import Slider from "react-slick";

/**
 * @name Media
 * @summary Renders the Media section of the Home page
 * @return HTML elements of the Media section
 */
export default function Media() {
  const images = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8];
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="media">
      <div className="container">
        <div className="media-inner">
          {/* <!-- Left side of body --> */}
          <figure className="media-inner__video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qHeACpjOj5M"
              title="Should You Change Your Engine Oil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </figure>

          {/* <!-- Right side --> */}
          <div className="media-photo">
            <div className="media-photo__social">
              <p className="section-heading media-photo__heading">
                kashyaustralia
              </p>
              <div className="media-photo__btn">
                <Button 
                  type="link" 
                  buttonName="Follow" 
                  href="https://www.instagram.com/kashyaustralia/"
                  icon={<FontAwesomeIcon
                    icon={faInstagram}
                    className="media-photo__icon"
                  />}
                />
                  
              </div>
            </div>
            <div className="media-photo__list">
            {
              images.length ? images.map((image, index) => {
                return (
                  <div key={index} className="media-photo-item">
                    <img src={image} alt="" className="media-photo-item__thumb" />
                  </div>
                )
              }) : null
            }
            </div>
            <div className="media-photo__list--mobile">
              {
                <Slider {...settings}>
                {
                  images.length ? 
                    images.map((image, index) => {
                      return (
                        <div key={index} className="media-photo-item">
                          <img src={image} alt="" className="media-photo-item__thumb" />
                        </div>
                      )
                    })
                  : null
                }
                </Slider>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
