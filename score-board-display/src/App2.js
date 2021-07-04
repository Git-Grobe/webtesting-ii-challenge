import React, { useState } from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ball = () => {
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1 });
    } else {
      this.setState({ balls: 0 });
    }
  };

  const strike = () => {
    if (this.state.strikes === 3) {
      this.setState({ strikes: 0 });
    } else {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  const foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  const hit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };

  return (
    <>
      <h1>Score Board</h1>
      <Display balls={this.state.balls} strikes={this.state.strikes} />
      <Dashboard
        strike={this.strike}
        ball={this.ball}
        foul={this.foul}
        hit={this.hit}
      />
    </>
  );
};
