import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import pups from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    pups
  };

  shuffleScoreCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const pups = this.state.pups.filter(puppy => puppy.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ pups });
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
      <Wrapper>
        {this.state.pups.map(puppy => (
          <Card
            shuffleScoreCard={this.shuffleScoreCard}
            id={puppy.id}
            key={puppy.id}
            image={puppy.image}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
