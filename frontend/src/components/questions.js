import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { questions } from "./database";
import { QuizContext } from './QuizContext';
import './css/quiz.css';


//Shuffles the questions array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//Start summary of everything we are doing with shuffle, answers, time, results, and history
const QuizApp = () => {
    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [time, setTime] = useState(0);
    const { addResult } = useContext(QuizContext);
    const history = useHistory();

    //Uses the shuffled array and spits out the first 10 of the shuffle
    useEffect(() => {
        const shuffled = shuffleArray([...questions]);
        setShuffledQuestions(shuffled.slice(0, 10));
    }, []);

    //Starts the timer with 1000 (1 second) and increases the previous time by adding 1
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    //Allows the ability to change answers and doesn't just lock one in
    const handleAnswerChange = (questionId, answerId) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: answerId,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //Prevents submitting the default form
        let correctAnswers = 0;
        //Counts number of correct answers
        shuffledQuestions.forEach((question) => {
            if (userAnswers[question.id] === question.answer) {
                correctAnswers += 1;
            }
        });

        //Results object with correctAnswers as well as time it took
        const result = {
            correctAnswers,
            time
        };

        //Adds results together and then pushes to the summary page
        addResult(result);
        history.push('/summary', result);
    };

    //Formats the time in minutes and seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    
    //Allows to go home instead of submit
    const handleHomeClick = () => {
        history.push('/')
    }
    return (
        <div className='quizBody'>
            <div className="header">
                <h2>Quiz Questions</h2>
                {/* Displays the formatted time */}
                <div className="timer">Time: {formatTime(time)}</div>
            </div>
            {/* From to display and submit quiz questions */}
            <form onSubmit={handleSubmit}>
                {/* Mapping through shuffled questions and displaying them */}
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
                <button className='button' onClick={handleHomeClick}>Home</button>
                <button className='button'type="submit">Submit</button>                
            </form>
        </div>
    );
};

export default QuizApp;
