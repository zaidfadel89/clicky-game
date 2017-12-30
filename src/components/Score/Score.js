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


// import React from "react";
// import "./Card.css";
//
// //this component is only rendering the images to the screen and can be a simple render function
// const Card = props => (
//   <div className="card img-container">
//       <img alt={props.name} src={props.image} id={props.id}
//         onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
//   </div>
// );
//
// export default Card;
