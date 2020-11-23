import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import chestReducer from '../reducers/chestReducer';
import bicepsReducer from '../reducers/bicepsReducer';
import tricepsReducer from '../reducers/tricepsReducer';
import shouldersReducer from '../reducers/shouldersReducer';
import backReducer from '../reducers/backReducer';
import legsReducer from '../reducers/legsReducer';
import filtersReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore ( 
        combineReducers({
            chest: chestReducer,
            biceps: bicepsReducer,
            triceps: tricepsReducer,
            shoulders: shouldersReducer,
            back: backReducer,
            legs: legsReducer,
            filters: filtersReducer
        }), 
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}