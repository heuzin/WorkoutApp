import React from 'react';
import ReactDOM from 'react-dom';
import WorkoutApp from './components/WorkoutApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

let appRoot = document.getElementById('app');

ReactDOM.render(<WorkoutApp />, appRoot);