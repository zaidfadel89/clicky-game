import React from "react";
import "./Score.css";
//maybe use this component to keep score
// const Score = props => <h1 className="score">{props.children}</h1>;
//
// export default Score;

const Score = props => (
  <div className="score-count">
    <div className="total-count">
      <span>Score: </span>
      <span>{props.total}</span>
    </div>
    <div>
      <span>Goal: </span>
      <span>{props.goal}</span>
    </div>
  </div>
);

export default Score;
