import HomePage from '../App';
import './css/style.css'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import React from 'react';

const BackButton = () => {
    return (
        <Link className="back-button"to="/">Home</Link>
    );
};

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
            <BackButton />
        </Router>
    );
};

// This code above lets you use the back button to return to the Home Page

export default BackButton;
