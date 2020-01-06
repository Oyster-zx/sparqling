import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBDataTable} from 'mdbreact';
import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {deleteQueryResult, runQuery, setEndpoint} from "./actions/runnerAction";
import {ClipLoader} from "react-spinners";

export const QueryResult = (props) => {
    const [loading, setLoading] = useState(false);

    return (
        <Col>
            <Row>
                <TextField id="outlined-basic" label="SPARQL endpoint" margin="normal" variant="outlined"
                           fullWidth
                           defaultValue={props.endpoint}
                           onChange={(e) => {
                               props.setEndpoint(e.target.value)
                           }}
                />
                <Button variant="success" onClick={() => {
                    setLoading(true);
                    props.runQuery(props.endpoint, props.queryToRun);
                }}>Run</Button>
                <Button variant="danger" onClick={() => props.close()}> Close </Button>
            </Row>
            <Row>
                {!props.queryResult && !props.queryFail && <Col style={{display: 'flex', justifyContent: 'center'}}>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={loading}
                    />
                </Col>}
                {props.queryResult &&
                <Col>
                    <MDBDataTable striped bordered hover data={props.queryResult}/>
                </Col>}
                {props.queryFail &&
                <Col>
                    {props.queryFail}
                </Col>}
            </Row>
        </Col>)
};


const mapStateToProps = state => ({
    ...state.runnerReducer
});

const mapDispatchToProps = dispatch => ({
    setEndpoint: (endpoint) => dispatch(setEndpoint(endpoint)),
    runQuery: (endpoint, query) => {
        dispatch(deleteQueryResult());
        dispatch(runQuery(endpoint, query));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryResult);
