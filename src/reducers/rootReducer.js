import {combineReducers} from 'redux';
import explorerReducer from "./explorerReducer";
import queryListReducer from "./queryListReducer";
import runnerReducer from "./runnerReducer";

const appReducer = combineReducers({
    explorerReducer,
    queryListReducer,
    runnerReducer
});

export default (state, action) => {
    if (action.type === 'CLEAN_STORE') {
        state = undefined
    }
    return appReducer(state, action)
};