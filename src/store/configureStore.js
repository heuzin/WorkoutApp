import { combineReducers, createStore } from 'redux';
import exerciseReducer from '../reducers/exerciseReducer';

export default () => {
    const store = createStore (
        combineReducers({
            exercises: exerciseReducer
        })
    )

    return store
}