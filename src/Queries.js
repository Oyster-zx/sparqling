import React from "react";
import Query from "./Query";
import {Col, Row} from "react-bootstrap";
import {MDBPageItem, MDBPageNav, MDBPagination} from "mdbreact";
import {connect} from "react-redux";

export const Queries = (props) => {

    let key = 0;

    return (
        <>
            {props.queryCategorizations && props.queryCategorizations.map((queryCategorization) => {
                return (<Query key={key++} queryCategorization={queryCategorization}/>)
            })}
            <Row>
                <hr/>
            </Row>
            <Row>
                <Col md={{offset: 2}}>
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
        </>)
}

const mapStateToProps = state => ({
    ...state.queriesReducer
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Queries);
