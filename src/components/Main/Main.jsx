import React, { useState } from "react";
import "./Main.scss";
import Card from "../Card/Card";

const Main = (props) => {
  const { beersArr } = props;

  const beerJSX = beersArr.map((beer) => {
    return (
      <Card
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        abv={beer.abv}
      />
    );
  });
  return <div className="mainContainer">{beerJSX}</div>;
};

export default Main;
