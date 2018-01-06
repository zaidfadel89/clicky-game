import React from "react";
import "./Score.css";
import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const Score = props => (
  <div className="gameScore">
    <h2 className="score">Your Score <Arrow /> {props.total}</h2>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;
