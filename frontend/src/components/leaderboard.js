import React, { useState, useContext } from "react";
import { QuizContext } from './QuizContext';
import './css/style.css'
import BackButton from "./backbutton";

const Leaderboard = () => {
    const { results } = useContext(QuizContext);
    const [filteredLeaderboard, setFilteredLeaderboard] = useState([]);

    const handleClick = (filter) => {
        const sortedResults = [...results].sort((a, b) => b.correctAnswers - a.correctAnswers || a.time - b.time);
        if (filter === 'top-10') {
            const top10 = sortedResults.slice(0, 10);
            setFilteredLeaderboard(top10);
        } else if (filter === 'top-20') {
            const top20 = sortedResults.slice(0, 20);
            setFilteredLeaderboard(top20);
        }
    };

    return (
        <div className="board">
            <BackButton />
            <h1 className="leaderboard">Leaderboard</h1>
            <div className="duration">
                <button onClick={() => handleClick('top-10')}>Top 10</button>
                <button onClick={() => handleClick('top-20')}>Top 20</button>
            </div>
            <div id="saves">
                {filteredLeaderboard.map((result, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <div className="info">
                                <h3 className='name text-dark'>User {index + 1}</h3>
                            </div>
                        </div>
                        <div className="item">
                            <span>{result.correctAnswers} correct answers</span>
                        </div>
                        <div className="item">
                            <span>Time: {`${Math.floor(result.time / 60)}:${result.time % 60 < 10 ? '0' : ''}${result.time % 60}`}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;