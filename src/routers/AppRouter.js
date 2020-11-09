import React from 'react';
import Header from '../components/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WorkoutDashboardApp from '../components/WorkoutDashboardPage';
import AddExercise from '../components/AddExercise';
import editExercisePage from '../components/EditExercisePage';
import ChestPage from '../components/ChestPage'

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={WorkoutDashboardApp} exact={true}/>
                <Route path='/create' component={AddExercise} />
                <Route path='/edit/:id' component={editExercisePage} />
                <Route path='/chest' component={ChestPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;