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
                <Route path='/easy quiz'>
                    <QuizApp />
                </Route>
                <Route path='/summary'>
                    <Summary />
                </Route>
            </Switch>
        </Router>
    )
}