import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
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
  //the below console is coming up undefined.  Trying to figure out why
        // console.log(this.pups[id]);
        console.log(pups.shuffleScoreCard);
        //each time a puppy image is clicked, checked the id to see if it's already been clicked
      //if the puppy clicked has already been clicked return
      //else increase score by one and reshuffle
          // if (this.pups[id] !== pups[id]){
          //   shuffleScoreCard();
          // } else {
          //   return;
          // };
    }
    //^^^^^this if statement isn't working

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
        <Score total={0}
               goal={9}/>
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
