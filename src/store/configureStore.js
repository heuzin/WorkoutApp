import { combineReducers, createStore } from 'redux';
import chestReducer from '../reducers/chestReducer';
import bicepsReducer from '../reducers/bicepsReducer';
import tricepsReducer from '../reducers/tricepsReducer';
import shouldersReducer from '../reducers/shouldersReducer';
import backReducer from '../reducers/backReducer'
import legsReducer from '../reducers/legsReducer';

export default () => {
    const store = createStore ( 
        combineReducers({
            chest: chestReducer,
            biceps: bicepsReducer,
            triceps: tricepsReducer,
            shoulders: shouldersReducer,
            back: backReducer,
            legs: legsReducer
        }) 
    )

    return store
}