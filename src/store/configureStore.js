import { combineReducers, createStore } from 'redux';
import chestReducer from '../reducers/chestReducer';
import bicepsReducer from '../reducers/bicepsReducer';
import tricepsReducer from '../reducers/tricepsReducer';
import shouldersReducer from '../reducers/shouldersReducer';

export default () => {
    const store = createStore ( 
        combineReducers({
            chest: chestReducer,
            biceps: bicepsReducer,
            triceps: tricepsReducer,
            shoulders: shouldersReducer
        }) 
    )

    return store
}