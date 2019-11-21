import React, {useState} from "react";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import 'react-tagsinput/react-tagsinput.css'
import {Button, Card, Col, Row} from "react-bootstrap";
import Modal from 'react-modal';
import {QueryResult} from "./QueryResult";
import {NavLink} from 'react-router-dom'
import SparqlAceEditor from "./SparqlAceEditor";
import {connect} from "react-redux";
import {editQueryDocument} from "./actions/queryAction";


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
                    {props.categories && props.categories.map(category => {
                        return (
                            <h6 className="myCustomTag">{category.name}</h6>
                        );
                    })}
                </Row>
            </Col>
            <Row>
                <Col>
                    <SparqlAceEditor code={props.queryDocument.code}/>
                </Col>
                <Col>
                    <Card className="queryCard">
                        <Card.Body>
                            <Card.Title>{props.queryDocument.title}</Card.Title>
                            <Card.Text>{props.queryDocument.description}</Card.Text>
                            <Button variant="success" onClick={() => setShowModal(!showModal)}>Run query</Button>
                            <NavLink className="btn btn-primary"
                                     to={{
                                         pathname: '/queryEditor', state: {
                                             queryDocument: props.queryDocument,
                                             queryCategories: props.categories
                                         }
                                     }}>
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

const mapStateToProps = state => ({
    ...state.queriesReducer
});

const mapDispatchToProps = dispatch => ({
    editQueryDocument: (queryDocument) => dispatch(editQueryDocument(queryDocument)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Query);
