/*
 src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import QueryEditor from './QueryEditor';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import {Main} from "./Main";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Main} />
            <Route path="/queryEditor" component={QueryEditor} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
