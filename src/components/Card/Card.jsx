import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { image, name, tagline, abv } = props;
  return (
    <div className="cardContainer">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p className="cardContainer__tagline">{tagline}</p>
      <p className="cardContainer__abv">{abv}%</p>
    </div>
  );
};

export default Card;
