import React from 'react';

const Display = (props) => {
    return (
        <>
            <h2 data-testid="balls">Balls: {props.balls}</h2>
            <h2 data-testid="strikes">Strikes: {props.strikes}</h2>
        </>
    );
};

export default Display;