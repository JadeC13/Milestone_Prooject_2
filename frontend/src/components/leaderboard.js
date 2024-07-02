import React, { useState } from "react";
import Saves from './saves';
import { Data } from "./database";
import './css/style.css'
import BackButton from "./backbutton";


const Leaderboard = () => {
    const [filteredLeaderboard, setFilteredLeaderboard] = useState([]);

    const handleClick = (filter) => {
        const sortedData = Data.sort((a, b) => b.score - a.score);
        if (filter === 'top-10') {
            const top10 = sortedData.slice(0, 10);
            setFilteredLeaderboard(top10);
        } else if (filter === 'top-20') {
            const top20 = sortedData.slice(0, 20);
            setFilteredLeaderboard(top20);
        }
    }
    // This code above sorts out the scores and places them in a list of either top 10 or top 20

    return (
        <div className="board">
            <BackButton/> {}
            <h1 className="leaderboard">Leaderboard</h1>

            <div className="duration">
                <button onClick={() => handleClick('top-10')}>Top 10</button>
                <button onClick={() => handleClick('top-20')}>Top 20</button>
            </div>

            <Saves Leaderboard={filteredLeaderboard}></Saves>
        </div>
    );
}
// This code above lets you interact with the top 10 and top 20 buttons



export default Leaderboard;

function between(filter) {
    return filter.sort((a, b) => {
        if (a.score === b.score) {
            return b.score - a.score;
        } else {
            return b.score - a.score;
        }
    })
}
