import React, {useState} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import 'react-tagsinput/react-tagsinput.css'
import {Button, Card, Row} from "react-bootstrap";
import Modal from 'react-modal';
import {QueryResult} from "./QueryResult";
import {Link, NavLink} from 'react-router-dom'


const customStyles = {
    // content: {
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)'
    // },
    overlay: {zIndex: 1000}

};
Modal.setAppElement('#root');

export const Query = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Row>
                {props.categories.map(category => {
                    return (
                        <h6 className="myCustomTag">{category}</h6>
                    );
                })}
            </Row>
            <Row>
                <AceEditor
                    mode="sparql"
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
                <Card className="queryCard" style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="success" onClick={() => setShowModal(!showModal)}>Run query</Button>
                        <NavLink className="btn btn-primary" to="/queryEditor">
                            Edit query
                        </NavLink>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Modal style={customStyles}
                       isOpen={showModal}
                       contentLabel="onRequestClose Example"
                       onRequestClose={() => setShowModal(!showModal)}>
                    <QueryResult/>
                    <button onClick={() => setShowModal(!showModal)}>Close</button>
                </Modal>
            </Row>
        </>)
};