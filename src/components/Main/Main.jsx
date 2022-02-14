import React, { useState } from "react";
import beers from "../../data/beer";
import CardList from "../CardList/CardList";
import "./Main.scss";
import Card from "../Card/Card";

const Main = (props) => {
  const { beersArr, highABVBeers } = props;

  const beerJSX = beersArr.map((beer) => {
    return (
      <Card
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        pairing={beer.food_pairing[0]}
        abv={beer.abv}
      />
    );
  });
  return <div className="mainContainer">{beerJSX}</div>;
};

export default Main;
