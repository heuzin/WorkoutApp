import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/routers/AppRouter'
import configureStore from './store/configureStore'
import { addExercise } from './actions/exercises'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState()
    const exercises = state.exercises
    console.log(exercises)
})

store.dispatch(addExercise({ name: 'Rosca Direta', series: 10, reps: 10, member: 'Biceps'}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);