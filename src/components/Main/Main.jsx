import React from "react";
import CardList from "../CardList/CardList";
import "./Main.scss";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";

const Main = (props) => {
  const { beersArr } = props;
  const beerJSX = beersArr.map((beer) => {
    return (
      <Card
        image={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        abv={beer.abv}
      />
    );
  });
  return (
    <div className="mainContainer">
      <Nav />
    </div>
  );
};

export default Main;
