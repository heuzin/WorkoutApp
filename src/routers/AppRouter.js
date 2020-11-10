import React from 'react';
import Header from '../components/Header';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
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
import editTricepsExercisePage from '../components/triceps//editTricepsExercisePage'

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
                <Route path='/edit/triceps/:id' component={editTricepsExercisePage}/>
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