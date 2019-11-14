/*
 src/reducers/rootReducer.js
*/
import {combineReducers} from 'redux';
import simpleReducer from './simpleReducer';
import explorerReducer from "./explorerReducer";

export default combineReducers({
    simpleReducer,
    explorerReducer
});