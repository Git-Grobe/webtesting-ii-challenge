import React from 'react';

const Dashboard = (props) => {
    return (
        <>
            <button data-testid="dashboard-button" onClick={props.strike}>Strike</button>
            <button data-testid="dashboard-button" onClick={props.ball}>Ball</button>
            <button data-testid="dashboard-button" onClick={props.foul}>Foul</button>
            <button data-testid="dashboard-button" onClick={props.hit}>Hit</button>

        </>
    );
};

export default Dashboard;