import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";

export const Query = (props) => (
    <AceEditor
        mode="sparql"
        theme="monokai"
        value={props.code}
        name="UNIQUE_ID_OF_DIV"
        readOnly={true}
        showPrintMargin={false}
        highlightActiveLine={false}
        width={800}
        maxLines={Infinity}
        fontSize={16}
        enableBasicAutocompletion={true}
    />
)