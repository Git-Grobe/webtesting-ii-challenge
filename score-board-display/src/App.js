import React, { useState } from "react";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const App = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const ball = () => {
    balls < 3 ? setBalls(balls + 1) : setBalls(0);
    // if (balls < 3) {
    //   setBalls(balls + 1 );
    // } else {
    //   setBalls(0);
    // }
  };

  const strike = () => {
    strikes >= 2 ? setStrikes(0) : setStrikes(strikes + 1)
    // if (strikes === 3) {
    //   setStrikes(0);
    // } else {
    //   setStrikes(strikes + 1 );
    // }
  };

  const foul = () => {
    strikes < 2 ? setStrikes(strikes + 1 ) : setStrikes(0);
    // if (strikes < 2) {
    //   setStrikes(strikes + 1 );
    // };
    
  };

  const hit = () => {
    setBalls(0);
    setStrikes(0);
  };

  return (
    <Container>
      <h1>Score Board</h1>
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        strike={strike}
        ball={ball}
        foul={foul}
        hit={hit}
      />
    </Container>
  );
};

export default App;

// import React from 'react';

// import Display from './components/Display';
// import Dashboard from './components/Dashboard';


// class App extends React.Component {

//   state = {
//     balls: 0,
//     strikes: 0,
//   };
  
//   ball = () => {
//     if(this.state.balls < 3 ) {
//       this.setState({ balls: this.state.balls + 1});
//     } else {
//       this.setState({ balls: 0 });
//     }
//   };

//   strike = () => {
//     if (this.state.strikes === 3) {
//       this.setState({ strikes: 0 });
//     } else {
//       this.setState({ strikes: this.state.strikes + 1 });
//     }
//   };

//   foul = () => {
//     if(this.state.strikes < 2) {
//       this.setState({ strikes: this.state.strikes + 1 });
//     }
//   };

//   hit = () => {
//     this.setState({ strikes: 0, balls: 0})
//   };

//   render () {
//     return (
//       <>
//       <h1>Score Board</h1>
//       <Display balls={this.state.balls} strikes={this.state.strikes}/>
//       <Dashboard strike={this.strike} ball={this.ball} foul={this.foul} hit={this.hit}/>
  
//       </>
//     );
//   }

// }

// export default App;
