/*
 src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import {Main} from "./Main";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/queryEditor" component={App} />
            <Route path="/sparqler" component={Main} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
