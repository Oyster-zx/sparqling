import React, {Component} from 'react';
import CustomSparqlMode from "./CustomSparqlMode"
import AceEditor from "react-ace";

export default class SparqlAceEditor extends Component {

    componentDidMount() {
        const customMode = new CustomSparqlMode();
        this.refs.aceEditor.editor.getSession().setMode(customMode);
    }

    render() {
        return (
            <div>
                <AceEditor
                    ref="aceEditor"
                    mode="sparql"
                    value={this.props.code}
                    name="UNIQUE_ID_OF_DIV"
                    readOnly={true}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    width={800}
                    maxLines={Infinity}
                    fontSize={16}
                    enableBasicAutocompletion={true}
                />
            </div>
        );
    }
}