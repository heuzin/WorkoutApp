import { combineReducers, createStore } from 'redux';
import chestReducer from '../reducers/chestReducer';
import bicepsReducer from '../reducers/bicepsReducer';

export default () => {
    const store = createStore ( 
        combineReducers({
            chest: chestReducer,
            biceps: bicepsReducer
        }) 
    )

    return store
}