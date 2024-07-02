import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Summary = () => {
    const history = useHistory();
    const location = useLocation();
    const { correctAnswers, time } = location.state;

    const handleOkClick = () => {
        history.push('/leaderboard');
    };

    return (
        <div>
            <h2>Quiz Summary</h2>
            <p>You got {correctAnswers} out of 10 questions correct!</p>
            <p>Time taken: {`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</p>
            <button onClick={handleOkClick}>OK</button>
        </div>
    );
};

export default Summary;
