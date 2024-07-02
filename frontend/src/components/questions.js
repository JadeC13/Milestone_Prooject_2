import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { questions } from "./database";
import { QuizContext } from './QuizContext';
import './css/style.css';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const QuizApp = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [time, setTime] = useState(0);
    const { addResult } = useContext(QuizContext);
    const history = useHistory();

    useEffect(() => {
        const shuffled = shuffleArray([...questions]);
        setShuffledQuestions(shuffled.slice(0, 10));
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAnswerChange = (questionId, answerId) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: answerId,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let correctAnswers = 0;
        shuffledQuestions.forEach((question) => {
            if (userAnswers[question.id] === question.answer) {
                correctAnswers += 1;
            }
        });

        const result = {
            correctAnswers,
            time
        };

        addResult(result);
        history.push('/summary', result);
    };

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
