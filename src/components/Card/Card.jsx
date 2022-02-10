import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { image, name, tagline, description, abv, beersArr, title } = props;

  const beerListJSX = beersArr.map((beer, index) => (
    <img
      className="album-tiles__img"
      key={title + (index + 1)}
      src={beer.image_url}
      alt=""
    />
  ));
  return (
    <div className="cardContainer">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p className="tagline">{tagline}</p>
      {/* <p>{description}</p> */}
      <p>{abv}%</p>
    </div>
  );
};

export default Card;
