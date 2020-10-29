import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from '../src/routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);