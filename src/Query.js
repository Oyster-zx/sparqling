import React, {useState} from "react";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import 'react-tagsinput/react-tagsinput.css'
import {Button, Card, Col, Row} from "react-bootstrap";
import Modal from 'react-modal';
import QueryResult from "./QueryResult";
import SparqlAceEditor from "./SparqlAceEditor";
import {connect} from "react-redux";
import {deleteQueryCategorization, setQueryCategorizationToEdit, setQueryToRun} from "./actions/queryAction";
import QueryEditor from "./QueryEditor";


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
    const [showQueryRunner, setQueryRunner] = useState(false);
    const [showQueryEditor, setQueryEditor] = useState(false);

    let key = 0;

    return (
        <>
            <Col>
                <Row>
                    {props.queryCategorization && props.queryCategorization.categories.map(category => {
                        return (
                            <h6 key={key++} className="myCustomTag">{category.name}</h6>
                        );
                    })}
                </Row>
            </Col>
            <Row>
                <Col>
                    <SparqlAceEditor code={props.queryCategorization && props.queryCategorization.queryDocument.code}/>
                </Col>
                <Col>
                    <Card className="queryCard">
                        <Card.Body>
                            <Card.Title>{props.queryCategorization && props.queryCategorization.queryDocument.title}</Card.Title>
                            <Card.Text>{props.queryCategorization && props.queryCategorization.queryDocument.description}</Card.Text>
                            <Button variant="success" onClick={() => {
                                props.setQueryToRun(props.queryCategorization.queryDocument.code);
                                setQueryRunner(!showQueryRunner);
                            }}>Run query</Button>
                            <Button variant="warning" onClick={() => {
                                props.setQueryCategorizationToEdit(props.queryCategorization);
                                setQueryEditor(!showQueryEditor);
                            }}>Edit query</Button>
                            <Button variant="danger"
                                    onClick={() => props.deleteQueryCategorization(props.queryCategorization.id)}>Delete
                                query</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Modal style={customStyles}
                       isOpen={showQueryRunner}
                       contentLabel="queryRunner"
                       onRequestClose={() => setQueryRunner(!showQueryRunner)}>
                    <QueryResult close={() => setQueryRunner(false)}/>
                </Modal>
                <Modal style={customStyles}
                       isOpen={showQueryEditor}
                       contentLabel="queryEditor"
                       onRequestClose={() => setQueryEditor(!showQueryEditor)}>
                    <QueryEditor close={() => setQueryEditor(false)}/>
                </Modal>
            </Row>
        </>)
};

const mapStateToProps = state => ({
    ...state.queriesReducer
});

const mapDispatchToProps = dispatch => ({
    setQueryToRun: (query) => dispatch(setQueryToRun(query)),
    setQueryCategorizationToEdit: (queryCategorization) => dispatch(setQueryCategorizationToEdit(queryCategorization)),
    deleteQueryCategorization: (queryCategorizationId) => {
        dispatch(deleteQueryCategorization(queryCategorizationId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Query);
