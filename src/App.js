import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {saveQuery} from "./actions/simpleAction";

export const App = (props) => (
    <AceEditor
        mode="sparql"
        theme="monokai"
        onChange={(newValue) => props.saveQuery(newValue)}
        value={props.simpleReducer.query}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        enableBasicAutocompletion={true}
    />
);
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    saveQuery: (query) => dispatch(saveQuery(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
