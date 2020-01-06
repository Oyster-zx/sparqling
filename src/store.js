/*
 * src/store.js
 * With initialState
*/
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {
    queryListReducer: {
        queryCategorizations: []
    },
    runnerReducer: {
        endpoint: "https://query.wikidata.org/sparql"
    }
};

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
);