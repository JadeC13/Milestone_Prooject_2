import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Board from './components/leaderboard';
import HomePage from './App';
import QuizApp from './components/questions';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/leaderboard'>
                    <Board />
                </Route>
                <Route path='/frontend/src/components/questions.js'>
                    <QuizApp />
                </Route>
            </Switch>
        </Router>
    )
}
