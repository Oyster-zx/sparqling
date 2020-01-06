import React, {useState} from "react";
import Query from "./Query";
import {Button, Col, Row} from "react-bootstrap";
import {MDBPageItem, MDBPageNav, MDBPagination} from "mdbreact";
import {connect} from "react-redux";
import Modal from "react-modal";
import QueryEditor from "./QueryEditor";
import {createQueryCategorization} from "./actions/queryEditorAction";
import {fetchQueryDocuments} from "./actions/queryListAction";

const customStyles = {
    overlay: {zIndex: 1000}
};
Modal.setAppElement('#root');

export const QueryList = (props) => {
    let numberOfQueriesPerPage = 5;
    let key = 0;
    const [showQueryCreator, setShowQueryCreator] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            {props.selectedCategorization &&
            <>
                {props.queryCategorizations &&
                <>
                    <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <Button variant="primary" onClick={() => setShowQueryCreator(true)}>
                                Create new query categorization
                            </Button>
                        </Col>
                    </Row>
                    {props.queryCategorizations.slice((currentPage - 1) * numberOfQueriesPerPage, (currentPage - 1) * numberOfQueriesPerPage + numberOfQueriesPerPage).map((queryCategorization) => {
                        return (<Query key={key++} queryCategorization={queryCategorization}/>)
                    })}
                    <Row>
                        <hr/>
                    </Row>
                    {props.queryCategorizations && props.queryCategorizations.length !== 0 && <Row>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <MDBPagination color="blue">
                                <MDBPageItem onClick={() => {
                                    if (currentPage !== 1) {
                                        setCurrentPage(currentPage - 1)
                                    }
                                }}>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                {[...Array(props.queryCategorizations
                                    ? Math.ceil(props.queryCategorizations.length / numberOfQueriesPerPage) : 1)]
                                    .map((none, index) => {
                                        return (
                                            <MDBPageItem onClick={() => setCurrentPage(index + 1)}
                                                         active={currentPage === index + 1}>
                                                <MDBPageNav>
                                                    {index + 1}
                                                </MDBPageNav>
                                            </MDBPageItem>
                                        )
                                    })}
                                <MDBPageItem onClick={() => {
                                    let numberOfPages = props.queryCategorizations
                                        ? Math.ceil(props.queryCategorizations.length / numberOfQueriesPerPage) : 1;
                                    if (currentPage !== numberOfPages) {
                                        setCurrentPage(currentPage + 1)
                                    }
                                }}>
                                    <MDBPageNav>
                                        &raquo;
                                    </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                        </Col>
                    </Row>}
                    <Row>
                        <Modal style={customStyles}
                               isOpen={showQueryCreator}
                               contentLabel="queryCreator"
                               onRequestClose={() => {
                                   setShowQueryCreator(!showQueryCreator);
                               }}>
                            <QueryEditor close={() => {
                                setShowQueryCreator(false);
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
    ...state.queryListReducer
});

const mapDispatchToProps = dispatch => ({
    createQueryCategorization: (queryCategorization) => dispatch(createQueryCategorization(queryCategorization)),
    fetchQueryDocuments: (categorizationId, selectedCategories) => dispatch(fetchQueryDocuments(categorizationId, selectedCategories))
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryList);
