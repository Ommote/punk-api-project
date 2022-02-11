import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { image, name, tagline, description, abv, beersArr, title } = props;

  const beerListJSX = beersArr.map((beer, index) => (
    <img
      key={title + (index + 1)}
      src={beer.image_url}
      alt=""
    />
  ));
  return <div className="cardContainer">{beerListJSX}</div>;
};

export default Card;
