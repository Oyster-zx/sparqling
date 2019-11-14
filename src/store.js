/*
 * src/store.js
 * With initialState
*/
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
    explorerReducer: {
        expanded: [],
        checked: [],
        nodes: []
    }
};

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
);