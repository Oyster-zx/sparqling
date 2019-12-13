import React, {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import ModifiedIntelligentTreeSelect from "./ModifiedIntelligentTreeSelect";

export const QueryEditor = (props) => {

    const [queryCategorization] = useState(props.queryCategorizationToEdit);
    const [queryDocument, setQueryDocument] = useState(props.queryCategorizationToEdit && props.queryCategorizationToEdit.queryDocument);
    const [categories, setCategories] = useState(props.queryCategorizationToEdit && props.queryCategorizationToEdit.categories);

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
                            setCategories(categories);
                        }}
                        valueArray={categories}
                        // createNewOption={this.props.rest.createNewOption}
                    />
                </Col>
                <Col>
                    <Row>
                        {categories && categories.map(category => {
                            return (
                                <h6 className="categoryTag">{category.name}</h6>
                            );
                        })}
                    </Row>
                    <Row>
                        <AceEditor
                            mode="sparql"
                            onChange={(newValue) => setQueryDocument({
                                ...queryDocument,
                                code: newValue
                            })}
                            value={queryDocument && queryDocument.code}
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
                                                    value={queryDocument && queryDocument.title}
                                                    onChange={(event) => {
                                                        setQueryDocument({
                                                            ...queryDocument,
                                                            title: event.target.value
                                                        })
                                                    }}
                                                />
                                            </Card.Title>
                                            <Card.Text>
                                                <FormControl
                                                    placeholder="Description"
                                                    aria-label="description"
                                                    as="textarea"
                                                    value={queryDocument && queryDocument.description}
                                                    onChange={(event) => setQueryDocument({
                                                        ...queryDocument,
                                                        description: event.target.value
                                                    })}
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
                            <Button variant="success" onClick={() => {
                                console.log(props)
                                if (queryCategorization && queryCategorization.id) {
                                    props.update(
                                        {
                                            id: queryCategorization.id,
                                            queryDocument: queryDocument,
                                            categories: categories
                                        })
                                } else {
                                    props.create(
                                        {
                                            categorizationId: props.categorization.id,
                                            queryDocument: queryDocument,
                                            categories: categories
                                        })
                                }
                            }}>Save query</Button>
                            <Button variant="danger" onClick={() => props.close()}>
                                Close
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = state => ({
    ...state.explorerReducer,
    ...state.queryReducer,
    ...state.queryEditorReducer
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryEditor);
