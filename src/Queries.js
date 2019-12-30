import React, {useEffect, useState} from "react";
import Query from "./Query";
import {Button, Col, Row} from "react-bootstrap";
import {MDBPageItem, MDBPageNav, MDBPagination} from "mdbreact";
import {connect} from "react-redux";
import Modal from "react-modal";
import QueryEditor from "./QueryEditor";
import {createQueryCategorization} from "./actions/queryEditorAction";
import {fetchQueryDocuments} from "./actions/queriesAction";

const customStyles = {
    overlay: {zIndex: 1000}
};
Modal.setAppElement('#root');

export const Queries = (props) => {
    const [showQueryCreator, setShowQueryCreator] = useState(false);
    let key = 0;

    return (
        <>
            {props.selectedCategorization &&
            <>
                {props.queryCategorizations && props.queryCategorizations.length !== 0 &&
                <>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <Button variant="primary" onClick={() => setShowQueryCreator(true)}>
                                Create new query categorization
                            </Button>
                        </Col>
                    </Row>
                    {props.queryCategorizations && props.queryCategorizations.map((queryCategorization) => {
                        return (<Query key={key++} queryCategorization={queryCategorization}/>)
                    })}
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <MDBPagination className="mb-5" size="lg">
                                <MDBPageItem>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">Previous</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        1
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>2</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>3</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">Next</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                        </Col>
                    </Row>
                    <Row>
                        <Modal style={customStyles}
                               isOpen={showQueryCreator}
                               contentLabel="queryCreator"
                               onRequestClose={() => {
                                   setShowQueryCreator(!showQueryCreator);
                               }}>
                            <QueryEditor close={() => {
                                setShowQueryCreator(false);
                                props.fetchQueryDocuments(props.selectedCategorization.id, props.selectedCategories);
                            }} create={props.createQueryCategorization}/>
                        </Modal>
                    </Row>
                </>}
                {(!props.queryCategorizations || props.queryCategorizations.length === 0) &&
                <>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <h3>No query categorization found...</h3>
                        </Col>
                    </Row>
                </>}
            </>}
        </>)
};

const mapStateToProps = state => ({
    ...state.explorerReducer,
    ...state.queriesReducer
});

const mapDispatchToProps = dispatch => ({
    createQueryCategorization: (queryCategorization) => dispatch(createQueryCategorization(queryCategorization)),
    fetchQueryDocuments: (categorizationId, selectedCategories) => dispatch(fetchQueryDocuments(categorizationId, selectedCategories))
});

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
