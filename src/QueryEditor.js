import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {saveQuery} from "./actions/queryEditorAction";
import {Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import Explorer from "./Explorer";

export const QueryEditor = (props) => (
    <Container fluid>
        <Row>
            <Col md={3} sd={2}>
                <Explorer/>
            </Col>
            <Col>
                <Row>

                </Row>
                <Row>
                    <AceEditor
                        mode="sparql"
                        onChange={(newValue) => props.saveQuery(newValue)}
                        value={props.simpleReducer.query}
                        name="UNIQUE_ID_OF_DIV"
                        showPrintMargin={false}
                        highlightActiveLine={false}
                        width={800}
                        minLines={20}
                        maxLines={Infinity}
                        fontSize={16}
                        enableBasicAutocompletion={true}
                    />
                </Row>
            </Col>
            <Col>
                <Card className="queryCard" style={{width: '18rem'}}>
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <Col>
                                <Card.Title>
                                    <FormControl
                                        placeholder="Title"
                                        aria-label="title"
                                    />
                                </Card.Title>
                                <Card.Text>
                                    <FormControl
                                        placeholder="Description"
                                        aria-label="description"
                                        as="textarea"
                                    />
                                </Card.Text>
                            </Col>
                        </InputGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    saveQuery: (query) => dispatch(saveQuery(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryEditor);
