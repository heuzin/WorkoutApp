import React from 'react';
import Header from '../components/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WorkoutApp from '../components/WorkoutApp';
import AddExercise from '../components/AddExercise';

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <BrowserRouter>
            <Header title={title}/>
            <Switch>
                <Route path='/' component={WorkoutApp} exact={true}/>
                <Route path='/create' component={AddExercise} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;