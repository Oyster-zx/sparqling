import React, {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import ModifiedIntelligentTreeSelect from "./ModifiedIntelligentTreeSelect";
import "ace-builds/src-noconflict/mode-sparql";
import "ace-builds/src-noconflict/theme-chrome";
import SparqlAceEditor from "./SparqlAceEditor";

export const QueryEditor = (props) => {

    const [queryCategorization] = useState(props.queryCategorizationToEdit);
    const [queryDocument, setQueryDocument] = useState(props.queryCategorizationToEdit
        ? props.queryCategorizationToEdit.queryDocument
        : {
            title: "",
            description: "",
            code: ""
        });
    const [categories, setCategories] = useState(props.queryCategorizationToEdit
        ? props.queryCategorizationToEdit.categories
        : []);

    return (
        <Container fluid>
            <Row>
                <Col md={3} sd={2}>
                    <Row>
                        <Col>
                            <ModifiedIntelligentTreeSelect
                                name={"main_search"}
                                valueKey={"name"}
                                labelKey={"name"}
                                childrenKey={"subTerms"}
                                simpleTreeData={true}
                                isMenuOpen={true}
                                expanded={true}
                                showSettings={false}
                                options={props.categories}
                                onOptionsChange={(categories) => {
                                    setCategories(categories);
                                }}
                                valueArray={categories}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="queryEditorCard">
                                <Card.Body>
                                    <Card.Text>
                                        Use tree of categories to add or remove category from query
                                        categorization.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
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
                        <SparqlAceEditor
                            readOnly={false}
                            code={queryDocument ? queryDocument.code : ""}
                            onChange={(newValue) => setQueryDocument({
                                ...queryDocument,
                                code: newValue
                            })}
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
                                                    size={5000}
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
                                                    size={5000}
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
                                            categorizationId: props.selectedCategorization.id,
                                            queryDocument: queryDocument,
                                            categories: categories
                                        })
                                }
                                props.close()
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
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QueryEditor);
