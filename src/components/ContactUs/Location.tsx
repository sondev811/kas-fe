import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOutside from "@hooks/useOutside";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  lat: number;
  lng: number;
}
const Location: React.FC<Props> = (props) => {
  const { name } = props;

  const [isPopupOpen, setPopupOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  useOutside(locationRef, () => {
    setPopupOpen(false);
    // priorityIndex('-1');
  });

  const iconStyled = {
    color: "rgb(212, 69, 45)",
    fontSize: "30px",
  };

  // useEffect(() => {
  //   priorityIndex('-1');
  // }, []);

  const onClickLocation = () => {
    setPopupOpen(true);
    // priorityIndex('1');
  };

  const priorityIndex = (zIndex: string) => {
    if (locationRef.current && locationRef.current.parentNode) {
      const parentNode = locationRef.current.parentNode as HTMLElement;
      parentNode.style.zIndex = zIndex;
    }
  };

  return (
    <div className="location" ref={locationRef}>
      <div className={`label-container ${isPopupOpen ? "activeLabel" : ""}`}>
        {name}
        <a href="/">Book now</a>
        <div className="tri-down"></div>
      </div>
      <div>
        <FontAwesomeIcon
          onClick={onClickLocation}
          style={iconStyled}
          icon={faLocationDot}
        />
      </div>
    </div>
  );
};

export default Location;
