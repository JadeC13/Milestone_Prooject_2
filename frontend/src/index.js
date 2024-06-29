
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Leaderboard from './leaderboard';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Leaderboard />
    </React.StrictMode>,
    document.getElementById('root')
);