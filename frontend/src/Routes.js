import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Leaderboard from './components/leaderboard';
import HomePage from './App';
import QuizApp from './components/questions';
import Summary from './components/Summary';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/leaderboard'>
                    <Leaderboard />
                </Route>
                <Route path='/frontend/src/components/questions.js'>
                    <QuizApp />
                </Route>
                <Route path='/summary'>
                    <Summary />
                </Route>
            </Switch>
        </Router>
        // This code is the router just shows how we can navigate to the Leaderboard and the HomePage
    )
}
