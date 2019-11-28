import {combineReducers} from 'redux';
import simpleReducer from './queryEditorReducer';
import explorerReducer from "./explorerReducer";
import queriesReducer from "./queriesReducer";
import queryReducer from "./queryReducer";
import runnerReducer from "./runnerReducer";

export default combineReducers({
    simpleReducer,
    explorerReducer,
    queriesReducer,
    queryReducer,
    runnerReducer
});