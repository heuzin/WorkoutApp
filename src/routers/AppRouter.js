import React from 'react';
import Header from '../components/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WorkoutDashboardApp from '../components/WorkoutDashboardPage';
import AddExercise from '../components/AddExercise';

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={WorkoutDashboardApp} exact={true}/>
                <Route path='/create' component={AddExercise} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;