import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {saveQuery} from "./actions/queryEditorAction";
import {Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import ModifiedIntelligentTreeSelect from "./ModifiedIntelligentTreeSelect";
import {selectCategories} from "./actions/explorerAction";
import {fetchQueryDocuments} from "./actions/queriesAction";

export const QueryEditor = (props) => (
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
                    options={props.categories}
                    onOptionsChange={(categories) => {
                        props.selectCategories(props.selectedCategorizationId, categories);
                    }}
                    // valueArray={this.state.currentCategory}
                    // createNewOption={this.props.rest.createNewOption}
                />
            </Col>
            <Col>
                <Row>

                </Row>
                <Row>
                    <AceEditor
                        mode="sparql"
                        onChange={(newValue) => props.saveQuery(newValue)}
                        value={"teteas"}
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
    ...state.explorerReducer
});

const mapDispatchToProps = dispatch => ({
    saveQuery: (query) => dispatch(saveQuery(query)),
    selectCategories: (categorizationId, selectedCategories) => {
        dispatch(selectCategories(selectedCategories));
        dispatch(fetchQueryDocuments(categorizationId, selectedCategories));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryEditor);
