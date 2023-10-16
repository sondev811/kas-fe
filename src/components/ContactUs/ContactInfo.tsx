/* This file contains the code for the information grid on the Contact Us page */

// Required imports
import React, { useState } from "react";
import GoogleMapReact, { ChangeEventValue, Coords } from "google-map-react";
import Location from "./Location";
import { locationDefault, locations } from "@constants/Constant";
import { ILocation } from "@interfaces/index";

/**
 * @name ContactInfo
 * @summary Renders the information grid on the left of the Contact Us page
 * @returns HTML elements of the information grid
 */

export default function ContactInfo() {
  const [center, setCenter] = useState<Coords>(locationDefault.center);
  const [zoom, setZoom] = useState<number>(locationDefault.zoom);

  const handleMapChange = ({ center, zoom }: ChangeEventValue) => {
    setCenter(center);
    setZoom(zoom);
  };

  return (
    <section className="maps-and-info">
      <div className="google-maps" style={{ width: "100%", height: "680px" }}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
          onChange={handleMapChange}
        >
          {locations.map((location: ILocation, index) => (
            <Location
              lat={location.lat}
              lng={location.lng}
              name={location.name}
              key={index}
            />
          ))}
        </GoogleMapReact>
      </div>
      <div className="business-info">
        <div className="info-grid">
          <div className="business-email">
            <a id="kashy-email" href="mailto:info@kashy.com.au">
              info@kashy.com.au
            </a>
          </div>
          <div className="more-info">
            <a id="learn-more" href="/about-us">
              Learn More
            </a>
          </div>
          <div className="business-phone">
            <a id="kashy-phone" href="tel:+61404814806">
              0404 814 806
            </a>
          </div>
          <div className="call-to-action">
            <a id="book-now" href="/">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
