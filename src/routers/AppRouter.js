import React from 'react';
import Header from '../components/Header';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import WorkoutDashboardApp from '../components/WorkoutDashboardPage';
import AddExercise from '../components/AddExercise';
import ChestPage from '../components/chest/ChestPage'
import BicepsPage from '../components/biceps/BicepsPage';
import TricepsPage from '../components/triceps/TricepsPage';
import ShouldersPage from '../components/shoulders/ShouldersPage';
import BackPage from '../components/back/BackPage';
import LegsPage from '../components/legs/LegsPage';
import editChestExercisePage from '../components/chest/editChestExercisePage';
import editBackExercisePage from '../components/back/editBackExercisePage';
import editBicepsExercisePage from '../components/biceps/editBicepsExercisePage';
import editTricepsExercisePage from '../components/triceps//editTricepsExercisePage';
import editShouldersExercisePage from '../components/shoulders/editShouldersExercisePage';
import editLegsExercisePage from '../components/legs/editLegsExercisePage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <Router history={history}>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={WorkoutDashboardApp}/>
                <PrivateRoute path='/create' component={AddExercise}/>
                <PrivateRoute path='/edit/chest/:id' component={editChestExercisePage}/>
                <PrivateRoute path='/edit/back/:id' component={editBackExercisePage}/>
                <PrivateRoute path='/edit/biceps/:id' component={editBicepsExercisePage}/>
                <PrivateRoute path='/edit/triceps/:id' component={editTricepsExercisePage}/>
                <PrivateRoute path='/edit/shoulders/:id' component={editShouldersExercisePage}/>
                <PrivateRoute path='/edit/legs/:id' component={editLegsExercisePage}/>
                <PrivateRoute path='/chest' component={ChestPage}/>
                <PrivateRoute path='/biceps' component={BicepsPage}/>
                <PrivateRoute path='/triceps' component={TricepsPage}/>
                <PrivateRoute path='/shoulders' component={ShouldersPage}/>
                <PrivateRoute path='/back' component={BackPage} />
                <PrivateRoute path='/legs' component={LegsPage}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;