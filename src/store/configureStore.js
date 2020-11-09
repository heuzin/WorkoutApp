import { combineReducers, createStore } from 'redux';
import exerciseReducer from '../reducers/exerciseReducer';
import chestReducer from '../reducers/chestReducer'

export default () => {
    const store = createStore ( 
        combineReducers({
            chest: chestReducer
        }) 
    )

    return store
}