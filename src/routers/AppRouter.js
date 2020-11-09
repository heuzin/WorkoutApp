import React from 'react';
import Header from '../components/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WorkoutDashboardApp from '../components/WorkoutDashboardPage';
import AddExercise from '../components/AddExercise';
import editExercisePage from '../components/EditExercisePage';
import ChestPage from '../components/ChestPage'
import BicepsPage from '../components/BicepsPage';
import TricepsPage from '../components/TricepsPage';
import ShouldersPage from '../components/ShouldersPage';
import BackPage from '../components/BackPage'
import LegsPage from '../components/LegsPage';

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={WorkoutDashboardApp} exact={true}/>
                <Route path='/create' component={AddExercise}/>
                <Route path='/edit/:id' component={editExercisePage}/>
                <Route path='/chest' component={ChestPage}/>
                <Route path='/biceps' component={BicepsPage}/>
                <Route path='/triceps' component={TricepsPage}/>
                <Route path='/shoulders' component={ShouldersPage}/>
                <Route path='/back' component={BackPage} />
                <Route path='/legs' component={LegsPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;