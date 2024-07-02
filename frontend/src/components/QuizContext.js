import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [results, setResults] = useState([]);

    const addResult = (result) => {
        setResults([...results, result]);
    };

    return (
        <QuizContext.Provider value={{ results, addResult }}>
            {children}
        </QuizContext.Provider>
    );
};