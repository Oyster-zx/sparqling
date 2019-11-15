import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import 'react-tagsinput/react-tagsinput.css'
import {Button, Card, Col, Row} from "react-bootstrap";
import Modal from 'react-modal';
import {QueryResult} from "./QueryResult";
import {Link, NavLink} from 'react-router-dom'
import CustomSparqlMode from "./CustomSparqlMode";
import SparqlAceEditor from "./SparqlAceEditor";


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
            <Col>
                <Row>
                    {props.categories.map(category => {
                        return (
                            <h6 className="myCustomTag">{category}</h6>
                        );
                    })}
                </Row>
            </Col>
            <Row>
                <Col>
                    <SparqlAceEditor code={props.code}/>
                </Col>
                <Col>
                    <Card className="queryCard">
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
                            <Button variant="danger" onClick={() => 0}>Delete query</Button>
                        </Card.Body>
                    </Card>
                </Col>
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