import React from 'react'
import './components/css/home.css'



const HomePage = () => {
    return (
        <div className='mainBody'>
            <h1>Welcome to our quiz game! title is tbd</h1>
            {/* below directs people to the leaderboard */}
            <ul>
                <li><a href='/leaderboard'>view our leaderboard!</a></li>
                <li><a href='/frontend/src/components/questions.js'>take our quiz!</a></li>
            </ul>
            {/* <audio id="bg_music" src="/sounds/happy.mp3" volume="0.2" controls></audio> */}
            {/* <div className='Leaderboard' id='main'>
            </div> */}
        </div>
    );
};

export default HomePage;

//test