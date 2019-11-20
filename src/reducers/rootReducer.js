/*
 src/reducers/rootReducer.js
*/
import {combineReducers} from 'redux';
import simpleReducer from './queryEditorReducer';
import explorerReducer from "./explorerReducer";
import queriesReducer from "./queriesReducer";
import queryReducer from "./queryReducer";

export default combineReducers({
    simpleReducer,
    explorerReducer,
    queriesReducer,
    queryReducer
});