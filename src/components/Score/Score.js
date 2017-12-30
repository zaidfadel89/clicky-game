import React from "react";
import "./Score.css";


const Score = props => (
  <div className="gameScore">
    <h2 className="score">Your Score: {props.total}</h2>
    <h3 className="goal">Goal to win: 9</h3>
    <h2 className="status">{props.status}</h2>
  </div>
);

export default Score;
