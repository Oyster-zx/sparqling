/*
 src/reducers/rootReducer.js
*/
import {combineReducers} from 'redux';
import simpleReducer from './queryEditorReducer';
import explorerReducer from "./explorerReducer";
import queriesReducer from "./queriesReducer";

export default combineReducers({
    simpleReducer,
    explorerReducer,
    queriesReducer
});