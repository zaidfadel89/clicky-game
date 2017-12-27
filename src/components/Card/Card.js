import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card img-container">

      <img alt={props.name} src={props.image} />

  </div>
);

export default Card;
