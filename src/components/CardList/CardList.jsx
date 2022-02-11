import React from "react";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = (props) => {
  const { beersArr } = props;
  return (
    <div>
      <Card />
    </div>
  );
};

export default CardList;
