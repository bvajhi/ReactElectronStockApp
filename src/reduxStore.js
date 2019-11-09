import {createStore, combineReducers} from 'redux';
import demo from './demoReducer';

export const store = createStore (
    combineReducers({demo}),
)