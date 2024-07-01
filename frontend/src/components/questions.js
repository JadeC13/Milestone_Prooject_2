import React, { useState, useEffect } from 'react';
import { questions } from "./database"
import './css/style.css'

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//Gets shuffled questions and utilizes the answers from selected possible answers
const QuizApp = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [time, setTime] = useState(0);

    //Only allows 10 out of (x) to appear.
    useEffect(() => {
        const shuffled = shuffleArray([...questions]);
        setShuffledQuestions(shuffled.slice(0, 10));
    }, []);

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);
    
    const handleAnswerChange = (questionId, answerId) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: answerId,
        });
    };

    //Sums up total correct answers
    const handleSubmit = (e) => {
        e.preventDefault();
        let correctAnswers = 0;
        shuffledQuestions.forEach((question) => {
            if (userAnswers[question.id] === question.answer) {
                correctAnswers += 1;
            }
        });
        alert(`You got ${correctAnswers} out of 10 questions correct!`);
    };

    // Format time in minutes and seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <div className="header">
                <h2>Quiz Questions</h2>
                <div className="timer">Time: {formatTime(time)}</div>
            </div>
            <form onSubmit={handleSubmit}>
                {shuffledQuestions.map((question) => (
                    <div key={question.id}>
                        <h3>{question.text}</h3>
                        <ul>
                            {question.possible.map((option) => (
                                <li key={option.id}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={option.id}
                                            onChange={() => handleAnswerChange(question.id, option.id)}
                                        />
                                        {option.text}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QuizApp;