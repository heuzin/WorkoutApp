import React from 'react';
import Header from '../components/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WorkoutApp from '../components/WorkoutApp';

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <BrowserRouter>
            <Header title={title}/>
            <Switch>
                <Route to='/' component={WorkoutApp} exact={true}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;