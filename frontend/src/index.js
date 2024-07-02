import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Routes';
import { QuizProvider } from './components/QuizContext';

ReactDOM.render(
    <React.StrictMode>
        <QuizProvider>
            <Routes />
        </QuizProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
