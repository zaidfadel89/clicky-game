import React from "react";
import Card from "../Card";
import "./Board.css";
import cards from "./cards.json"


class Board extends React.Component {
  renderCard(i) {
    return (
      <Card value=
      {this.props.cards[i]}
      onClick={() =>
      this.props.onClick(i)}
      />
    );
  }
  render(props) {
    return (
      <div>
        {this.renderCard(props.cards.id[1])}
        {this.renderCard(1)}
        {this.renderCard(2)}
        <div className="board-row">
          {this.renderCard(3)}
          {this.renderCard(4)}
          {this.renderCard(5)}
        </div>
        <div className="board-row">
          {this.renderCard(6)}
          {this.renderCard(7)}
          {this.renderCard(8)}
        </div>
      </div>
    );
  }
}

export default Board;
