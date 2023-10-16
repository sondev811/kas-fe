import React, { FC } from "react";

// Import Icon from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

interface SrcImgProps {
  imageSrc: string;
  name: string;
  date: string;
  content: string;
}

const ReviewCard: FC<SrcImgProps> = ({ imageSrc, name, date, content }) => {
  return (
    <section className="review-item">
      <a
        href="https://www.google.com/maps/contrib/101665379278292988752/reviews"
        className="review-link"
        rel="noreferrer"
        target="_blank"
      >
        <div className="review-item__img-area">
          <img
            src={imageSrc}
            alt="Customer Img"
            className="review-item__img-customer"
          />
        </div>

        <p className="review-link__name">{name}</p>
      </a>

      <a
        href="https://www.google.com/maps/contrib/101665379278292988752/place/ChIJW_JG5f5bkWsRpQirTgIMoig"
        className="review-link__date"
        rel="noreferrer"
        target="_blank"
      >
        <div className="date-icon">
          <span className="date-icon__date">{date}</span>
          <FontAwesomeIcon icon={faGoogle} className="date-icon__fontawesome" />
        </div>
      </a>

      <div className="review-item__content">{content}</div>
    </section>
  );
};

export default ReviewCard;
