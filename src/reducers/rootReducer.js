import {combineReducers} from 'redux';
import queryEditorReducer from './queryEditorReducer';
import explorerReducer from "./explorerReducer";
import queriesReducer from "./queriesReducer";
import queryReducer from "./queryReducer";
import runnerReducer from "./runnerReducer";

export default combineReducers({
    explorerReducer,
    queriesReducer,
    queryReducer,
    queryEditorReducer,
    runnerReducer
});