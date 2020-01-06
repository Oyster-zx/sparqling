import React, {Component} from 'react';
import CustomSparqlMode from "./CustomSparqlMode"
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-chrome";

export default class SparqlAceEditor extends Component {

    componentDidMount() {
        // const customMode = new CustomSparqlMode();
        // this.refs.aceQueryEditor.editor.getSession().setMode(customMode);
    }

    render() {
        return (
            <AceEditor
                // ref="aceQueryEditor"
                mode="sparql"
                theme="chrome"
                value={this.props.code ? this.props.code : ""}
                name="queryDocumentEditor"
                readOnly={this.props.readOnly}
                showPrintMargin={false}
                highlightActiveLine={false}
                width={800}
                minLines={20}
                maxLines={Infinity}
                fontSize={16}
                enableBasicAutocompletion={true}
                onChange={this.props.onChange}
            />
        );
    }
}