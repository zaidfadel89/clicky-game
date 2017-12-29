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

//shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
      for (let i = pups.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [pups[i], pups[j]] = [pups[j], pups[i]];
      }
      this.setState({ pups });
      console.log(pups);
  }


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
