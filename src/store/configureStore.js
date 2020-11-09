import { combineReducers, createStore } from 'redux';
import chestReducer from '../reducers/chestReducer';
import bicepsReducer from '../reducers/bicepsReducer';
import tricepsReducer from '../reducers/tricepsReducer';

export default () => {
    const store = createStore ( 
        combineReducers({
            chest: chestReducer,
            biceps: bicepsReducer,
            triceps: tricepsReducer
        }) 
    )

    return store
}