import React from 'react';
import Header from '../components/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import WorkoutDashboardApp from '../components/WorkoutDashboardPage';
import AddExercise from '../components/AddExercise';
import editChestExercisePage from '../components/chest/editChestExercisePage';
import ChestPage from '../components/chest/ChestPage'
import editBicepsExercisePage from '../components/biceps/editBicepsExercisePage'
import BicepsPage from '../components/biceps/BicepsPage';
import TricepsPage from '../components/triceps/TricepsPage';
import ShouldersPage from '../components/shoulders/ShouldersPage';
import editBackExercisePage from '../components/back/editBackExercisePage'
import BackPage from '../components/back/BackPage'
import LegsPage from '../components/legs/LegsPage';

const AppRouter = () => {
    const title = 'Workout app'
    return (   
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={WorkoutDashboardApp} exact={true}/>
                <Route path='/create' component={AddExercise}/>
                <Route path='/edit/chest/:id' component={editChestExercisePage}/>
                <Route path='/edit/back/:id' component={editBackExercisePage}/>
                <Route path='/edit/biceps/:id' component={editBicepsExercisePage}/>
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