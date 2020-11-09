import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/routers/AppRouter'
import configureStore from './store/configureStore'
import { addChestExercise, addBicepsExercise, addTricepsExercise, addShoulderExercise, addLegsExercise, removeExercise, editExercise } from './actions/exercises'
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
// store.dispatch(addLegsExercise({ name: 'Leg Press', series: 10, reps: 10}))
store.dispatch(addChestExercise({ name: 'Sssso', series: 10, reps: 10}))

// const state = store.getState()
// const exercises = state
// store.dispatch(removeExercise({ id: exercises[0].id }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

// const id02 = exercises[2].id

// store.dispatch(editExercise( id02, { series: 20 } ))

let appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);