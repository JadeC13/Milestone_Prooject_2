import React from 'react';
import './components/css/home.css'



const HomePage = () => {
    return (
        <div className='mainBody'>
            <h1>Welcome to our quiz game! title is tbd</h1>
            {/* below directs people to the leaderboard */}
            <ul>
                <li>Click <a href='/leaderboard'>HERE </a>to view our leaderboard!</li>
                <li>Click <a>HERE </a>to test your knowledge!</li>
            </ul>
            {/* <audio id="bg_music" src="/sounds/happy.mp3" volume="0.2" controls></audio> */}
            {/* <div className='Leaderboard' id='main'>
            </div> */}
        </div>
    );
};

export default HomePage;

//test