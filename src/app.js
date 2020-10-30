import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/routers/AppRouter'
import configureStore from './store/configureStore'
import { addChestExercise, addBicepsExercise, addTricepsExercise, addShoulderExercise, addLegsExercise } from './actions/exercises'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState()
    const exercises = state
    console.log(exercises)
})

store.dispatch(addChestExercise({ name: 'Supino', series: 10, reps: 10}))
store.dispatch(addBicepsExercise({ name: 'Rosca Martelo', series: 10, reps: 10}))
store.dispatch(addTricepsExercise({ name: 'Triceps Testa', series: 10, reps: 10}))
store.dispatch(addShoulderExercise({ name: 'Elevacao Frontal', series: 10, reps: 10}))
store.dispatch(addLegsExercise({ name: 'Leg Press', series: 10, reps: 10}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);