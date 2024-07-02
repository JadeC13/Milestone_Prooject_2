import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Board from './components/leaderboard';
import HomePage from './App';

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
            </Switch>
        </Router>
        // This code is the router just shows how we can navigate to the Leaderboard and the HomePage
    )
}
