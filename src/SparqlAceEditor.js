import React, {Component} from 'react';
// import CustomSparqlMode from "./CustomSparqlMode"
import AceEditor from "react-ace";

export default class SparqlAceEditor extends Component {

    componentDidMount() {
        // const customMode = new CustomSparqlMode();
        // this.refs.aceEditor.editor.getSession().setMode(customMode);
    }

    render() {
        return (
            <AceEditor
                ref="aceEditor"
                mode="sparql"
                value={this.props.code}
                name="queryDocumentEditor"
                readOnly={true}
                showPrintMargin={false}
                highlightActiveLine={false}
                width={'800'}
                maxLines={Infinity}
                fontSize={16}
                enableBasicAutocompletion={true}
            />
        );
    }
}