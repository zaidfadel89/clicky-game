import React from "react";
import "./Card.css";

//this component is only rendering the images to the screen and can be a simple render function
const Card = props => (
  <div className="card img-container">
      <img alt={props.name} src={props.image} onClick={props.onClick}/>
  </div>
);

export default Card;
