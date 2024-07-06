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
        <div className='summary'>
            <h2>Here are your Results!</h2>
            <p>You got {correctAnswers} out of 10 questions correct!</p>
            <p>Time taken to complete quiz: {`${Math.floor(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`}</p>
            <button className='button' onClick={handleOkClick}>OK</button>
        </div>
    );
};

export default Summary;