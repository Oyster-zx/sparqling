/*
 src/reducers/rootReducer.js
*/
import {combineReducers} from 'redux';
import simpleReducer from './queryEditorReducer';
import explorerReducer from "./explorerReducer";

export default combineReducers({
    simpleReducer,
    explorerReducer
});