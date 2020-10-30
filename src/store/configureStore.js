import { combineReducers, createStore } from 'redux';
import exerciseReducer from '../reducers/exerciseReducer';

export default () => {
    const store = createStore ( exerciseReducer )

    return store
}