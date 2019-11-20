import React, {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import ModifiedIntelligentTreeSelect from "./ModifiedIntelligentTreeSelect";
import {NavLink} from "react-router-dom";

export const QueryEditor = (props) => {

    const [code, setCode] = useState(props.location && props.location.state.queryDocument.code);
    const [queryCategories, setQueryCategories] = useState(props.location && props.location.state.queryCategories);

    return (
        <Container fluid>
            <Row>
                <Col md={3} sd={2}>
                    <ModifiedIntelligentTreeSelect
                        name={"main_search"}
                        valueKey={"name"}
                        labelKey={"name"}
                        childrenKey={"subTerms"}
                        simpleTreeData={true}
                        isMenuOpen={true}
                        expanded={true}
                        options={props.categories}
                        onOptionsChange={(categories) => {
                            // props.selectCategories(props.selectedCategorizationId, categories);
                        }}
                        valueArray={queryCategories}
                        // createNewOption={this.props.rest.createNewOption}
                    />
                </Col>
                <Col>
                    <Row>

                    </Row>
                    <Row>
                        <AceEditor
                            mode="sparql"
                            onChange={(newValue) => setCode(newValue)}
                            value={code}
                            name="queryDocumentEditor"
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
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <InputGroup>
                                        <Col>
                                            <Card.Title>
                                                <FormControl
                                                    placeholder="Title"
                                                    aria-label="title"
                                                    value={props.location && props.location.state.queryDocument.title}
                                                />
                                            </Card.Title>
                                            <Card.Text>
                                                <FormControl
                                                    placeholder="Description"
                                                    aria-label="description"
                                                    as="textarea"
                                                    value={props.location && props.location.state.queryDocument.description}
                                                />
                                            </Card.Text>
                                        </Col>
                                    </InputGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="success" onClick={() => 0}>Save query</Button>
                            <NavLink className="btn btn-primary" to="/" onClick={() => 0}>
                                Back to main menu
                            </NavLink>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = state => ({
    ...state.explorerReducer,
    ...state.queryReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QueryEditor);
