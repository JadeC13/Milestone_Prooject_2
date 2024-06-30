import Board from './components/leaderboard';
import React from 'react';


const App = () => {
    return (
        <div>
            <h1>Hello, It's my first React App!</h1>
            <h2>Happy Coding!!</h2>
            <div className='Leaderboard'id='main'>
                <Board />
            </div>
        </div>
    );
};

export default App;

//test