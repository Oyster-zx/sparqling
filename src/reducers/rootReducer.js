import {combineReducers} from 'redux';
import queryEditorReducer from './queryEditorReducer';
import explorerReducer from "./explorerReducer";
import queriesReducer from "./queriesReducer";
import queryReducer from "./queryReducer";
import runnerReducer from "./runnerReducer";

const appReducer = combineReducers({
    explorerReducer,
    queriesReducer,
    queryReducer,
    queryEditorReducer,
    runnerReducer
});

export default (state, action) => {
    if (action.type === 'CLEAN_STORE') {
        state = undefined
    }
    return appReducer(state, action)
};